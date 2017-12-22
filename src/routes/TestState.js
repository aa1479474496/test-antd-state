import React from 'react';
import { connect } from 'dva';

const Tests = ({ test }) => (
  <div>
    <h1>{test.nn2}</h1>
    <h1>{test.nn1}</h1>
  </div>
);


// export default connect(({ test }) => ({ test }))(Tests);
export default connect(test => (test))(Tests);
