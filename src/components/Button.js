const Button = ({changeColor, color, text}) => {
    return (
        <button onClick={() => changeColor(text)} style={{backgroundColor:`${color}`}}>{text}</button>
    )
}

export default Button