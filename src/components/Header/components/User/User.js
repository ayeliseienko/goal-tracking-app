function User({ className, avatar, name }) {
  return (
    <div className={`${className} flex gap-2 justify-start items-center`}>
      <img src={avatar} alt='avatar' className='h-8 w-auto' />
      <p className='text-darkGrey'>{`${name}'s Goals`}</p>
    </div>
  );
}

export default User;
