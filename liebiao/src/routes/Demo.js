import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function Demo({ dispatch, flag }) {
  console.log(flag)
  return (
    <div className={styles.normal}>
      <h1 className={styles.title} onClick={() => dispatch({
        type: "demo/setState",
        payload: {
          flag: false
        }
      })}>点击我切换</h1>

    </div>
  );
}

// IndexPage.propTypes = {
// };

// export default connect()(IndexPage);
Demo = connect((state) => {
  return {
    ...state.demo
  };
})(Demo);
export default Demo;