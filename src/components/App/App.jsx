import AppBar from '../AppBar/AppBar';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.container}>
      <AppBar />
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default App;
