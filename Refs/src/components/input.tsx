import React, { RefObject } from 'react'

const Input = ({
    changeHandler,
    inputRef
}:{
    changeHandler:(val: string)=>void ,
    inputRef: RefObject<HTMLInputElement>
}) => {
  return (
    <input type="text" name="username" ref={inputRef} onChange={(e)=>changeHandler(e.target.value)} />
  )
}

////tou use ref (a reserve Keyword)
////we will have to use a forward ref
///export default ForwardRef(INPUT)
///the component takes two argument props and ref

export default Input