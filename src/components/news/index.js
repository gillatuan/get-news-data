import React, { Component } from "react"

import List from "./List"
import Detail from "./Detail"
import { loadWrapper } from "../../common/LoadingWrapper"

// import "./posts.css"

class NewsComponent extends Component {
  renderComp = (location, match) => {
    let content = {}
    
    switch (location.pathname) {
      case "/news/list":
        content = <List {...this.props} />
        break
      case `/news/detail/${location.itemId}`:
        content = <Detail {...this.props} itemId={location.itemId} />
        break
      /* case `/api/posts/${match.params.id}`:
        content = <Edit {...this.props} itemId={match.params.id} />
        break */

      default:
        content = <List {...this.props} />
        break
    }

    return content
  }

  render() {
    const { location, match } = this.props

    return <div className="item-model news">{this.renderComp(location, match)}</div>
  }
}

export default loadWrapper(NewsComponent)