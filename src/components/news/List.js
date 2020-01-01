import React, { Component } from "react"
import { GridList, GridListTile, GridListTileBar, IconButton, ListSubheader, Typography, Link } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

import FrontendLayout from "../../layout/FrontendLayout"

import { useStyles } from "./styles"
import NewsAPIClient from "../../services/NewsAPIClient"

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

  viewDetail = (tile, id) => {
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

        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">December</ListSubheader>
          </GridListTile>
          {renderItems(data.articles, classes, this.viewDetail)}
        </GridList>
      </FrontendLayout>
    )
  }
}

const renderItems = (items, classes, viewDetail) => {
  return (
    items.length > 0 && items.map((tile, key) => (
      <GridListTile key={key} className={classes.gridListTile}>
        <Link onClick={() => viewDetail(tile, key)}>
          <img src={tile.urlToImage} alt={tile.title} />
        </Link>
        <GridListTileBar
          title={tile.title}
          subtitle={<span>by: {tile.author}</span>}
        />
      </GridListTile>
    ))
  )
}

export default withStyles(useStyles)(List)
