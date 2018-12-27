import React from 'react';
import { Button } from 'reactstrap';
import "../styles/ResultEntity.scss";

class ResultEntity extends React.PureComponent {
  constructor(props) {
    super(props);
    this.showNews = this.showNews.bind(this);
  }


  showNews(news)
  {

  }

  render() {
    const {article} = this.props;
    console.log("test component", this.props.article)
    // if (article.key===6) {
    //   
    // }
    return (
      <div className="col-sm-4 news-container">
            <div className="img-conatiner">
                <img id={article.key} src={this.props.article.urlToImage} alt="news-img"/>
            </div>

            <div className="title">
              {this.props.article.source.name}
            </div>

            <div className="description">
              {this.props.article.description}
            </div>
      </div>
    );
  }
}

export default ResultEntity;
