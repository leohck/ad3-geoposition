import {LocationCard} from "../LocationCard";


export const Locations = ({locations}) => {
    return (
        <div>
            {locations.map(location => (
                <LocationCard
                    key={location.id}
                    address={location.address}
                    lat={location.lat}
                    lng={location.lng}
                />
            ))}
        </div>
    );
}

export default Locations;