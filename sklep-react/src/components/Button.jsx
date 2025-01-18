// eslint-disable-next-line react/prop-types

const Button = ({ 
    isActive, 
    onClick, 
    children, }) => {
    return <button 
    style={{ backgroundColor: isActive ? "red" : undefined}} 
    onClick={onClick}>
    {children}
    </button>
    };

export default Button;
