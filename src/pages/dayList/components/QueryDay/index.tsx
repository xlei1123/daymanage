import React from 'react';
import { Form, Row, Button, Space, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;

const fieldsList = [
  {
    label: '日程名称',
    name: 'task_name',
    placeholder: '请输入任务名',
    disabledEdit: false,
    rules: [{ max: 100, message: '最长不可超过100个字符' }],
  },
  {
    label: '日程创建时间',
    name: 'add_time',
    placeholder: '请选择日程创建时间',
    render: () => (
      <RangePicker format="YYYY-MM-DD HH:mm" showTime={{ format: 'HH:mm' }} />
    ),
  },
  {
    label: '日程状态',
    name: 'task_status',
    placeholder: '任务状态',
    render: () => {
      return (
        <Select
          allowClear
          showSearch
          style={{ width: 171 }}
          placeholder={'任务状态'}
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          // onSearch={getUsers.bind(null, 'apply_user')}
          notFoundContent={null}
        >
          ;
          {/* {
        Object.values(TaskStatus).map((value) => {
          return Number(value) ? <Option key={value} value={value}>{TaskStatus2Label[value]}</Option> : null;
        })
      } */}
        </Select>
      );
    },
  },
];

function QueryDay() {
  const [formInstance] = Form.useForm();
  return (
    <Form form={formInstance} name="basic" layout="inline">
      {fieldsList.map((filed) => {
        return (
          <Form.Item
            key={filed.name}
            label={filed.label}
            name={filed.name}
            rules={filed.rules}
            style={{ marginBottom: 20 }}
          >
            {filed.render ? (
              filed.render()
            ) : (
              <Input placeholder={filed.placeholder} />
            )}
          </Form.Item>
        );
      })}
      <Row style={{ textAlign: 'center', marginBottom: 20 }}>
        <Space>
          <Button type="primary">查询</Button>
          <Button type="primary">清除条件</Button>
          <Button type="primary">
            <PlusOutlined />
            新建日程
          </Button>
        </Space>
      </Row>
    </Form>
  );
}

export default React.memo(QueryDay);
