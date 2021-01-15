import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Spin } from 'antd';
import { useRequest } from 'ahooks';
import Mock from 'mockjs';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

/* 默认请求 */
const DefaultRequest = () => {
  const { data, loading } = useRequest(getUsername);

  return (
    <PageContainer>
      <Card>
        <Spin spinning={loading} />
        <div>Username: {data}</div>
      </Card>
    </PageContainer>
  );
};

export default DefaultRequest;
