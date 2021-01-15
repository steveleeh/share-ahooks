import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import { useRequest } from 'ahooks';
import Mock from 'mockjs';

function getUserId(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1011);
    }, 3000);
  });
}

function getUsername(id: number): Promise<string> {
  console.log('user id:', id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

/* 依赖请求 */
const DependentRequest = () => {
  const userIdRequest = useRequest(getUserId);
  const usernameRequest = useRequest(() => getUsername(userIdRequest.data as number), {
    ready: !!userIdRequest.data,
  });

  return (
    <PageContainer>
      <Card>
        <div>
          <p>UserId: {userIdRequest.loading ? 'loading' : userIdRequest.data}</p>
          <p>Username: {usernameRequest.loading ? 'loading' : usernameRequest.data}</p>
        </div>
      </Card>
    </PageContainer>
  );
};

export default DependentRequest;
