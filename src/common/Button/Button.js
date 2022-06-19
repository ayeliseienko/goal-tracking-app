function Button({ children, type, className, onClick }) {
  return (
    <button
      type={type || 'button'}
      className={`${className} px-4 py-2 rounded-full text-darkGrey hover:text-black active:text-darkRed`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
