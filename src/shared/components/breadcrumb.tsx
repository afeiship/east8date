import React from 'react';
import ReactBreadcrumb from '@jswork/react-breadcrumb';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { GithubOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Space } from 'antd';

const FILTERED_PATHS = ['/modules', '/edit', '/add'];
const getValidBreadcrumb = (inItems) => {
  return inItems.filter((item) => !FILTERED_PATHS.some((path) => item.key.endsWith(path))).slice(1);
};

export const Breadcrumbs = () => {
  const items = getValidBreadcrumb(useBreadcrumbs());
  const template = ({ item, plain }, cb) => {
    const { key, breadcrumb } = item;
    if (plain) return breadcrumb;
    return (
      <Link key={key} to={key} className="is-item">
        {breadcrumb}
        {cb()}
      </Link>
    );
  };

  return (
    <Space>
      <GithubOutlined />
      <section className="is-right">
        <ReactBreadcrumb items={items} template={template} separator="/" />
      </section>
    </Space>
  );
};
