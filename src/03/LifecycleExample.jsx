import React, {Component} from 'react';

class LifecycleExample extends Component {
  static getDerivedStateFromProps() {
    console.log('call getDerivedStateFromProps() ');
    return {};
  }
  constructor(props) {
    super(props);
    this.state =  {};
    console.log('call constructor()');
  }

  componentDidMount() {
    console.log('call componentDidMount()');
    this.setState({update : true});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('call componentDidUpdate()');
  }

  componentWillMount() {
    console.log('call componentWillMount()');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('call getSnapshotBeforeUpdate()');
    return {};
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('call shouldComponentUpdate()');

    return true;
  }

  render() {
    console.log('call render()');
    return (
        <div>

        </div>
    );
  }
}

export default LifecycleExample;