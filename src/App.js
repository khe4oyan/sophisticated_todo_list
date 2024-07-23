// libs
import { Routes, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

// routes
import ROUTES from './routes/routes';

function App() {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
        <Route path={ROUTES.NOT_FOUND_PAGE} element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
}

export default App;
