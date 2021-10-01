import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

export const LocationCard = ({address, lat, lng}) => (
    <div className="post">
        <div className="post-content">
            <h2>{address}</h2>
            <p>{lat} , {lng}</p>
        </div>
    </div>
);