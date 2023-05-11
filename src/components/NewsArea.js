import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsArea extends Component { static proptype={ 
}
  render() {
    return (
      <div className='container my-3'>
        <h2> News 1214 - Top headlines</h2>
        <div className='row'>
          <div className="col-md-4">
               <NewsItem title="my title" description ="my desc"/>
        </div>
        <div className="col-md-4">
                <NewsItem title="my title" description ="my desc"/>
        </div> 
             <div className="col-md-4">
                 <NewsItem title="my title" description ="my desc"/>
        </div> 
               <div className="col-md-4">
                 <NewsItem title="my title" description ="my desc"/>
        </div>
             </div>
                  </div>
    )
  }
}


export default NewsArea
