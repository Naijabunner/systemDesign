import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export const ResourceLoader = ({ resouceUrl , resourceName, children }) => {
  const [resource, setresource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(resouceUrl);
      setresource(response.data);
    })();
  }, [resouceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]:resource });
        }
        return child;
      })}
    </>
  );
};
