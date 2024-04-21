import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {Title, Description, imgUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="card my-4" style={{width: "18rem"}}>
          <img src={imgUrl? imgUrl : "https://www.cnet.com/a/img/resize/564ab7d2449f50fa6c3bd35a6f31beec2606217e/hub/2024/03/04/e0315c20-b30d-412d-8b91-69acc3f2ecc5/new-iphone-15-case-colors.jpg?auto=webp&fit=crop&height=675&width=1200"} className="card-img-top img-fluid mx-auto" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{Title}...</h5>
                <p className="card-text">{Description}...</p>
                  <a href={newsUrl} target= "_blank" className="btn btn-sml btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem