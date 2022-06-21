function defineBgColor(percentage) {
  if (percentage < 35) {
    return 'bg-lightRed';
  }
  if (percentage > 35 && percentage < 70) {
    return 'bg-yellow';
  }

  return 'bg-green';
}

function ProgressBar({ milestones }) {
  const allMilestones = milestones.length;

  const completedMilestones = milestones.filter(
    (milestone) => milestone.completed === true
  ).length;

  const completedPercentage = Math.ceil(
    (completedMilestones / allMilestones) * 100
  );

  return (
    <div
      className={`${defineBgColor(
        completedPercentage
      )} rounded-b-lg py-1 text-center transition-all ease-in-out duration-500`}
    >{`${completedPercentage} %`}</div>
  );
}

export default ProgressBar;
