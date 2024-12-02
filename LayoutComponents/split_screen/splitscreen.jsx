import React from 'react'

const splitscreen = ({ children}) => {
    const [left, right]= children
  return (
    <div>
        <div>
        {left}{/* Left container stays here */}
        </div>
        <div>
        {right}    {/* Right container stays here */}
        </div>
    </div>
  )
}

export default splitscreen