function Button({ children, type = 'button', className = '', onClick }) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
