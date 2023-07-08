import { useRef } from 'react';
import { Form } from 'antd';
import _ from 'lodash';
import { AcSelect, AcInput } from '@jswork/antd-components';
import ReactInteractiveList from '@jswork/react-interactive-list';

const ProductList = (inProps) => {
  const { onChange } = inProps;
  const listRef = useRef(null);
  const { items } = inProps;
  const handleChange = (e) => {
    const value = e.target.value;
    onChange({ target: { value } });
  };

  const template = ({ item, index }) => {
    const { label, type, value, items, required, multiple } = item.__ui__;
    const multipleProps = multiple ? { mode: 'multiple' } : null;
    const widgetProps = nx.compactObject({ items, value, ...multipleProps }) as any;
    const Widget = type === 'enum' ? AcSelect : AcInput;

    return (
      <Form.Item key={index} label={label} required={required}>
        {/* @ts-ignore */}
        <Widget
          style={{ width: 300 }}
          {...widgetProps}
          onChange={(e) => {
            item.__ui__.value = e.target.value;
            listRef.current.notify();
          }}
        />
      </Form.Item>
    );
  };

  if (!items) return null;

  return (
    <ReactInteractiveList
      ref={listRef}
      items={_.cloneDeep(items)}
      template={template}
      onChange={handleChange}
    />
  );
};

export default ProductList;
