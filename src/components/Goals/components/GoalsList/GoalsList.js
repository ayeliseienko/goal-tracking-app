import PropTypes from 'prop-types';

import GoalCard from '../GoalCard/GoalCard';

export default function GoalsList({ goalsList, filterParam }) {
  if (goalsList.length === 0) {
    return (
      <div
        className={`mx-auto mt-4 text-center bg-white py-16 rounded-lg 
      drop-shadow-md dark:bg-darkModeLightBlack dark:text-lightGrey`}
      >
        <h1 className='text-4xl'>
          {filterParam === '' ? 'You can start adding your goals' : 'Nothing'}
        </h1>

        {filterParam === '' ? (
          <p className='text-4xl mt-5'>&#128521;</p>
        ) : (
          <p className='text-4xl mt-5'>&#128532;</p>
        )}
      </div>
    );
  }

  return (
    <div className='mx-auto mt-4'>
      {goalsList.map((goal) => (
        <GoalCard
          key={goal.id}
          id={goal.id}
          title={goal.title}
          creationDate={goal.creationDate}
          deadline={goal.deadline}
          completed={goal.completed}
          milestones={goal.milestones}
        />
      ))}
    </div>
  );
}

GoalsList.propTypes = {
  goalsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      creationDate: PropTypes.string.isRequired,
      deadline: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      milestones: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          completed: PropTypes.bool.isRequired,
        })
      ),
    })
  ),
  filterParam: PropTypes.string.isRequired,
};
