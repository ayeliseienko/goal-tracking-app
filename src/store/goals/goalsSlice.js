import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goals: [],
};

// const initialState = {
//   goals: [
//     {
//       id: 'id1',
//       title: 'Test title 1',
//       creationDate: '20/06/2022',
//       deadline: '21/06/2022',
//       completed: true,
//       milestones: [
//         {
//           id: 'm1.1',
//           title: 'milestone 1.1',
//           completed: true,
//         },
//         {
//           id: 'm1.2',
//           title: 'milestone 1.2',
//           completed: true,
//         },
//         {
//           id: 'm1.3',
//           title: 'milestone 1.3',
//           completed: true,
//         },
//       ],
//     },
//   ],
// };

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal(state, action) {
      state.goals = [action.payload, ...state.goals];
    },
    removeGoal(state, action) {
      state.goals = state.goals.filter((goal) => goal.id !== action.payload);
    },
    changeGoalStatus(state, action) {
      const goalToChange = state.goals.find(
        (goal) => goal.id === action.payload
      );

      goalToChange.completed = !goalToChange.completed;

      goalToChange.milestones.forEach(
        (milestone) => (milestone.completed = goalToChange.completed)
      );
    },
    changeMilestoneStatus(state, action) {
      const goalToChange = state.goals.find(
        (goal) => goal.id === action.payload.goalId
      );

      const milestoneToComplete = goalToChange.milestones.find(
        (milestone) => milestone.id === action.payload.milestoneId
      );

      milestoneToComplete.completed = action.payload.value;

      if (
        goalToChange.milestones.filter(
          (milestone) => milestone.completed === true
        ).length === goalToChange.milestones.length
      ) {
        goalToChange.completed = true;
      } else {
        goalToChange.completed = false;
      }
    },
  },
});

export default goalsSlice.reducer;

export const { addGoal, removeGoal, changeGoalStatus, changeMilestoneStatus } =
  goalsSlice.actions;
