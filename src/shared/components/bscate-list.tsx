import ReactInteractiveList from '@jswork/react-interactive-list';
import { Button, Row, Col, Space, message } from 'antd';
import { useRef } from 'react';
import { AcCheckbox, AcSelect } from '@jswork/antd-components';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

const BsCateList = (inProps) => {
  const { selectItems, disabled, items, onChange } = inProps;
  const listRef = useRef<any>();
  const listEl = listRef.current;
  const notify = () => listEl.notify();
  const max = selectItems?.length;
  const template = ({ item, index, items }, cb) => {
    const ids = listEl?.state.value.map((item) => item.value) || [];
    const targetItems = selectItems.filter((item) => !ids.includes(item.value));
    const handleChange = (field, e) => {
      item[field] = e.target.value;
      notify();
    };

    return (
      <Row gutter={10} style={{ marginBottom: 10 }} key={index}>
        <Col span={20}>
          <AcSelect
            onChange={handleChange.bind(null, 'value')}
            value={item.value}
            items={targetItems}
          />
        </Col>
        <Col span={4}>
          <Space>
            <AcCheckbox onChange={handleChange.bind(null, 'checked')} value={item.checked} />
            <Button onClick={cb} icon={<MinusCircleOutlined />} />
          </Space>
        </Col>
      </Row>
    );
  };

  const templateCreate = (_, cb) => {
    return (
      <Button icon={<PlusCircleOutlined />} onClick={cb}>
        Add
      </Button>
    );
  };

  const templateDefault = () => {
    return { value: null, checked: false };
  };

  return (
    <ReactInteractiveList
      ref={listRef}
      max={max}
      items={items}
      template={template}
      disabled={disabled}
      templateCreate={templateCreate}
      templateDefault={templateDefault}
      onChange={onChange}
    />
  );
};

export default BsCateList;
