import React from 'react'

const ChildComponent = (props) => {
  console.log("Child Component go re-render")
  return (
    <div>
      <button>
        {
          props.buttonName
        }
      </button>
      
    </div>
  )
}

export default ChildComponent
