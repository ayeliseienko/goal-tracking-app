export default function Input({ input, label, className = '' }) {
  return (
    <div className={`flex flex-col justify-start items-start ${className}`}>
      {label.isVisible && (
        <label htmlFor={input.id} className='block mb-2 text-sm'>
          {label.title}
        </label>
      )}
      <input
        {...input}
        className='w-full p-2 rounded-lg focus:ring-blue focus:border-blue'
      />
    </div>
  );
}