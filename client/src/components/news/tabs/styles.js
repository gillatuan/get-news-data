import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    flexGrow: 1,
    margin: "auto",
    width: "80%"
  },
  topHeadlineNews: {
    "& li": {
      listStyleType: "none"
    }
  },
  formControl: {
    marginBottom: 20
  }
}))
