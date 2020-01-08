import React from 'react'
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core'
import { Face, Fingerprint } from '@material-ui/icons'
import { styles } from './styles'
import * as Utils from '../../utils/Utils'
import { setCurrentUser } from '../../redux/actions/loginAction'
import { useStyles } from '../news/styles'
import { LoginHook } from '../../hooks/LoginHook'

const Login = (props) => {
  const classes = useStyles()
  const {email, password} = LoginHook()

  const onSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      this.setState({
        messageErr: {
          email: 'Email is not empty',
          password: 'Password is not empty',
        },
      })

      return
    }

    const userData = {
      email,
      password,
    }

    props.setCurrentUser(userData)
  }

  const onChange = (e) => {
    if (e.target.value === '') {
      this.setState({
        [e.target.name]: e.target.value,
        messageErr: {
          [e.target.name]: 'This field is not empty',
        },
      })

      return
    }

    this.setState({
      [e.target.name]: e.target.value,
      messageErr: {
        [e.target.name]: '',
      },
    })
  }

  return (
    <Paper className={ classes.paperRoot }>
      <Grid container spacing={ 8 } alignItems="flex-end">
        <Grid item>
          <Face/>
        </Grid>
        <Grid item md={ true } sm={ true } xs={ true }>
          <TextField
            autoFocus
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            placeholder="Email Address"
            required
            type="email"
            value={ email }
            onChange={ e => this.onChange(e) }
            error={ messageErr.email }
          />
        </Grid>
      </Grid>
      <Grid container spacing={ 8 } alignItems="flex-end">
        <Grid item>
          <Fingerprint/>
        </Grid>
        <Grid item md={ true } sm={ true } xs={ true }>
          <TextField
            fullWidth
            id="password"
            label="Password"
            placeholder="Password"
            name="password"
            required
            type="password"
            value={ password }
            onChange={ e => this.onChange(e) }
            error={ messageErr.password }
          />
          <TextField
          />
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <FormControlLabel
            control={ <Checkbox color="primary"/> }
            label="Remember me"
          />
        </Grid>
        <Grid item>
          <Button
            disableFocusRipple
            disableRipple
            style={ {textTransform: 'none'} }
            variant="text"
            color="primary"
          >
            Forgot password ?
          </Button>
        </Grid>
      </Grid>
      <Grid container justify="center" style={ {marginTop: '10px'} }>
        <Button
          color="primary"
          disabled={ ((messageErr.email || messageErr.password) && true) || false }
          style={ {textTransform: 'none'} }
          variant="outlined"
          onClick={ e => this.onSubmit(e) }
        >
          Login
        </Button>
      </Grid>
    </Paper>
  )
}

export default Utils.routerConnect(
  withStyles(styles)(Login),
  {setCurrentUser},
  (state) => {
    return {
      ...state.Login,
    }
  },
)
