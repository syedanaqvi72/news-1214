import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsArea extends Component { static proptype={ 
}
  render() {
    return (
      <div>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        <NewsItem/>
        

      </div>
    )
  }
}


export default NewsArea
