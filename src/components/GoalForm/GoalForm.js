import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { GOALS } from '../../pages/routes';

export default function GoalForm() {
  const navigate = useNavigate();

  const [milestones, setMilestones] = useState([]);

  const formik = useFormik({
    initialValues: {
      goalTitle: '',
      milestoneTitle: '',
      milestones: milestones,
    },
    validationSchema: yup.object({
      goalTitle: yup.string().required('This field is required'),
      milestoneTitle: yup.string(),
      milestones: yup
        .array()
        .min(1, 'Add some milestones to your goal')
        .required(),
    }),
    onSubmit: (values) => {
      submitHandler();
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

  function resetHandler(event) {
    navigate(GOALS, { replace: true });
  }

  function submitHandler(event) {
    alert('Submitted!');

    navigate(GOALS, { replace: true });
  }

  return (
    <section className='mt-4'>
      <div className='w-11/12 mx-auto mb-4 p-4 bg-white rounded-lg drop-shadow-md box-border lg:w-1/2'>
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <Input
            label={{ isVisible: true, title: "Goal's title" }}
            input={{
              id: 'goalTitle',
              type: 'text',
              placeholder: "Enter goal's title...",
              onChange: formik.handleChange,
              value: formik.values.goalTitle,
            }}
            className='mb-5'
          />
          {formik.errors.goalTitle}

          <div className='flex flex-col items-stretch gap-5 mb-5 md:flex-row md:items-end'>
            <Input
              label={{ isVisible: true, title: "New milestone's title" }}
              input={{
                id: 'milestoneTitle',
                type: 'text',
                placeholder: "Enter milestone's title...",
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
          {formik.errors.milestoneTitle}

          <ul className='list-none'>
            {milestones.map((milestone) => (
              <li key={milestone.id}>{milestone.title}</li>
            ))}
          </ul>
          {formik.errors.milestones}

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
