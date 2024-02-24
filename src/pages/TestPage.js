import React from 'react';
//Testpage done by Richard unless noted otherwise

export default function TestPage({changePage}) {
  //Richard
  //handle logout
  function logout() {
    fetch(window.location.origin + "/logout", {
      method: 'GET'
    })
    .then (response => {
      //Richard
      //checks if the response is okay
      if (response.ok) {
          console.log("logout response received ", response)
      } else {
          console.log("logout error")
      }
    })
  }
  //Richard
  //render buttons that all call the changePage function 
  return (
    <div>
        <button onClick={() => {changePage("Login")}}>Login Page!</button>
        <button onClick={() => {changePage("Garage")}}>Garage Page!</button>
        <button onClick={() => {changePage("Home")}}>Home Page!</button>
        <button onClick={() => {changePage("Camera")}}>Camera Page!</button>
        <button onClick={logout}>Log Out</button>
    </div>
  );
  
};
