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
  return (
    <div className='flex justify-between items-start mb-4 bg-white p-4 rounded-lg drop-shadow-md'>
      <div>
        <div className='flex justify-start items-center gap-2'>
          {completed ? (
            <FontAwesomeIcon className='text-green' icon={faCircleCheck} />
          ) : (
            <FontAwesomeIcon className='text-yellow' icon={faHourglass} />
          )}
          <h1 className='text-xl'>{title}</h1>
        </div>

        <p className='text-xs'>{`Deadline: ${deadline}`}</p>

        <ul className='list-none ml-5'>
          {milestones.map((milestone) => (
            <li
              key={milestone.milestoneId}
              className={`${
                milestone.completed ? 'text-green line-through' : null
              } mt-4`}
            >
              {milestone.completed ? (
                <FontAwesomeIcon className='text-green' icon={faCircleCheck} />
              ) : (
                <FontAwesomeIcon className='text-yellow' icon={faHourglass} />
              )}{' '}
              {milestone.milestoneTitle}
            </li>
          ))}
        </ul>
      </div>

      <div className='flex flex-col justify-start items-center'>
        <Button className='text-darkRed hover: none'>
          <FontAwesomeIcon icon={faXmark} />
        </Button>

        <Button className='text-darkGrey'>
          <FontAwesomeIcon icon={faPen} />
        </Button>
      </div>
    </div>
  );
}

export default GoalCard;
