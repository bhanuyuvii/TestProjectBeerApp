import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addtoFavourites, removeFromFavourites } from '../actions/userActions';
import './FavouriteProduct.css';

class FavouriteProduct extends Component {

    constructor(props) {
        super(props);
        console.log("To Avoid Useless Constructore warning");
        this.state = {
            starValue: 0
        }


    }


    render() {
        // const {_id,productname,price,inCart,type}=this.props.product;
        var {name, description, image_url } = this.props.product
        description = description.substring(0, 100) + "...";
        return (

            <div className="col-9 mx-auto col-md-2 col-lg-4 my-2 ">
                <div className="card">


                    <div className="card-footer d-flex justify-content-between text-muted">


                        <img width="50" height="100" src={image_url} alt="Logo" />
                        <div className="beerdetails">
                            <p className="nameText">{name}</p>
                            <p className="descriptionText">{description}</p>
                        </div>
                    </div>
                </div>

            </div>

        )

    }

}
const mapStateToProps = (state) =>
    ({

        products: state.item.products,
        favouritesList: state.item.favouritesList

    })

export default connect(mapStateToProps, { addtoFavourites, removeFromFavourites })(FavouriteProduct);
