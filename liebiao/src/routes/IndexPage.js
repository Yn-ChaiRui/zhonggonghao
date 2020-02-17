import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Demoa from './Demoa.js'

function IndexPage({ name }) {
  console.log(name)
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <Demoa />
    </div>
  );
}

IndexPage = connect((state) => {
  return {
     ...state.example
  };
})(IndexPage);
export default IndexPage;
