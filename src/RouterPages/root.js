import logo from '../logo.svg';
import '../App.css';
import { Outlet, Link } from "react-router-dom";

export default function Root() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Aprende React</h1>
                <ul>
                    <li>
                        <Link to={"/state"}>Use State</Link>
                    </li>
                    <li>
                        <Link to={"/reducer"}>Use Reducer</Link>
                    </li>
                    <li>
                        <Link to={"/effect"}>Use Effect</Link>
                    </li>
                    <li>
                        <Link to={"/persist"}>Persist Data</Link>
                    </li>
                </ul>
            </header>
            <div className='content'>
                <Outlet />
            </div>
        </div>
    )
}