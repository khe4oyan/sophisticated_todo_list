// libs
import { Routes, Route } from 'react-router-dom';

// pages
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import TodosPage from './pages/TodosPage/TodosPage';
import SingleTodoPage from './pages/SingleTodoPage';

// routes
import ROUTES from './routes/routes';

function App() {
  return (
    <div>
      <Routes>
        <Route path={ROUTES.NOT_FOUND_PAGE} element={<NotFoundPage />}/>
        <Route path={ROUTES.HOME_PAGE} element={<HomePage />}>
          <Route path={ROUTES.TODOS_PAGE} element={<TodosPage />}/>
          <Route path={ROUTES.SINGLE_TODO_PAGE_BY_ID} element={<SingleTodoPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
