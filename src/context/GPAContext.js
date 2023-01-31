import React from "react";

const GPAContext = React.createContext({
  year: 1,
  credits: [22, 22, 23, 24, 25, 25, 16, 12],
  gpas: [0, 0, 0, 0, 0, 0, 0, 0],
});

export default GPAContext;
