import GoalCard from '../GoalCard/GoalCard';

function GoalsList({ goalsList }) {
  if (goalsList.length === 0) {
    return (
      <div className='w-11/12 mx-auto mt-4 text-center bg-white py-16 rounded-lg drop-shadow-md lg:w-1/2'>
        <h1 className='text-4xl'>Nothing &#128532;</h1>
      </div>
    );
  }

  return (
    <div className='w-11/12 mx-auto mt-4 lg:w-1/2'>
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

export default GoalsList;
