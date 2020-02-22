import React, { Component } from 'react';
import { Table, Divider, Tag, Modal, Button, Tabs, Form, Input, Checkbox } from 'antd';
import styles from './IndexPage.css';
import Tianjiajs from './tianjiajs'



const { Column, ColumnGroup } = Table;
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};


const { TabPane } = Tabs;


function callback(key) {
  console.log(key);
}

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

    const data = [
      {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: '2019-05-28t14:15:01.9462912',
        tags: ['系统', '默认'],
      }

    ];

    return (


      <div>

        <div className={styles.yidong}>
          <Button type="primary" onClick={this.showModal}>
            添加角色
        </Button>
          <Modal
            title="添加角色"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p><Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="角色属性" key="1">
              <Tianjiajs/>
              </TabPane>
              <TabPane tab="操作权限" key="2">
                Content of Tab Pane 2
    </TabPane>
            </Tabs></p>

          </Modal>
        </div>
        <Table dataSource={data} className={styles.table}>

          <Column title="角色名称" dataIndex="age" key="age" />

          <Column
            title="角色标签"
            dataIndex="tags"
            key="tags"
            render={tags => (
              <span>
                {tags.map(tag => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </span>
            )}
          />
          <Column title="创建时间" dataIndex="address" key="address" />
          <Column
            title="操作"
            key="action"
            render={(text, record) => (
              <span>
                <a>编辑</a>
                <Divider type="vertical" />
                <a>删除</a>
              </span>
            )}
          />

        </Table>
      </div>
    );
  }
}
export default Jiaose;