import React from 'react';
import { connect } from 'react-redux';

import { updateTimer } from '../actions/timer_actions';

const Timer = React.createClass({
  componentDidMount() {
    this.timer = setInterval(this.tick, 60000);
  },

  componentWillUnmount() {
    clearInterval(this.timer);
  },

  tick() {
    this.props.updateTimer()
  },

  render() {
    return <span>{this.props.timer} minutes</span>;
  }
});

const mapStateToProps = (state) => {
  return { timer: state.timer }
}

const mapDispatchToProps = (dispatch) => {
  return { updateTimer: () => dispatch(updateTimer())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)