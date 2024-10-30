import { useSelector } from 'react-redux';
import { selectTaskCount } from '../../redux/selectors';

const TaskCounter = () => {
  const { active, completed } = useSelector(selectTaskCount);

  return (
    <div>
      <p>Active: {active}</p>
      <p>Completed: {completed}</p>
    </div>
  );
};

export default TaskCounter;
