import React, { PureComponent, memo } from 'react';


// class Try extends PureComponent {
//     render() {
//         const { tryInfo } = this.props;
//         return (
//             <li>
//                 <div>{tryInfo.try}</div>    
//                 <div>{tryInfo.result}</div> 
//             </li>
//         );
//     }
// }
    
const Try = memo( ({ tryInfo }) => {  // {tryIfo} 대신 props 로 사용가능, 하지만 보통 구조분해해서 사용한다
    return (
        <li>
            <div>{tryInfo.try}</div>   
            <div>{tryInfo.result}</div>
        </li>
    )
} );



// props를 사용할 경우,  {props.tryInfo.try} 로 변경
// props를 사용할 경우,  {props.tryInfo.result} 로 변경

export default Try; 