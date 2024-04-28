import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general"
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 0,
      pageSize: 20,
      totalSize: 20,
      category: "general"
    };
  }

  async updateNews(pageNo) {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a695953e615f426aa28536bd62a8260c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page,
      pageSize: this.props.pageSize,
      totalSize: parsedData.totalResults,
      loading: false,
      category: this.props.category
    });
  }

  async componentDidMount() {
    this.updateNews();
    }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  render(){
    return (
      <div className="container my-3">
        <h2 className="text-center mb-3">
          Top Headlines: {this.props.category}
        </h2>
        {this.state.loading && <Loading />}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  Title={element.title ? element.title.slice(0, 48) : ""}
                  Description={
                    element.description ? element.description.slice(0, 66) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 0}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &#8592; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &#8594;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
