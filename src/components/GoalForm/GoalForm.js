import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { addGoal } from '../../store/goals/goalsSlice';
import { GOALS } from '../../pages/routes';

export default function GoalForm() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [milestones, setMilestones] = useState([]);

  const formik = useFormik({
    initialValues: {
      goalTitle: '',
      deadline: '',
      milestoneTitle: '',
      milestones: milestones,
    },
    validationSchema: yup.object({
      goalTitle: yup.string().required('This field is required'),
      deadline: yup
        .date('It should be a date!')
        .required('This field is required'),
      milestoneTitle: yup.string(),
      milestones: yup
        .array()
        .min(1, 'Add some milestones to your goal')
        .required(),
    }),
    onSubmit: (values) => {
      const newMilestone = {
        id: uuidv4(),
        title: values.goalTitle,
        creationDate: new Date().toLocaleDateString(),
        deadline: new Date(values.deadline).toLocaleDateString(),
        completed: false,
        milestones: values.milestones,
      };

      submitHandler(newMilestone);
    },
    onReset: resetHandler,
  });

  function createMilestoneHandler() {
    setMilestones((prevState) => {
      const newMilestone = {
        id: uuidv4(),
        title: formik.values.milestoneTitle,
        completed: false,
      };

      const updState = [...prevState, newMilestone];

      formik.setFieldValue('milestoneTitle', '');

      formik.setFieldValue('milestones', updState);

      return updState;
    });
  }

  function removeMilestoneHandler(id) {
    setMilestones((prevState) => {
      const updMilestones = prevState.filter(
        (milestone) => milestone.id !== id
      );

      formik.setFieldValue('milestones', updMilestones);

      return updMilestones;
    });
  }

  function resetHandler() {
    navigate(GOALS, { replace: true });
  }

  function submitHandler(newGoal) {
    alert('Submitted!');

    dispatch(addGoal(newGoal));

    navigate(GOALS, { replace: true });
  }

  return (
    <section className='mt-4'>
      <div
        className={`w-11/12 mx-auto mb-4 p-4 bg-white rounded-lg drop-shadow-md 
      box-border lg:w-1/2 transition-all ease-in-out duration-500 dark:bg-darkModeLightBlack`}
      >
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <div className='flex flex-col justify-start mb-5'>
            <Input
              label={{ isVisible: true, title: "Goal's title" }}
              input={{
                id: 'goalTitle',
                type: 'text',
                placeholder: "Enter goal's title...",
                onBlur: formik.handleBlur,
                onChange: formik.handleChange,
                value: formik.values.goalTitle,
              }}
            />
            {formik.errors.goalTitle && formik.touched.goalTitle ? (
              <p className='text-darkRed text-sm'>{formik.errors.goalTitle}</p>
            ) : null}
          </div>

          <div className='flex flex-col justify-start mb-5'>
            <Input
              label={{ isVisible: true, title: "Goal's deadline" }}
              input={{
                id: 'deadline',
                type: 'date',
                onBlur: formik.handleBlur,
                onChange: formik.handleChange,
                value: formik.values.deadline,
              }}
            />
            {formik.errors.deadline && formik.touched.deadline ? (
              <p className='text-darkRed text-sm'>{formik.errors.deadline}</p>
            ) : null}
          </div>

          <div className='flex flex-col items-stretch gap-5 mb-5 md:flex-row md:items-end'>
            <Input
              label={{ isVisible: true, title: "New milestone's title" }}
              input={{
                id: 'milestoneTitle',
                type: 'text',
                placeholder: "Enter milestone's title...",
                onBlur: formik.handleBlur,
                onChange: formik.handleChange,
                value: formik.values.milestoneTitle,
              }}
              className='flex-auto'
            />
            <Button
              className='shrink bg-blue text-white hover:bg-darkBlue focus:ring-4 focus:ring-lightBlue active:text-white md:ml-auto'
              onClick={createMilestoneHandler}
            >
              Add milestone
            </Button>
          </div>
          {formik.errors.milestones && formik.touched.milestoneTitle ? (
            <p className='text-darkRed text-sm mb-5'>
              {formik.errors.milestones}
            </p>
          ) : null}

          <ul className='list-none ml-4'>
            {milestones.map((milestone) => (
              <li
                key={milestone.id}
                className='flex justify-start items-center gap-3 py-1 dark:text-lightGrey'
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  className='text-darkRed cursor-pointer'
                  onClick={() => {
                    removeMilestoneHandler(milestone.id);
                  }}
                />
                <p>{milestone.title}</p>
              </li>
            ))}
          </ul>

          <div className='text-right'>
            <Button
              type='submit'
              className='bg-blue text-white hover:bg-darkBlue focus:ring-4 focus:ring-lightBlue active:text-white'
            >
              Add Goal
            </Button>
            <Button
              type='reset'
              className='ml-4 bg-blue text-white hover:bg-darkBlue focus:ring-4 focus:ring-lightBlue active:text-white'
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
