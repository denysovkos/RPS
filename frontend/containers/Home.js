import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

class Home extends PureComponent {

  render() {
    return (
      <div>
        <Helmet title="Home" />
        welcome on home page
      </div>
    );
  }
}

Home.propTypes = {

};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Home);
