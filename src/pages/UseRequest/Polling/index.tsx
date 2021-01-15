import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import { useRequest } from 'ahooks';
import Mock from 'mockjs';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

/* 轮询 */
const Polling = () => {
  const { data, loading, run, cancel } = useRequest(getUsername, {
    pollingInterval: 1000,
    pollingWhenHidden: false,
  });

  return (
    <PageContainer>
      <Card>
        <div>
          <p>Username: {loading ? 'loading' : data}</p>
          <button type="button" onClick={run}>
            start
          </button>
          <button type="button" onClick={cancel} style={{ marginLeft: 8 }}>
            stop
          </button>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Polling;
