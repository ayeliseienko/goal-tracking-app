function Button({ children, type = 'button', className = '', onClick }) {
  return (
    <button
      type={type}
      className={`px-5 py-2.5 rounded-full text-darkGrey hover:text-white hover:bg-darkGrey active:text-black ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
