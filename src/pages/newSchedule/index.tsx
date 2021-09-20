import React, { useEffect, useState } from 'react';
import { Form, Input, Button, Checkbox, DatePicker, Select } from 'antd';
import Editor from '@/components/Editor';
import { REPEATCONFIG } from '@/config/schedule';
const initialValue = {
  repeat: '1',
};
const newSchedule = () => {
  const [formValues, setFormValues] = useState<any>(initialValue);
  const [formInstance] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = (changedValues: any, formValues: any) => {
    setFormValues(formValues);
  };

  useEffect(() => {
    console.log(123456);
  });

  return (
    <div>
      <Form
        form={formInstance}
        name="basic"
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onValuesChange}
        autoComplete="off"
      >
        <Form.Item
          label="标题"
          name="title"
          rules={[
            { required: true, message: '请输入任务标题' },
            { max: 30, message: '标题最长30个字' },
          ]}
        >
          <Input placeholder="请输入任务标题" />
        </Form.Item>

        <Form.Item
          label="日期"
          name="date"
          rules={[{ required: true, message: '请输入任务日期' }]}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm" />
        </Form.Item>
        <Form.Item
          label="重复方式"
          name="repeat"
          initialValue="1"
          rules={[{ required: true, message: '请选择重复方式' }]}
        >
          <Select>
            {REPEATCONFIG.map((config) => {
              return (
                <Select.Option value={config.value} key={config.value}>
                  {config.label}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        {formValues?.repeat !== '1' ? (
          <Form.Item label="结束时间" name="stopRepeat">
            <DatePicker showTime format="YYYY-MM-DD HH:mm" />
          </Form.Item>
        ) : null}
        <Form.Item label="备注" name="remark">
          <Editor />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 3, span: 16 }}
        >
          <Checkbox>日历提醒我</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default newSchedule;
