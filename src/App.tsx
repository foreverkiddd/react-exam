import React from 'react';
import logo from './logo.svg';
import './App.css';


{/* 주석문 작성합니다. */}
{/*
  작성자 : lje
  작성일 : 2025.04.07.
  내용 : 기능에 대한 내용
 */}

function App() {
  // const style = {
  //   backgroundColor : 'black',
  //   color : 'white',
  //   fontSize : '48px',
  //   fontWeight : 'bold',
  //   padding : '20px'
  // }

  let name = "리액트";

  return (
    <div className="container">
      <h1 className="test">Hello, 
        {
          name === '리액트' ? (<h1>YES</h1>):null
        }!!</h1>
        {/* <p>반갑습니다.</p> */}
        
    </div>
  );

  // const port = undefined;

  // return(
  //   <div>
  //     { 
  //       port || '3000'
  //     }
  //   </div>
  // )
}

// function App() {
//   return React.createElement("div", null, "Hello, 리액트!!",
//   React.createElement("p", null, "반갑습니다.") );
// }

export default App;
