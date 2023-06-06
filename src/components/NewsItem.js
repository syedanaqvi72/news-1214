import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
  let  {title,description, imageUrl, url}= this.props;

  return (
      <div className="my-3">
               <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">Read More
    </a>
    <a href="/" className="card-link">facebook</a>
    <a href="/" className="card-link">instagram</a>
    <a href="/" className="card-link">twitter</a>
  </div>
</div>
</div>
      </div>
      
    );
  }
}

export default NewsItem;
