import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, message } from 'antd';
import { useRequest } from 'ahooks';

function changeUsername(username: string): Promise<{ success: boolean }> {
  console.log(username);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}

/* 主动触发 */
const ManualTrigger = () => {
  const [state, setState] = useState('');
  const { loading, run } = useRequest(changeUsername, {
    manual: true,
    onSuccess: (result, params) => {
      if (result.success) {
        setState('');
        message.success(`The username was changed to "${params[0]}" !`);
      }
    },
  });

  return (
    <PageContainer>
      <Card>
        <div>
          <input
            onChange={(e) => setState(e.target.value)}
            value={state}
            placeholder="Please enter username"
            style={{ width: 240, marginRight: 16 }}
          />
          <button disabled={loading} type="button" onClick={() => run(state)}>
            {loading ? 'loading' : 'Edit'}
          </button>
        </div>
      </Card>
    </PageContainer>
  );
};

export default ManualTrigger;
