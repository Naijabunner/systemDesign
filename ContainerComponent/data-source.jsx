import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export const ResourceLoader = ({ getData=()=>{} , resourceName, children }) => {
  const [data, setdata] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await axios.get(getData);
      setdata(data);
    })();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]:data });
        }
        return child;
      })}
    </>
  );
};
