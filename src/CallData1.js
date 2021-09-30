import React, { useContext } from "react";
import { dbContext1 } from "./App";

const CallData1 = () => {
  const dat_job = useContext(dbContext1);

  return (
    <div>
      <h3>Call Data Job in Global State from App Page</h3>
      <div className='m-3'>
        <h4>Job is : {dat_job.job}</h4>
      </div>
    </div>
  );
};

export default CallData1;
