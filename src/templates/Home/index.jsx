import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {useState, useCallback} from "react";
import {Input} from "../../components/Input";
import {Locations} from "../../components/Locations";
import {loadLocations} from "../../utils/load-locations";
import {Button} from "../../components/Button";

export const Home = () => {
    const [locations, setLocations] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const handleLoadLocations = useCallback(async () => {
        searchValue.replace(" ", "+");
        const locations = await loadLocations(searchValue);
        console.log(locations);
        setLocations(locations);
    }, [searchValue]);

    const handleChange = (event) => {
        const {value} = event.target;
        setSearchValue(value);
    }
    return (
        <section className="container">
            <h1>AD3Plus - Geoposition</h1>
            <Input
                searchValue={searchValue}
                onChange={handleChange}
            />
            <Button
                text="Pesquisar"
                onClick={handleLoadLocations}
            />
            <Locations locations={locations}/>
        </section>
    );
}

export default Home;
