import { Form, Input, Button, Checkbox } from 'antd';
import styles from './IndexPage.css';
import React from 'react';
import { connect } from 'dva';


const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };
  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
  };
  class Tianjiajs extends React.Component {
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
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <div>
          <Form.Item {...formItemLayout} label="角色属性">
            {getFieldDecorator('usernamess', {
              rules: [
                {
                  required: true,
                  message: 'Please input your name',
                },
              ],
            })(<Input />)}
          </Form.Item>
          
          <Form.Item {...formTailLayout}>
            <Checkbox checked={this.state.checkNick} onChange={this.handleChange} style={{width:200}}>
              设置成默认角色
            </Checkbox>
          </Form.Item>
          <Form.Item {...formTailLayout}>
            
          </Form.Item>
        </div>
      );
    }
  }
  
  Tianjiajs = connect((state) => {
    return {
      ...state.example
    };
  })(Tianjiajs);

  export default Form.create({ name: 'register' })(Tianjiajs);