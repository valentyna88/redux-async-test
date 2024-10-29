import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { deleteTask, toggleCompleted } from '../../redux/operations';
import css from './Task.module.css';

const Task = ({ task }) => {
  //  Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <div className={css.wrapper}>
      <input
        className={css.checkbox}
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button onClick={handleDelete} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Task;
