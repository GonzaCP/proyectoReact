const Button = ({ handleClick, label, color, bootstrap}) => {
    return (
        <button
            className={`Button ${bootstrap}`}
            onClick={handleClick}
            style={{ backgroundColor: color}}
        >{label}</button>
    )
}

export default Button