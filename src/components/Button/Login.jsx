import "./Login.css"
export const Button = (props)=>{
    return(
        <a className={`login-btn ${props.fontWght}`}>{props.btn}</a>
    )
}