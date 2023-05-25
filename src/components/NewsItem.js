import React, { Component } from 'react'

export class NewsItem extends Component{

  render() {
    let {title, description, imageUrl, url } =this.props; 
    return (
    <div className='my-3'>
<div className="card" style={{ width: '18rem' }}>
  <img src={!imageUrl?"https://image.cnbcfm.com/api/v1/image/107221976-1680808863244-IMG_8927r.jpg" :imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {title}...</h5>
    <p className="card-text">{description}</p>
    <a href={url} rel="noreferrer" target= "_blank" className="btn btn-sm btn-dark">Read more</a>
  </div>
  </div>
      </div>
    )
  }
}


export default NewsItem;
