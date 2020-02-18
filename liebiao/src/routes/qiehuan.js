import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function Qiehuan({flag}) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>{flag?'1111':'2222'}</h1>
    </div>
  );
}

// IndexPage.propTypes = {
// };

// export default connect()(IndexPage);
Qiehuan = connect((state)=>{
  return{
    ...state.demo
  };
})(Qiehuan);
export default Qiehuan;