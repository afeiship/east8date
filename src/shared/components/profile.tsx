import { useEffect, useState } from 'react';

export const Profile = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.github.com/users/afeiship')
      .finally(() => setLoading(false))
      .then((r) => r.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  if (loading) return <div>loading...</div>;
  return <div>username: {data?.login}</div>;
};
