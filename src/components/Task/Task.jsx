import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../redux/tasksSlice';
import { MdClose } from 'react-icons/md';
import css from './Task.module.css';

const Task = ({ task }) => {
  //  Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  //  Викликаємо фабрику екшену та передаємо ідентифікатор завдання
  //  Відправляємо результат - екшен видалення завдання
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  //  Викликаємо фабрику екшену та передаємо ідентифікатор завдання
  //  Відправляємо результат - екшен перемикання статусу завдання
  const handleToggle = () => {
    dispatch(toggleCompleted(task.id));
  };

  return (
    <div className={css.wrapper}>
      <input
        className={css.checkbox}
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Task;
