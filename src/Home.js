/* eslint-disable */
import React, { Component } from 'react';
import "./styles/Home.scss";
import ResultEntity from "./components/ResultEntity";
import Search from "./components/Search";

import axios from 'axios';

class Home extends Component {
  constructor(props){
    super(props)
    this.renderNews = this.renderNews.bind(this);

    this.state = {
      news:{},
      articles:[],
      searchForm:"",
      apiUrl :
       'https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-27&sortBy=publishedAt&apiKey=3da16bb9d1ee4edc89b3e75efc4fe87f'
     }
   }


  async componentWillMount() {
    const APIresults = await axios.get(this.state.apiUrl);
    this.setState({ articles: APIresults.data.articles });

    console.log(this.state.articles)
    }



    handleSearchChange (_search) {
      this.setState({searchForm: _search});
    }

  renderNews(){
    const {articles} = this.state;
    console.log("articles", articles)

    if (articles.length===0) {
      return ""
    }
    return articles.map((article,i) => <ResultEntity  key={i} article={article} />)

  }
  render() {

    return (
      <div className="row home">
        <div className=" col-sm-12 search-area">
            <Search className="searchInput"  id="inputSearchBar" value= {this.state.searchForm} handleSearchChange={this.handleSearchChange}/>
        </div>
        <div className="col-sm-12  news-area">
          <div className=" row">
            {this.renderNews()}

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
