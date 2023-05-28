import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

//로딩바 컴포넌트- https://mhnpd.github.io/react-loader-spinner
import { Rings } from 'react-loader-spinner';

//로딩바 뒤에 표시될 불투명 화면
const TransLayer= styled.div`
    position:fixed;
    left:0;
    right:0;
    z-index: 99;
    background-color: gainsboro;
    opacity: 0.5;
    width:100%;
    height:100%;
`;
const Spinner = ({visible, color, width, height}) => {
  return (
    <div>
        {visible && (
            //visible이 true일 경우만 노출
            <TransLayer>
                <Rings color={color} height={height} width={width}
                wrapperStyle={{
                    position:'absolute',
                    zIndex: 100,
                    left: '50%',
                    top: '50%',
                    marginLeft: (-width/2)+ 'px',
                    marginTop: (-height/2)+ 'px'
                }}/>
            </TransLayer>
        )}
    </div>
  );
};

//기본값 정의
Spinner.defaultProps= {
    visible: false,
    color: 'red',
    width: 100,
    height: 100
}

//데이터 타입 설정
Spinner.propTypes= {
    visible: PropTypes.bool.isRequired,
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
};

export default Spinner