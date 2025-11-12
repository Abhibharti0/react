import React from 'react'

const ChildComponent = React.memo(({ buttonName, onClick }) => {
  console.log("Child Component re-render")
  return (
    <div>
      <button onClick={onClick}>{buttonName}</button>
    </div>
  )
})

export default ChildComponent
