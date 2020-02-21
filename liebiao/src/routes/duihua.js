import { Button, Drawer, Tabs,Divider ,Checkbox,Input   } from 'antd';
import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Xinxi from './xinxi'


const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  const plainOptions = ['Admin', ];
  const sidianban = ['四点半教育', ];
const ButtonGroup = Button.Group;
const { Search } = Input;
class Duihua extends React.Component {
    state = {
        visible: false,
    };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const {dispatch,flag}=this.props
        return (
            <div>
                <Button type="primary" onClick={this.showDrawer}>
                    添加账号
          </Button>
                <Drawer
                    title="添加账号"
                    placement="right"
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    width={400}
                >
                    <p><Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="基础信息" key="1">
                            <ButtonGroup>
                                <Button onClick={()=>
                               dispatch({
                                   type:'example/setState',
                                   payload:{
                                       flag:1
                                   }
                               }) }>学生</Button>
                                <Button onClick={()=>
                               dispatch({
                                   type:'example/setState',
                                   payload:{
                                       flag:2
                                   }
                               }) }>家长</Button>
                                <Button onClick={()=>
                               dispatch({
                                   type:'example/setState',
                                   payload:{
                                       flag:3
                                   }
                               }) }>导师</Button>
                                <Button onClick={()=>
                               dispatch({
                                   type:'example/setState',
                                   payload:{
                                       flag:4
                                   }
                               }) }>管理员</Button>
                            </ButtonGroup>
                            <div className={styles.boxc}><Xinxi /></div>
                        </TabPane>
                        <TabPane tab="角色" key="2">
                        <div>
    <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
    <br />
    <br />
    
    <br />
    <br />
    
  </div>
    </TabPane>
                        <TabPane tab="组织机构" key="3">
                        <div>
    <Search
      placeholder="请输入关键字搜索"
      onSearch={value => console.log(value)}
      style={{ width: 300 }}
    />
    <br />
    <br />
    </div>
    <div>
    <Checkbox.Group options={sidianban} defaultValue={['Apple']} onChange={onChange} />
    <br />
    <br />
    
    <br />
    <br />
    
  </div>
    </TabPane>
                    </Tabs></p>
                    <p className={styles.fenge}><Divider /></p>
                    <p className={styles.anbox}><Button className={styles.bbox}>取消</Button><Button type="primary" className={styles.bbox}>确定</Button></p>
                </Drawer>
            </div>
        );
    }
}
Duihua = connect((state) => {
    return {
      ...state.example
    };
  })(Duihua);

export default Duihua;