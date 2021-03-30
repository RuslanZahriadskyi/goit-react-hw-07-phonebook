import React, { Component } from 'react';

class Filter extends Component {
  handlerFilter = e => {
    const { value } = e.currentTarget;
    const { filterContacts } = this.props;
    filterContacts(value);
  };
  render() {
    const { filterValue } = this.props;
    return (
      <>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="filter"
          value={filterValue}
          onChange={this.handlerFilter}
        ></input>
      </>
    );
  }
}

export default Filter;
