import React, { Component } from 'react';
import { Table, Button, Menu, Dropdown, Icon,Input,Divider} from 'antd';
import styles from './IndexPage.css';
import Duihua from './duihua'



function handleMenuClick(e) {
  console.log('click', e);
}
const { Search } = Input;
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">批量删除</Menu.Item>
    <Menu.Item key="2">批量解锁</Menu.Item>
    <Menu.Item key="3">批量启用</Menu.Item>
    <Menu.Item key="4">批量禁用</Menu.Item>
  </Menu>
);

const xiala = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
    
  </Menu>
);

const columns = [
  {
    title: '用户名',
    dataIndex: 'name',
    width:100,
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '用户编号',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '姓名',
    dataIndex: 'address',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '角色',
    dataIndex: 'jiaose',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '邮箱地址',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
    
  },
  {
    title: '手机号',
    dataIndex: 'tel',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '邮箱地址验证',
    dataIndex: 'yiyanzheng',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '手机号码验证',
    dataIndex: 'yiyanzheng',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '启用',
    dataIndex: 'qiyong',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '锁定',
    dataIndex: 'suoding',
    fixed: 'right',
    width:100,
    render: () => <Dropdown overlay={xiala}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      操作 <Icon type="down" />
    </a>
  </Dropdown>
  },
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `${i}`,
    age: `${i}`,
    address: `${i}`,
    tel:`18287490110`,
    jiaose:`Admin`,
    yiyanzheng:`已验证`,
    qiyong:`已启用`,
    suoding:`未锁定`,
  });
}

class Yonghu extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
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

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      
        <div style={{ marginBottom: 16 }}>
          <div><Search
      placeholder="请输入关键字搜索"
      onSearch={value => console.log(value)}
      style={{ width: 400,}}
      className={styles.yidong}
    />
    <br />
    <br />
    <Divider />
          <div className={styles.anniu}><Duihua /></div>
          <Button className={styles.anniu}>导出EXCEL</Button>
          <Dropdown overlay={menu} className={styles.anniu}>
            <Button>
              更多操作 <Icon type="down" />
            </Button>
          </Dropdown>
          <Dropdown overlay={xiala} className={styles.anniubb}>
            <Button>
              自定义列表条目 <Icon type="down" />
            </Button>
          </Dropdown>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} bordered={true} scroll={{ x: 1500, y: 700 }} className={styles.table}/>
      </div>
    );
  }
}
export default Yonghu;