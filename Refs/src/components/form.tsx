import { ChangeEvent, useImperativeHandle, useRef, useState } from "react";
import Input from "./input";

const Form = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'username') {
      setUsername(value)
    } else {
      setPassword(value)
    }
  };

  // useImperativeHandle(ref,()=>{{ focus:()=>{},shake:()=>{}}})
  const submit = () => {
    //send some data to backend server
    if (username.length < 1) {
      ref.current?.focus()
    }else{

    }
  };
////useImperative hook
  return (
    <>
    <Input changeHandler={setUsername} inputRef={ref}/>
      {/* <input type="text" name="username" ref={ref} onChange={changeHandler} /> */}
      <input type="password" name="password" onChange={changeHandler} />
      <button onClick={submit}>submit</button>
    <></>
    </>
  );
};
export default Form;
