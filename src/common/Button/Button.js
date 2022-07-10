import PropTypes from 'prop-types';

export default function Button({
  children,
  type = 'button',
  className = '',
  onClick,
}) {
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

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
