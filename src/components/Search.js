import React, {Component} from "react"

class search extends Component {

	constructor(props) {
	    super(props);
	    this.handleSearchChange = this.handleSearchChange.bind(this);
	}

	handleSearchChange(e) {
	    this.props.handleSearchChange(e.target.value);
	}

	render() {
		const value=this.props.value;
		const title = this.props.title=== undefined ? "Type the title" : this.props.title;
		const required = this.props.required === undefined ? true : this.props.required;
		const searchClass = this.props.className === undefined ? "SearchStyle" : this.props.className;

		return(
		  <input
				id={this.props.id}
		    aria-describedby="search"
		    className={searchClass}
		    value={value}
		    name="search"
		    required={required}
		    type="text"
		    placeholder={title}
		    onChange={this.handleSearchChange}/>
		);

	}
}

export default search;
