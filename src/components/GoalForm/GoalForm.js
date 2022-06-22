// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

export default function GoalForm() {
  // const [milestones, setMilestones] = useState([]);

  return (
    <section className='mt-4'>
      <div className='w-11/12 mx-auto mb-4 p-4 bg-white rounded-lg drop-shadow-md box-border lg:w-1/2'>
        <form>
          <Input
            label={{ isVisible: true, title: "Goal's title" }}
            input={{
              id: 'goalTitle',
              type: 'text',
              placeholder: "Enter goal's title...",
            }}
            className='mb-5'
          />

          <div className='flex items-end gap-5 mb-5'>
            <Input
              label={{ isVisible: true, title: "New milestone's title" }}
              input={{
                id: 'mileTitle',
                type: 'text',
                placeholder: "Enter milestone's title...",
              }}
              className='flex-auto'
            />
            <Button className='shrink bg-blue text-white hover:bg-darkBlue focus:ring-4 focus:ring-lightBlue active:text-white ml-auto'>
              Add milestone
            </Button>
          </div>

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
