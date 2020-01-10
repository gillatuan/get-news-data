import React from 'react'
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from '@material-ui/core'
import { Face, Fingerprint } from '@material-ui/icons'
import { styles } from './styles'
import * as Utils from '../../utils/Utils'
import { setCurrentUser } from '../../redux/actions/loginAction'
import { useStyles } from '../news/styles'
import { LoginHook } from '../../hooks/LoginHook'

const Login = (props) => {
  const classes = useStyles()
  const { state, initData, onChangeHook } = LoginHook(props)

  // check whether user is authenticated
  initData()

  const onChange = (e) => {
    const { name, value } = e.target
    let msgErr = ''
    let data = {
      ...state,
      [name]: value,
      messageErr: {
        [name]: msgErr
      }
    }

    if (value === '') {
      msgErr = 'This field is not empty'
      data = {
        ...data,
        messageErr: {
          [name]: msgErr
        }
      }
    }

    // call hook
    onChangeHook(data)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!state.email || !state.password) {
      return onChangeHook({
        messageErr: {
          email: 'Email is not empty',
          password: 'Password is not empty'
        }
      })
    }

    props.setCurrentUser({ ...state })
  }

  return (
    <Paper className={classes.paperRoot}>
      <Grid container spacing={8} alignItems="flex-end">
        <Grid item>
          <Face />
        </Grid>
        <Grid item md={true} sm={true} xs={true}>
          <TextField
            autoFocus
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            placeholder="Email Address"
            required
            type="email"
            value={state.email}
            onChange={onChange}
            error={state.messageErr && state.messageErr.email}
          />
        </Grid>
      </Grid>
      <Grid container spacing={8} alignItems="flex-end">
        <Grid item>
          <Fingerprint />
        </Grid>
        <Grid item md={true} sm={true} xs={true}>
          <TextField
            fullWidth
            id="password"
            label="Password"
            placeholder="Password"
            name="password"
            required
            type="password"
            value={state.password}
            onChange={onChange}
            error={state.messageErr && state.messageErr.password}
          />
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember me"
          />
        </Grid>
        <Grid item>
          <Button
            disableFocusRipple
            disableRipple
            style={{ textTransform: 'none' }}
            variant="text"
            color="primary"
          >
            Forgot password ?
          </Button>
        </Grid>
      </Grid>
      <Grid container justify="center" style={{ marginTop: '10px' }}>
        <Button
          color="primary"
          disabled={
            (state.messageErr &&
              (state.messageErr.email || state.messageErr.password)) ||
            false
          }
          style={{ textTransform: 'none' }}
          variant="outlined"
          onClick={onSubmit}
        >
          Login
        </Button>
      </Grid>
    </Paper>
  )
}

export default Utils.routerConnect(
  withStyles(styles)(Login),
  { setCurrentUser },
  (state) => {
    return {
      ...state.login
    }
  }
)
