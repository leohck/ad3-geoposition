import './styles.css'

import {useState} from "react";
import {CSVLink} from "react-csv";
import {Input} from "../../components/Input";
import {Locations} from "../../components/Locations";
import {Button} from "../../components/Button";
import {Header} from "../../components/Header";


export const Home = () => {
    const [locations, setLocations] = useState([]);
    const [locationSearchValue, setLocationSearchValue] = useState('');
    const [radiusSearchValue, setRadiusSearchValue] = useState(500);

    const csvHeaders = [
        {label: "lat", key: "lat"},
        {label: "long", key: "lng"},
        {label: "radius_meters", key: "radius"},
    ];

    const csvReport = {
        data: locations,
        headers: csvHeaders,
        filename: 'GeopositionReport.csv'
    }

    const handleLoadLocations = () => {
        let request = {
            query: locationSearchValue
        };
        window.service.textSearch(request, handleLoadLocationsCallback);
    }

    const handleLoadLocationsCallback = (results) => {
        let locations = []
        results.forEach((location, i) => {
            locations.push({
                id: i,
                address: location.formatted_address,
                lat: parseFloat(location.geometry.location.lat()),
                lng: parseFloat(location.geometry.location.lng()),
            })
        });
        setLocations(locations);
    }

    const handleSetLocationsRadius = () => {
        setLocations(
            locations.map((location) => {
                return {...location, radius: parseInt(radiusSearchValue)}
            })
        )
    }

    const handleLocationSearchOnKeyUp = (event) => {
        if (event.key === 'Enter') {
            handleLoadLocations();
        }
    }

    const handleLocationSearchChange = (event) => {
        const {value} = event.target;
        setLocationSearchValue(value);
    }

    const handleRadiusSearchChange = (event) => {
        const {value} = event.target;
        setRadiusSearchValue(value);
    }

    return (
        <div className="home">
            <Header/>
            <div>
                <h4 className="text-center">Geoposition</h4>
                <div className="card">
                    <div className="card-header card-header-icon card-header-warning">
                        <div className="card-icon">
                            <i className="material-icons">search</i>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-10">
                                <Input
                                    id="locationSearchValue"
                                    placeholder="Digite o Endere??o, CEP, ou Estabelecimento por regi??o"
                                    icon="location_on"
                                    onChange={handleLocationSearchChange}
                                    onKeyUp={handleLocationSearchOnKeyUp}
                                    searchValue={locationSearchValue}
                                />
                            </div>
                            <div className="col">
                                <div className="text-right">
                                    <Button
                                        text="Pesquisar"
                                        onClick={handleLoadLocations}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-muted">
                        {locations.length} resultados encontrados
                    </div>
                </div>
            </div>

            {locations.length > 0 && (
                <div className="card">
                    <div className="card-header card-header-text card-header-warning">
                        <div className="card-text">
                            <h4 className="card-title">Resultados</h4>
                        </div>
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col text-left">
                                <label htmlFor="radiusSearchValue">Informe o Raio de a????o em metros: 3m to 100000m</label>
                                <Input
                                    id="radiusSearchValue"
                                    placeholder="Exemplo: 500"
                                    icon="360"
                                    _type="number"
                                    onChange={handleRadiusSearchChange}
                                    searchValue={radiusSearchValue}
                                />
                            </div>
                            <div className="col text-right">
                                <CSVLink {...csvReport}>
                                    <Button
                                        className="btn btn-info btn-round"
                                        text="Gerar CSV"
                                        icon="file_download"
                                        onClick={handleSetLocationsRadius}
                                    >
                                    </Button>
                                </CSVLink>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <Locations locations={locations}/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
