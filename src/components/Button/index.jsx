export const Button = ({text, onClick, disabled, className, icon}) => {
    return (
        <button
            className={className || "btn btn-warning btn-round"}
            onClick={onClick}
            disabled={disabled}
        >
            {icon && (
                <i className="material-icons">{icon}</i>
            )}
            {text}
        </button>
    );
}
