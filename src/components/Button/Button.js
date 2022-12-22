const Button = ({ label, backgroundColor, bootstrap}) => {
    return (
        <button 
            className={`${bootstrap}`}             
            style={{ backgroundColor }}
        >{label}</button>
    )
}

export default Button