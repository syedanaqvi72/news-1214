import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
  let  {title, description} this.props;
    return (
      <div>
               <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
    <a href="/" className="card-link">facebook</a>
    <a href="/" className="card-link">instagram</a>
    <a href="/" className="card-link">twitter</a>
  </div>
</div>

      </div>
      
    )
  }
}

export default NewsItem;
