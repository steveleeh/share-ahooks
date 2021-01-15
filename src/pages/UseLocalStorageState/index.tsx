import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';
import { useLocalStorageState } from 'ahooks';

/* useLocalStorageState */
const UseDynamicList = () => {
  const [message, setMessage] = useLocalStorageState('user-message', 'Hello~');

  return (
    <PageContainer>
      <Card>
        <input
          value={message || ''}
          placeholder="Please enter some words..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button style={{ margin: '0 8px' }} type="button" onClick={() => setMessage('Hello~')}>
          Reset
        </button>
        <button type="button" onClick={() => setMessage()}>
          Clear
        </button>
      </Card>
    </PageContainer>
  );
};

export default UseDynamicList;
