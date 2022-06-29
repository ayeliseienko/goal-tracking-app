export default function Tabs({ items, filterParam, onFilterChange }) {
  function tabClickHandler(newFilterParam) {
    onFilterChange(newFilterParam);
  }

  return (
    <div className='w-full bg-white rounded-md drop-shadow-md'>
      <ul className='list-none flex justify-around items-center divide-x-2 divide-grey'>
        {items.map((item, index, itemsArray) => (
          <li
            key={item.title}
            className={`flex-1 text-center py-4 hover:bg-lightBlue hover:text-black cursor-pointer
            ${index === 0 ? 'rounded-l-md' : ''}
            ${index === itemsArray.length - 1 ? 'rounded-r-md' : ''}
            ${item.param === filterParam ? 'bg-blue text-white' : ''}`}
            onClick={() => {
              tabClickHandler(item.param);
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
