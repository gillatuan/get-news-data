import React from 'react'
import {
  Paper,
  withStyles,
} from '@material-ui/core'
import { styles } from './styles'
import * as Utils from '../../utils/Utils'
import { setCurrentUser } from '../../redux/actions/loginAction'
import { useStyles } from '../news/styles'

const Profile = (props) => {
  debugger
  const classes = useStyles()

  return (
    <Paper className={classes.paperRoot}>
      User Profile
    </Paper>
  )
}

export default Utils.routerConnect(
  withStyles(styles)(Profile),
  { setCurrentUser },
  (state) => {
    return {
      ...state.user
    }
  }
)
