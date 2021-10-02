import './styles.css'

export const LocationCard = ({address, lat, lng}) => (
    <div className="post">
        <div className="post-content">
            <h4>{address}</h4>
            <p>{lat} , {lng}</p>
        </div>
    </div>
);