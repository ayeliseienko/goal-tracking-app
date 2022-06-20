function Button({ children, type, className, onClick }) {
  return (
    <button
      type={type || 'button'}
      className={`px-4 py-2 rounded-full text-darkGrey hover:text-white hover:bg-darkGrey active:text-black ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
