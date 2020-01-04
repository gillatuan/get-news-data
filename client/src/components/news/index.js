import React, { Component, Fragment } from "react"

import { List } from "./List"
import { Detail } from "./Detail"
import SimpleTabs from "./tabs"

import { loadWrapper } from "../common/LoadingWrapper"

// import "./posts.css"

class NewsComponent extends Component {
  renderComp = (location, match) => {
    let content = {}

    if (location.pathname === `/news` || location.pathname === `/news/list`) {
      content = (
        <Fragment>
          <List {...this.props} />
          <SimpleTabs {...this.props} />
        </Fragment>
      )
    }
    if (location.pathname.indexOf(`/news/detail/`) > -1) {
      content = <Detail {...this.props} url={location.url} />
    }

    return content
  }

  render() {
    const { location, match } = this.props

    return (
      <div className="item-model news">{this.renderComp(location, match)}</div>
    )
  }
}

export default loadWrapper(NewsComponent)
