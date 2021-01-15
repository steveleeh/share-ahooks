import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, message } from 'antd';
import { useRequest } from 'ahooks';

export function deleteUser({ id }: any): Promise<{ success: boolean }> {
  console.log(id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
}
/* 并行请求 */
const ConcurrentRequest = () => {
  const { run, fetches } = useRequest(deleteUser, {
    manual: true,
    fetchKey: ({ id }) => id,
    onSuccess: (result, params) => {
      if (result.success) {
        message.success(`Disabled user ${params[0]}`);
      }
    },
  });

  console.log('fetches', fetches);
  const users = [
    { id: '1', username: 'A' },
    { id: '2', username: 'B' },
    { id: '3', username: 'C' },
  ];

  return (
    <PageContainer>
      <Card>
        <div>
          <div>You can click all buttons, each request has its own status.</div>
          <ul>
            {users.map((user) => (
              <li key={user.id} style={{ marginTop: 8 }}>
                <button
                  type="button"
                  onClick={() => {
                    run({ id: user.id });
                  }}
                  disabled={fetches[user.id]?.loading}
                >
                  {fetches[user.id]?.loading ? 'loading' : `delete ${user.username}`}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </PageContainer>
  );
};

export default ConcurrentRequest;
