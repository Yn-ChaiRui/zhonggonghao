import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Demo from './Demo'
import Qiehuan from './qiehuan'
import Antd from './Antd'
function Demoa({name}) {
  console.log(name)
  return (
    <div className={styles.normal}>
      <Demo />
      <Qiehuan />
      <Antd />
    </div>
  );
}

// IndexPage.propTypes = {
// };

// export default connect()(IndexPage);
Demoa = connect((state)=>{
  return{
    ...state.example
  };
})(Demoa);
export default Demoa;