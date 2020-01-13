import React from "react"
import { Typography, Grid } from "@material-ui/core"

import NewsItem from "./NewsItem"
import FrontendLayout from "../../layout/FrontendLayout"
import { ListNewsHook } from "../../hooks/ListNewsHook"

import { useStyles } from "./styles"

const List = ({ history }) => {
  // use Hook
  const [items] = ListNewsHook()

  const classes = useStyles()

  const viewDetail = url => {
    history.push({ pathname: `/news/detail/${url}`, url })
  }

  return (
    <FrontendLayout>
      <Typography component="div" gutterBottom variant="h4">
        News List Demo
      </Typography>

      <Grid container spacing={5} style={{ padding: 5 }}>
        {items && items.map((item, key) => (
          <NewsItem
            key={key}
            item={item}
            classes={classes}
            viewDetail={viewDetail}
          />
        ))}
      </Grid>
    </FrontendLayout>
  )
}

export { List }
