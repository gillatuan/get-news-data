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

  const viewDetail = id => {
    history.push({ pathname: `/news/detail/${id}`, itemId: id })
  }

  return (
    <FrontendLayout>
      <Typography component="div" gutterBottom variant="h4">
        News List Demo
      </Typography>

      <Grid container spacing={5} style={{ padding: 5 }}>
        {items.map((item, key) => (
          <NewsItem
            key={key}
            item={item}
            classes={classes}
            viewDetail={() => viewDetail(key)}
          />
        ))}
      </Grid>
    </FrontendLayout>
  )
}

/* class List extends Component {
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

  viewDetail = id => {
    this.props.history.push({ pathname: `/news/detail/${id}`, itemId: id })
  }

  render() {
    const { classes } = this.props
    const { data } = this.state

    return (
      <FrontendLayout>
        <Typography component="div" gutterBottom variant="h4">
          News List Demo
        </Typography>

        <Grid container spacing={5} style={{ padding: 5 }}>
          {data.articles.length > 0 &&
            data.articles.map((item, key) => (
              <NewsItem
                key={key}
                item={item}
                classes={classes}
                viewDetail={this.viewDetail}
              />
            ))}
        </Grid>
      </FrontendLayout>
    )
  }
} */

export { List }
