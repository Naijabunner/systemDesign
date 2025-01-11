import React, { useState } from "react";
import ExpensiveComponent from "./components/expensive-component";

const MemoizedEC = React.memo(ExpensiveComponent);
// const MemoizedEC = React.memo(ExpensiveComponent,( before, after)=>{
//   return before.btnLabel === after.btnLabel
// });

export default function App() {
  const [value, setValue] = useState<string>();
  const ref =useRef(null)

useEffect(() => {
  ref.current =()=>{
    console.log(value)
  }

  return () => {
    second
  }
}, [third])


  const clickHandler = useCallback(() => {
      () => {
        // submit stuff to the backend
        console.log(value);
      };
    },
    [value],
  )
  

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <MemoizedEC btnLabel="click me!" onClick={clickHandler} />
    </>
  );
}

///how closures work
///solving stale closures


