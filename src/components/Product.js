import React, { Component } from 'react';

import { connect } from 'react-redux';
import fire from '../Fire';
import { Ring } from 'react-awesome-spinners'
import { addtoFavourites, removeFromFavourites } from '../actions/userActions';
import StarRatingComponent from 'react-star-rating-component';

import './Product.css';

class Product extends Component {

    constructor(props) {
        super(props);


        this.state = {
            starValue: 0,
            isLoading: true
        }




    }
    componentDidMount() {

        var temp = "";
        var temp2 = 0;
        fire.database().ref('beer-project-56ba5/' + this.props.product.id).once('value', (data) => {
            temp = data.toJSON();
            if (temp !== null) {

                if (temp.favourite === "true" && temp.mail === localStorage.getItem('usermail')) {
                    temp2 = 1;
                    this.props.addtoFavourites(this.props.product);


                }
                else {
                    temp2 = 0;
                }
                console.log("Temp2 valuye for id " + this.props.product.id + " =" + temp2);
            }


        })




        setTimeout(() => {
            this.setState({
                starValue: temp2,
                isLoading: false
            })
        }, 3000);

        setTimeout(() => {
            console.log("Valued after Satte updation for " + this.props.product.id + " is" + this.state.starValue);
            console.log("Fav List--->" + this.props.favouritesList)
        }, 3000);

    }

    onStarClick(id) {



        this.setState({
            starValue: (this.state.starValue === 1 ? 0 : 1)
        })



        if (this.state.starValue === 0) {
            fire.database().ref('beer-project-56ba5/' + id).set(
                {
                    favourite: "true",
                    id: id,
                    mail: localStorage.getItem('usermail')

                }
            ).then(() => {
                console.log("Inseeted")
                this.props.addtoFavourites(this.props.product);
            })
                .catch(err => {
                    console.log(err);
                })
        }
        else if (this.state.starValue === 1) {
            fire.database().ref('beer-project-56ba5/' + id).set(
                {
                    favourite: "false",
                    id: id,
                    mail: localStorage.getItem('usermail')

                }
            ).then(() => {
                console.log("Inseeted")
                this.props.removeFromFavourites(this.props.product);
            })
                .catch(err => {
                    console.log(err);
                })
        }


    }


    render() {
        var { id, name, description, image_url } = this.props.product

        description = description.substring(0, 100) + "...";
        return (this.state.isLoading ? <Ring /> : (<div className="col-9 mx-auto col-md-2 col-lg-4 my-2 ">
            <div className="card">


                <div className="card-footer d-flex justify-content-between text-muted">

                    <StarRatingComponent
                        data-tip="hello world"
                        name="rate1"
                        starCount={1}
                        value={this.state.starValue}
                        onStarClick={this.onStarClick.bind(this, id)}
                    />
                    <img width="50" height="100" src={image_url} alt="Logo" />
                    <div className="beerdetails">
                        <p className="nameText">{name}</p>
                        <p className="descriptionText">{description}</p>
                    </div>
                </div>
            </div>

        </div>)


        )

    }

}
//const ProductWrapper=styled.div 


const mapStateToProps = (state) =>
    ({

        products: state.item.products,

        favouritesList: state.item.favouritesList

    })

export default connect(mapStateToProps, { addtoFavourites, removeFromFavourites })(Product);
