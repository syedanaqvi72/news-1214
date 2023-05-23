import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class NewsArea extends Component
{ articles=[
  {
    "source":{"id":"news24","name":"News24"},
    "author":"Compiled by Khanyiso Tshwaku",
    "title":"Cricket SA, SuperSport extend broadcast partnership, more coverage for Proteas women",
    "description":"Cricket South Africa and broadcasting partner SuperSport have extended their current broadcast deal until the end of the 2026/27 season.",
    "url":"https://www.news24.com/sport/cricket/proteas/cricket-sa-supersport-extend-broadcast-partnership-more-coverage-for-proteas-women-20230515","urlToImage":"https://cdn.24.co.za/files/Cms/General/d/1212/ac70762e750c4ba2b628cc74e3a57e48.jpg",
    "publishedAt":"2023-05-15T11:25:00+00:00","content":"<ul><li>Cricket SA and SuperSport have signed a long-term broadcast deal.</li><li>More coverage will be given to women's cricket.</li><li>CSA will also get the rights to produce and live stream non-t… [+1872 chars]"},
    {"source":{"id":"bbc-sport","name":"BBC Sport"},
    "author":null,"title":"Can you name these Ashes cricketers?",
    "description":"Test your knowledge of Ashes cricketers by naming these five players.",
    "url":"http://www.bbc.co.uk/sport/cricket/65467532","urlToImage":"https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/AD44/production/_129665344_quiz-index-imagery-cant-show-face-generic--0a007d46-8def-4142-9c0b-c5b25e9753d0.png","publishedAt":"2023-05-15T06:22:19.5586318Z","content":"Think you know your Ashes cricketers? It's time to put that knowledge to the test.\r\nYou've got two minutes to name five players who have featured in the men's or women's Ashes since 1990.\r\nAnd make s… [+208 chars]"},
    {"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},
    "author":null,"title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    "description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    "url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg","publishedAt":"2020-04-27T11:41:47Z",
     "content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"}
    ,{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},
    "author":null,"title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    "description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    "url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    "urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg","publishedAt":"2020-03-30T15:26:05Z","content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"}
  ]

  constructor(){
    super();
console.log("hello i am a constructor from News component");
this.state={
  articles:this.articles,
  loading:false

};
}
  render(){
    return (
      <div className="container my-4">
        <h2> News 1214 - Top headlines</h2>
        <div className='row'>
        {this.state.articles.map{(element)=>{
          return
          <div className="col-md-4" key={element.url}>
               <NewsItem title={ element.title.slice(0,40)}
               description ={element.description.slice(0,88)} imageUrl={element.urlToImage} url={element.url}/>
        </div>
        
        }}}

             </div>
             </div>
                
    )
  }

}

export default NewsArea;
