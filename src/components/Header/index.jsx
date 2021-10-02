import logo from '../../img/AD3PlusPPB.png'
import './styles.css'

export const Header = () => {
    return (
        <div>
            <div className="nav justify-content-center">
                <img className="nav-item" src={logo} alt="AD3Plus Logo"/>
            </div>
            {/*<div className="nav justify-content-center sub-header">*/}
            {/*    <p className="nav-item">*/}
            {/*        <b>Geoposition</b>*/}
            {/*    </p>*/}
            {/*</div>*/}
        </div>
    );
}
