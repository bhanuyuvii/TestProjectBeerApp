
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import fire from '../Fire';



class Navbar extends Component {
    // const [count,setCount]=useState(0);
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.logout = this.logout.bind(this);
        this.state = ({
            dropdownOpen: false
        })
    }
    logout() {
        console.log("Clicked");
        fire.auth().signOut();
        localStorage.removeItem('usermail');

    }


    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <p>Been Love Beers</p>

                    <ul className="navbar-nav align-items-left">
                        <li className="nav-item ml-5">
                            <Link to="/home" className="nav-link">
                                Home
            </Link>
                        </li>


                        <li className="nav-item ml-5">

                            <Link to="/favourites" className="nav-link">
                                Favourites
                    </Link>

                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/">
                                <Button className="filterbutton" onClick={() => {

                                    this.logout();
                                }}>Logout</Button>
                            </Link>

                        </li>

                    </ul>
                </nav>
            </div>
        )
    }

}

const mapStateToProps = (state) =>
    ({



    })
export default connect(mapStateToProps, {})(Navbar);