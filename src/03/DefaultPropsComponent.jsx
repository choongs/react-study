import React from 'react';
import PropTypes from 'prop-types';

class DefaultPropsComponent extends React.Component {
  render() {
    const {
      boolValue1,
        stringValue,
    } = this.props;

    let message1 = '';
    if (boolValue1 === false) {
      message1 = 'boolValue 기본값이 false 입니다.';
    }
    console.log(stringValue);
    let message2 = '';
    if (this.props.boolValueWithoutDefault === false) {
      message2 = 'boolValueWithoutDefault 기본값이 false 입니다.';
    }
    return (
        <div className="message-container">
          {message1}
          {message2}
        </div>
    );
  }
}

DefaultPropsComponent.propTypes = {
  boolValue1 : PropTypes.bool,
  boolValueWithoutDefault : PropTypes.bool,
  stringValue : PropTypes.string,
};

//기본값 설정

DefaultPropsComponent.defaultProps = {
  boolValue1 : false,
  stringValue : '1234',
};

export default DefaultPropsComponent;