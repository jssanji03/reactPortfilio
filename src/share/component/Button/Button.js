import React,{useState} from 'react';
import styled, { css } from 'styled-components'
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import 'antd/dist/antd.css'
import './Button.scss';
const StyleButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`



function Button2() {
  const [size, setSize] = useState('large');
  return (
    <>
      <StyleButton>Normal Button</StyleButton>
      <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
        Download
      </Button>
    </>
  );
}

export default Button2;
