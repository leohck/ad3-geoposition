import './styles.css'


export const Input = ({id, searchValue, onChange, placeholder, icon, _type}) => {
    return (
        <div>
            <div className="input-group has-warning">
                <div className="input-group-prepend">
                      <span className="input-group-text">
                          <i className="material-icons">{icon}</i>
                      </span>
                </div>
                <input
                    id={id}
                    className="form-control"
                    onChange={onChange}
                    value={searchValue}
                    type={_type || "text"}
                    placeholder={placeholder}
                    aria-label="search"
                />
            </div>
        </div>
    );
}
