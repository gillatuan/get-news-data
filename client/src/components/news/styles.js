import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridDetail: {
    height: "100%"
  },
  gridList: {},
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  gridListTile: {
    margin: 5,
    width: "49% !important"
  },
  gridListTileDetail: {
    height: "auto",
    flexShrink: "unset",

    "& img": {
      height: "auto",
      left: "unset",
      transform: "none"
    }
  }
}))
