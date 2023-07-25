import ErrorPage from '../pages/error';
import Home from '../pages/home';
import TaskListPage from '../pages/task-list';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/tasks',
    element: <TaskListPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];
