import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h1>News1214 -- Topheadlines</h1>
        <div className="row">
          <div className="col-md-4">
        <NewsItem title="my title" description="my desc" imageUrl="https://media.cnn.com/api/v1/images/stellar/prod/230603055102-02-india-train-crash-060323.jpg?c=16x9&q=w_800,c_fill"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="my title" description="my desc"/>
        </div>
        <div className="col-md-4">
        <NewsItem title="my title" description="my desc"/>
        </div>
      </div>
      </div>
    )
  }
}

export default News
