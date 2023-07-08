import { useNavigate, useRoutes } from 'react-router-dom';
import routes from '@/modules/routes';

function App() {
  const navigate = useNavigate();
  nx.set(nx, 'navigate', navigate);
  return useRoutes(routes);
}

export default App;
