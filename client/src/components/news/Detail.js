import React, { Component, Fragment } from "react"
import { GridList, GridListTile, Typography } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

import FrontendLayout from "../../layout/FrontendLayout"

import { useStyles } from "./styles"
import NewsAPIClient from "../../services/NewsAPIClient"

class Detail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      detail: null,
      loading: true
    }
  }
  componentWillMount = () => {
    if (!this.props.itemId) {
      this.props.history.push({ pathname: `/news` })
    }
  }

  componentDidMount = async () => {
    // fetch bars api
    const data = await NewsAPIClient.getNewsApi()
    if (typeof data !== "string") {
      const article = data.articles.find(
        (item, key) => key === this.props.itemId
      )

      this.setState({
        detail: article
      })
    } else {
      this.setState({
        errMsg: data
      })
    }
  }

  render() {
    const { classes } = this.props
    const { detail } = this.state

    return (
      <FrontendLayout>
        <Typography component="div" gutterBottom variant="h4">
          News Detail {detail.title}
        </Typography>

        {detail && (
          <GridList className={classes.gridDetail}>
            <Typography component="div" gutterBottom variant="h3">
              {detail.title}
            </Typography>
            <Typography component="p" gutterBottom variant="h4">
              original link:{" "}
              <a href={detail.url} target="_blank">
                {detail.url}
              </a>
            </Typography>
            <GridListTile className={classes.gridListTileDetail}>
              <img src={detail.urlToImage} alt={detail.title} />
              <Typography component="div">{detail.content}</Typography>
            </GridListTile>
          </GridList>
        )}
      </FrontendLayout>
    )
  }
}

export default withStyles(useStyles)(Detail)
