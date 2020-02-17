import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function Demoa({ name }) {
  console.log(name)
  return (
    <div className={styles.normal}>
     
    </div>
  );
}

Demoa = connect((state) => {
  return {
     ...state.Demoa
  };
})(Demoa);
export default Demoa;
