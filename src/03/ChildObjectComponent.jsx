import React, {Component} from 'react';
import ProtoTypes, {object} from 'prop-types';

class ChildObjectComponent extends Component {
  render() {
    const {
      objectValue,
      requiredStringValue,
    } = this.props;
    return (
        <div>
          {/*Object.entires 객체를 문자열로 변환하여 출력 */}
          <div> 객체값 : {String(Object.entries(objectValue))}</div>
          <div> 필수값 : {requiredStringValue} </div>
        </div>
    );
  }
}

ChildObjectComponent.propTypes =  {
  //객체 프로퍼티 자료형은 ProtoTypes.shape를 사용해서 정의
  objectValue : ProtoTypes.shape({
    name : ProtoTypes.string,
    age: ProtoTypes.number
  }),
  requiredStringValue: ProtoTypes.string.isRequired //isRequired 이용하면 해당 변수는 필수값.
};

export default ChildObjectComponent;