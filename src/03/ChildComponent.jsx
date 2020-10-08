import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
  render() {
    const {
      boolValue,
      numValue,
      arrayValue,
      objValue,
      nodeValue,
      funcValue,
    } = this.props;
    //객체구조 분해 할당식 , this.props.boolValue 를 boolValue로 축약가능 .
    return (
        <div>
          <span>불리언값: {boolValue}</span>
          <span>숫자값: {numValue}</span>
          <span>배열값: {arrayValue}</span>
          <span>객체값: {objValue.name} , {objValue.age}</span>
          <span>노드값: {nodeValue}</span>
          <span>함수값: {funcValue}</span>
        </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: PropTypes.bool,
  numValue: PropTypes.number,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  nodeValue: PropTypes.node,
  objValue: PropTypes.object,
  funcValue: PropTypes.func,
};

export default ChildComponent;