import React from "react";

function ChildComponent({value}){
    return (
         <div>
      <h3>Child Component</h3>
      <p>Count from Parent: {value}</p>
    </div>
    )
}

export default ChildComponent;