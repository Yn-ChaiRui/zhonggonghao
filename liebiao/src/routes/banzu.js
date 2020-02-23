import React, { Component } from 'react';
import {
  Table, Divider, Tag, Modal, Button, Tabs, Form, Input, Checkbox, Card, Menu, Layout, Breadcrumb, Icon
} from 'antd';
import styles from './IndexPage.css';
import Tianjiajs from './tianjiajs'





class Jiaose extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };
  state = {
    checkNick: false,
  };

  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info('success');
      }
    });
  };

  handleChange = e => {
    this.setState(
      {
        checkNick: e.target.checked,
      },
      () => {
        this.props.form.validateFields(['nickname'], { force: true });
      },
    );
  };
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {

    const { visible, confirmLoading, ModalText } = this.state;

    return (


      <div style={{ height: 900 }}>

        <Card title="全部班组" extra={

          <div>
            <Button type="primary" onClick={this.showModal}>
              创建班组
</Button>
            <Modal
              title="Title"
              visible={visible}
              onOk={this.handleOk}
              confirmLoading={confirmLoading}
              onCancel={this.handleCancel}
            >
              <p>{ModalText}</p>
            </Modal>
          </div>
        } style={{ width: 300 }} className={styles.fuhong} >

          <Menu>
            <Menu.Item>初一 (GVN13)</Menu.Item>
            <Menu.Item>语文基础班(IY9RB)</Menu.Item>
            <Menu.Item>111(CN915)</Menu.Item>
            <Menu.Item>双一流(XXG08)</Menu.Item>
            <Menu.Item>985(6OW7E)</Menu.Item>
            <Menu.Item>211(7SS0P)</Menu.Item>
            <Menu.Item>我问问</Menu.Item>
            <Menu.Item>456</Menu.Item>
            <Menu.Item>Test</Menu.Item>
            <Menu.Item>一年级</Menu.Item>
            <Menu.Item>中班223w1</Menu.Item>
          </Menu>
        </Card>
        <Card size="small" title="初一 (GVN13)" extra={<a><Icon type="user-add" /><Icon type="menu" /></a>} style={{ width: 850 }} className={styles.fuhong2}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    );
  }
}
export default Jiaose;