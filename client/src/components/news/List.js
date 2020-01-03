import React, { Component } from "react"
import { Typography, Grid } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

import FrontendLayout from "../../layout/FrontendLayout"

import { useStyles } from "./styles"
import NewsAPIClient from "../../services/NewsAPIClient"
import NewsItem from './NewsItem'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      data: {
        articles: []
      },
      errMsg: ""
    }
  }

  componentWillMount = () => {
    this.setState({
      loading: true
    })
  }

  componentDidMount = async () => {
    // fetch bars api
    const data = await NewsAPIClient.getNewsApi()
    debugger
    if (typeof data !== "string") {
      this.setState({
        data,
        loading: false
      })
    } else {
      this.setState({
        errMsg: data
      })
    }
  }

  viewDetail = (id) => {
    this.props.history.push({ pathname: `/news/detail/${id}`, itemId: id })
  }

  render() {
    const { classes } = this.props
    const { data } = this.state
    debugger

    return (
      <FrontendLayout>
        <Typography component="div" gutterBottom variant="h4">
          News List Demo 
        </Typography>

        <Grid container spacing={5} style={{ padding: 5 }}>
          {data.articles.length > 0 && data.articles.map((item, key) => (
            <NewsItem key={key} item={item} classes={classes} viewDetail={this.viewDetail} />
          ))}
        </Grid>
      </FrontendLayout>
    )
  }
}

export default withStyles(useStyles)(List)
