import { useDispatch } from 'react-redux';
import {
  removeGoal,
  changeGoalStatus,
  changeMilestoneStatus,
} from '../../../../store/goals/goalsSlice';

import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '../../../../common/Button/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHourglass,
  faCircleCheck,
  faXmark,
  faPen,
} from '@fortawesome/free-solid-svg-icons';

function GoalCard({
  id,
  title,
  creationDate,
  deadline,
  completed,
  milestones,
}) {
  const dispatch = useDispatch();

  function removeGoalHandler(goalId) {
    dispatch(removeGoal(goalId));
  }

  function changeMilestoneHandler(payload) {
    dispatch(changeMilestoneStatus(payload));
  }

  function changeGoalHandler(goalId) {
    dispatch(changeGoalStatus(goalId));
  }

  return (
    <div className='mb-4 bg-white rounded-lg drop-shadow-md'>
      <div className='flex justify-between items-start p-4'>
        <div>
          <div className='flex justify-start items-center gap-2'>
            {completed ? (
              <FontAwesomeIcon className='text-green' icon={faCircleCheck} />
            ) : (
              <FontAwesomeIcon className='text-yellow' icon={faHourglass} />
            )}
            <h1
              className='text-xl cursor-pointer'
              onClick={() => changeGoalHandler(id)}
            >
              {title}
            </h1>
          </div>

          <p className='text-xs'>{`Deadline: ${deadline}`}</p>

          <ul className='list-none ml-5'>
            {milestones.map((milestone) => (
              <li
                key={milestone.milestoneId}
                className={`${
                  milestone.completed ? 'text-green line-through' : null
                } mt-4 cursor-pointer`}
                onClick={() =>
                  changeMilestoneHandler({
                    taskId: id,
                    milestoneId: milestone.milestoneId,
                  })
                }
              >
                {milestone.completed ? (
                  <FontAwesomeIcon
                    className='text-green mr-1'
                    icon={faCircleCheck}
                  />
                ) : (
                  <FontAwesomeIcon
                    className='text-yellow mr-1'
                    icon={faHourglass}
                  />
                )}
                {milestone.milestoneTitle}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col justify-start items-center'>
          <Button
            className='text-darkRed hover: none'
            onClick={() => removeGoalHandler(id)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </Button>

          <Button className='text-darkGrey'>
            <FontAwesomeIcon icon={faPen} />
          </Button>
        </div>
      </div>
      <ProgressBar milestones={milestones} />
    </div>
  );
}

export default GoalCard;
