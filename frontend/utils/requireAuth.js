import React from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (!Object.keys(this.props.user).length ) {
        this.context.router.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      if (!Object.keys(nextProps.user).length) {
        this.context.router.push('/');
      }
    }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {

  }

  Authenticate.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  function mapStateToProps(state) {
    return {
      user: state.auth.user || {}
    };
  }

  return connect(mapStateToProps, {})(Authenticate);
}
