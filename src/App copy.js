import React, { createContext } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CallData1 from "./CallData";

export const dbContext = createContext();

const App = () => {
  return (
    <div className='container'>
      <h2>test React Hook using Global State Data</h2>
      <div>
        <dbContext.Provider value={"Data Data"}>
          <CallData1 />
        </dbContext.Provider>
      </div>
    </div>
  );
};

export default App;
