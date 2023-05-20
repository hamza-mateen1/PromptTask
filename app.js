import React from 'react';

function ChildA(){

  // const PromptBtn = () => {
  //  const a = prompt("Enter a value");
  //  alert(a);
  // };


return(
  // <ChildB name = {name}></ChildB>
<div>

       <button onClick={() =>{ 
          const a = prompt("Enter a value");
          const b = a.toUpperCase()
          alert("My Name is " + b);}}>
    Open Prompt</button>
  </div>
)
}

export default ChildA;