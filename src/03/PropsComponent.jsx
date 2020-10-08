import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PropsComponent extends Component {
  render() {
    return (
        <div className="message-container">
          {this.props.name}
        </div>
    );
  }
}

// 자료형을 선언하는 부분.
PropsComponent.propsTypes = {
  name: PropTypes.string,
};

export default PropsComponent;