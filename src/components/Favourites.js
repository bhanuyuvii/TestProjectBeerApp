import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FavouriteProduct from './FavouriteProduct';
import Navbar from './Navbar';
import './Favourites.css';
import { Ring } from 'react-awesome-spinners'
import { getItems, applyFilters } from '../actions/userActions';
class Favourites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000);


    }

    render() {
        return (
            this.state.isLoading ? <Ring /> : <div>
                <Navbar />
                <div className="row">

                    {
                        this.props.favouritesList.map(product => {
                            return <FavouriteProduct key={product.id} product={product} />
                        })
                    }




                </div>
            </div>

        )
    }
}
Favourites.propTypes = {
    getItems: PropTypes.func.isRequired,

}
const mapStateToProps = (state) =>
    ({

        products: state.item.products,
        firstTime: state.item.firstTime,
        favouritesList: state.item.favouritesList

    })
export default connect(mapStateToProps, { getItems, applyFilters })(Favourites);