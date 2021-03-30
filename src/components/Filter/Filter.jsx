import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as contactsAction from '../../redux/contacts/contacts-action';
import { connect } from 'react-redux';
import { getFilterValue } from '../../redux/contacts/contacts-selectors';

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

const mapStateToProps = state => ({ filterValue: getFilterValue(state) });

const mapDispatchToProps = {
  filterContacts: contactsAction.filterContacts,
};

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
