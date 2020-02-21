import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
  } from 'antd';
  import React from 'react';
  import styles from './IndexPage.css';
  import { connect } from 'dva';

  const { Option } = Select;
  const AutoCompleteOption = AutoComplete.Option;
  
 
  
  class Xuesheng extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
    handleWebsiteChange = value => {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
      }
      this.setState({ autoCompleteResult });
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
      const { autoCompleteResult } = this.state;
  
      const {flag}=this.props
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      
  
      const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
      ));
  
      return (
          <div>
        <Form.Item labelAlign="left"
        label={
          <span>
            用户名&nbsp;
            <Tooltip title="What do you want others to call you?">
            </Tooltip>
          </span>
        }
      >
        {getFieldDecorator('nickname', {
          rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
        })(<Input className={styles.shuru} placeholder="请填写用户名"/>)}
      </Form.Item>
      <Form.Item label="创建密码"  labelAlign="left">
      {getFieldDecorator('confirm', {
        rules: [
          {
            required: true,
            message: 'Please confirm your password!',
          },
          {
            validator: this.compareToFirstPassword,
          },
        ],
      })(<Input.Password   className={styles.shuru} placeholder="请填写密码"/>)}
    </Form.Item>
    <Form.Item labelAlign="left" 
        label={
          <span>
            姓名&nbsp;
            <Tooltip title="What do you want others to call you?">
            </Tooltip>
          </span>
        }
      >
        {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
        })(<Input className={styles.shuru} placeholder="请填写姓名"/>)}
      </Form.Item>
      <Form.Item {...formItemLayout} label="昵称" labelAlign="left" >
          {getFieldDecorator('nickname', {
            rules: [
              {
                required: this.state.checkNick,
                message: 'Please input your nickname',
              },
            ],
          })(<Input placeholder="请填写昵称（6个字符以内）" className={styles.shuru}/>)}
        </Form.Item>
        <Form.Item label="加入班组" labelAlign="left">
          {getFieldDecorator('gender', {
            rules: [{ required: false, message: 'Please select your gender!' }],
          })(
            <Select
            className={styles.shuru}
              onChange={this.handleSelectChange}
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>,
          )}
        </Form.Item>
    </div>
      );
    }
  }
  
  // const WrappedRegistrationForm = Form.create({ name: 'register' })(Xinxi);

  Xuesheng = connect((state) => {
    return {
      ...state.example
    };
  })(Xuesheng);

  export default Form.create({ name: 'register' })(Xuesheng);