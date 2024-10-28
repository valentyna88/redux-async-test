import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../redux/operations';
// import AppBar from '../AppBar/AppBar';
// import Layout from '../Layout/Layout';
// import TaskForm from '../TaskForm/TaskForm';
// import TaskList from '../TaskList/TaskList';

const App = () => {
  const dispatch = useDispatch();
  // Отримуємо частини стану
  const { items, isLoadding, error } = useSelector(state => state.tasks);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // Рендерим розмітку в залежності від значень у стані
  return (
    <div>
      {isLoadding && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    </div>
    // <Layout>
    //   <AppBar />
    //   <TaskForm />
    //   <TaskList />
    // </Layout>
  );
};

export default App;
