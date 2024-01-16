import { Routes, Route } from 'react-router-dom';
import Home from 'components/shared/PTDOne/home/Home';
import PTDOne from 'components/shared/PTDOne/PTDOne';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<PTDOne />} />
    </Routes>
  );
}

export default Router;