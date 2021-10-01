import {LocationCard} from "../LocationCard";


export const Locations = ({locations}) => {
    return (
        <div>
            {locations.map(location => (
                <LocationCard
                    key={location.id}
                    address={location.address}
                    geo={location.geo}
                />
            ))}
        </div>
    );
}

export default Locations;