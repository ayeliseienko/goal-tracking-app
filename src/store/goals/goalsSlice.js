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
          id: 'm1.1',
          title: 'milestone 1.1',
          completed: true,
        },
        {
          id: 'm1.2',
          title: 'milestone 1.2',
          completed: true,
        },
        {
          id: 'm1.3',
          title: 'milestone 1.3',
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
          id: 'm2.1',
          title: 'milestone 2.1',
          completed: false,
        },
        {
          id: 'm2.2',
          title: 'milestone 2.2',
          completed: false,
        },
        {
          id: 'm2.3',
          title: 'milestone 2.3',
          completed: false,
        },
        {
          id: 'm2.4',
          title: 'milestone 2.4',
          completed: false,
        },
      ],
    },
    {
      id: 'id3',
      title: 'Test title 3',
      creationDate: '20/06/2022',
      deadline: '22/06/2022',
      completed: false,
      milestones: [
        {
          id: 'm3.1',
          title: 'milestone 3.1',
          completed: true,
        },
        {
          id: 'm3.2',
          title: 'milestone 3.2',
          completed: true,
        },
        {
          id: 'm3.3',
          title: 'milestone 3.3',
          completed: false,
        },
        {
          id: 'm3.4',
          title: 'milestone 3.4',
          completed: false,
        },
      ],
    },
    {
      id: 'id4',
      title: 'Test title 4',
      creationDate: '20/06/2022',
      deadline: '22/06/2022',
      completed: false,
      milestones: [
        {
          id: 'm4.1',
          title: 'milestone 4.1',
          completed: false,
        },
        {
          id: 'm4.2',
          title: 'milestone 4.2',
          completed: false,
        },
        {
          id: 'm4.3',
          title: 'milestone 4.3',
          completed: false,
        },
        {
          id: 'm4.4',
          title: 'milestone 4.4',
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
