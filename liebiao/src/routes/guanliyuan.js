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
  
 
  
  class Guanliyuan extends React.Component {
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
         
        <Form.Item label="用户名" labelAlign="left">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }],
          })(<Input className={styles.shuru} placeholder="请填写用户名"/>)}
        </Form.Item>
        <Form.Item label="创建密码" labelAlign="left">
          {getFieldDecorator('pwoass', {
            rules: [{ required: true, message: 'Please input your mima!' }],
          })(<Input className={styles.shuru} placeholder="请填写密码"/>)}
        </Form.Item>
        
    </div>
      );
    }
  }
  
  // const WrappedRegistrationForm = Form.create({ name: 'register' })(Xinxi);

  Guanliyuan = connect((state) => {
    return {
      ...state.example
    };
  })(Guanliyuan);

  export default Form.create({ name: 'register' })(Guanliyuan);