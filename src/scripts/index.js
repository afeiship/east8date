import React from 'react';
import ReactDom from 'react-dom';
import RootView from './views/RootView';

//and desing:
import 'antd/dist/antd.css';
import '../styles/app';

ReactDom.render(
    <RootView />,
    document.getElementById('index-app')
);
