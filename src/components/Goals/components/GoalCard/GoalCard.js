import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHourglass,
  faCircleCheck,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

import { firestore, auth } from '../../../../firebase/firebaseConfig';
import {
  deleteGoal,
  changeMilestoneStatus,
} from '../../../../firebase/firebaseActions';

import ProgressBar from '../ProgressBar/ProgressBar';
import Button from '../../../../common/Button/Button';

export default function GoalCard({
  id,
  title,
  creationDate,
  deadline,
  completed,
  milestones,
}) {
  function removeGoalHandler(goalId) {
    deleteGoal(firestore, auth.currentUser.uid, id);
  }

  function changeMilestoneHandler(updMilestone) {
    const specificMilestone = milestones.find(
      (milestone) => milestone.id === updMilestone.id
    );

    specificMilestone.completed = updMilestone.value;

    changeMilestoneStatus(firestore, auth.currentUser.uid, id, {
      completed,
      milestones,
    });
  }

  return (
    <div
      className={`mb-4 bg-white rounded-lg drop-shadow-md box-border
       dark:bg-darkModeLightBlack dark:text-lightGrey`}
    >
      <div className='flex justify-between items-start p-4'>
        <div>
          <div className='flex justify-start items-center gap-2'>
            {completed ? (
              <FontAwesomeIcon className='text-green' icon={faCircleCheck} />
            ) : (
              <FontAwesomeIcon className='text-yellow' icon={faHourglass} />
            )}
            <h1 className=' text-xl'>{title}</h1>
          </div>

          {!completed && <p className='text-xs'>{`Deadline: ${deadline}`}</p>}

          {!completed && (
            <ul className='list-none ml-5'>
              {milestones.map((milestone) => (
                <li
                  key={milestone.id}
                  className={`${
                    milestone.completed ? 'text-green line-through' : null
                  } mt-4 flex items-center justify-start gap-3`}
                >
                  <input
                    id={milestone.id}
                    type='checkbox'
                    defaultChecked={milestone.completed}
                    className='h-5 w-5 rounded-md focus:ring-green checked:text-green'
                    onClick={(e) =>
                      changeMilestoneHandler({
                        value: e.target.checked,
                        id: milestone.id,
                      })
                    }
                  />
                  {milestone.title}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className='flex flex-col justify-start items-center'>
          <Button
            className='text-darkRed hover: none'
            onClick={() => removeGoalHandler(id)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </Button>
        </div>
      </div>
      <ProgressBar milestones={milestones} />
    </div>
  );
}
