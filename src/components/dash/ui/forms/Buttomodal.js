export function ButtonModal(props) {
  const {
    onClick,
    text,
    type,
    className,
    disabled,
    ...rest
  } = props;

  return (
    <button
      className={`btn btn-${type} ${className}`}  // eslint-disable-line 
        onClick={onClick}
        disabled={disabled}
        {...rest}
    >
        {text}
    </button>
    );
    
}
