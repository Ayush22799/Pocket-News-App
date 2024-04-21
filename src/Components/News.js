import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
export class News extends Component {
  
  constructor(){
        super();
        this.state = {
         articles: [],
         loading: true,
         page: 0,
         pageSize: 20,
         totalSize: 20
        }
    }
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a695953e615f426aa28536bd62a8260c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState(
        {
          articles: parsedData.articles, 
          page: this.state.page,
          pageSize: this.props.pageSize,
          totalSize: parsedData.totalResults,
          loading: false
        }
      )
  }

    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a695953e615f426aa28536bd62a8260c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        console.log(url)
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState(
          {
            page: this.state.page - 1,
            articles: parsedData.articles,
            totalSize: parsedData.totalResults,
            loading: false
          }
        )
        console.log("prev click success")
    }

    handleNextClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a695953e615f426aa28536bd62a8260c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        console.log(url)
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState(
          {
            page: this.state.page + 1,
            articles: parsedData.articles,
            totalSize: parsedData.totalResults,
            loading: false
          }
        )
        console.log("next click success")
      }

    

  render() {
    return (
            <div className="container my-3">
              <h2 className="text-center mb-3">Top Headlines</h2>
              {this.state.loading && <Loading/>}
               <div className="row">   
            {this.state.articles.map((element) => {
               return <div className= "col-md-3" key={element.url}>
               <NewsItem Title = {element.title?element.title.slice(0, 48):""} Description = {element.description?element.description.slice(0,66):""} imgUrl = {element.urlToImage} newsUrl = {element.url}/>
                      </div>  
           })}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled = {this.state.page <=0} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&#8592; Previous</button>
                <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize) } type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &#8594;</button>
                </div>
            </div>
    )
  }
}

export default News