import React from 'react'
import { Grid } from '@material-ui/core'

import { useStyles } from './styles'
import { TopHeadlineNewsHook } from '../../../hooks/TopHeadlineNewsHook'
import NewsItem from '../NewsItem'

const TopHeadline = ({ history }) => {
  // use Hook
  const [items] = TopHeadlineNewsHook()

  const classes = useStyles()

  const viewDetail = (id) => {
    history.push({ pathname: `/news/detail/${id}`, itemId: id })
  }

  return (
    <Grid container spacing={5} style={{ padding: 5 }}>
      {items.map((item, key) => (
        <NewsItem key={key} item={item} classes={classes} viewDetail={viewDetail} />
      ))}
    </Grid>
  )
}

export { TopHeadline }
