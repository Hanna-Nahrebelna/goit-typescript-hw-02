import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
    return (
        <div>
            <p>Sorry, something went wrong!
            <span role="img" aria-label="Confusion icon" className={css.span}>
            🙄
            </span>    
            Please try reloading this page.</p>
        </div>        
    )
}

export default ErrorMessage;