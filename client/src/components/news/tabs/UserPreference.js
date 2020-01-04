import React, { Fragment } from "react"
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core"

import { useStyles } from "./styles"
import { UserPreferenceNewsHook } from "../../../hooks/UserPreferenceNewsHook"
import NewsItem from "../NewsItem"

const UserPreference = ({ history }) => {
  // use Hook
  const [items, userPreference, handleChange] = UserPreferenceNewsHook()

  const classes = useStyles()

  const viewDetail = url => {
    history.push({ pathname: `/news/detail/${url}`, url })
  }

  const options = ["bitcoin", "apple", "earthquake", "animal"]

  return (
    <Fragment>
      {renderOptions(options, classes, userPreference, handleChange)}
      <Grid container spacing={5} style={{ padding: 5 }}>
        {items.map((item, key) => (
          <NewsItem
            key={key}
            item={item}
            classes={classes}
            viewDetail={viewDetail}
          />
        ))}
      </Grid>
    </Fragment>
  )
}

const renderOptions = (options, classes, selectedOption, handleChange) => {
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{selectedOption}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedOption}
        onChange={e => handleChange(e.target.value)}
      >
        {options.map((v, k) => {
          return (
            <MenuItem key={k} value={v}>
              {v}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export { UserPreference }
