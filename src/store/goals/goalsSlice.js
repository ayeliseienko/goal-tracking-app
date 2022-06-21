import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  goals: [
    {
      id: 'id1',
      title: 'Test title 1',
      creationDate: '20/06/2022',
      deadline: '21/06/2022',
      completed: true,
      milestones: [
        {
          milestoneId: 'm1.1',
          milestoneTitle: 'milestone 1.1',
          completed: true,
        },
        {
          milestoneId: 'm1.2',
          milestoneTitle: 'milestone 1.2',
          completed: true,
        },
        {
          milestoneId: 'm1.3',
          milestoneTitle: 'milestone 1.3',
          completed: true,
        },
      ],
    },
    {
      id: 'id2',
      title: 'Test title 2',
      creationDate: '20/06/2022',
      deadline: '22/06/2022',
      completed: false,
      milestones: [
        {
          milestoneId: 'm2.1',
          milestoneTitle: 'milestone 2.1',
          completed: false,
        },
        {
          milestoneId: 'm2.2',
          milestoneTitle: 'milestone 2.2',
          completed: false,
        },
        {
          milestoneId: 'm2.3',
          milestoneTitle: 'milestone 2.3',
          completed: false,
        },
        {
          milestoneId: 'm2.4',
          milestoneTitle: 'milestone 2.4',
          completed: false,
        },
      ],
    },
  ],
};

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal(state, action) {
      state.goals = [action.payload, ...state.goals];
    },
    removeGoal(state, action) {
      console.log(action.payload);
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
        (goal) => goal.id === action.payload.taskId
      );

      const milestoneToComplete = goalToChange.milestones.find(
        (milestone) => milestone.milestoneId === action.payload.milestoneId
      );

      milestoneToComplete.completed = !milestoneToComplete.completed;

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
