import * as React from 'react';
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import * as theme from '../../styleguide/theme';

class SearchField extends React.Component {
  state = {
    searchValue: ''
  };
  handleChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({ searchValue: value });
  };
  render() {
    const styles = {
      searchBox: {
        width: '327px',
        height: '58px',
        borderRadius: '7px',
        border: 'solid 1px #adc3d963',
        display: 'flex',
        alignItems: 'center',
        boxShadow: theme.boxShadows.wideButton
      },
      searchIcon: {
        paddingLeft: '20px',
        paddingRight: '20px',
        color: theme.C3
      }
    };

    return (
      <div style={styles.searchBox}>
        <div style={styles.searchIcon}>
          <SearchIcon color="inherit" />
        </div>
        <InputBase
          fullWidth={true}
          value={this.state.searchValue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchField;
