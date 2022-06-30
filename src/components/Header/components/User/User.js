function User({ className, avatar }) {
  return (
    <div className={`${className} flex gap-2 justify-start items-center`}>
      <img src={avatar} alt='avatar' className='h-8 w-auto' />
    </div>
  );
}

export default User;
