import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    // console.log("submitted", this.state.term);
    // this.setState({ term: "" });
  };
  render() {
    return (
      <div className="search-bar ui segment container">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="term">Video Search</label>
            <input
              id="term"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
