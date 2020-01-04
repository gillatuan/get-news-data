import React from "react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@material-ui/core"

const NewsItem = props => {
  return (
    <Grid item xs={12} sm={6} lg={4} xl={3}>
      <Card>
        <CardMedia
          style={{ height: 0, paddingTop: "56.25%" }}
          image={props.item.urlToImage}
          title={props.item.title}
          onClick={() => props.viewDetail(props.item.url)}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="h2">
            {props.item.title}
          </Typography>
          <Typography
            component="p"
            style={{ maxHeight: "160px", overflow: "hidden" }}
          >
            by {props.item.author}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href={props.item.url}
            target="_blank"
          >
            Go To Original Link
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default NewsItem
