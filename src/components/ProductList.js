import React, { Component } from 'react';
import Product from './Product';

import './ProductList.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getItems, applyFilters } from '../actions/userActions';



import { Button} from 'reactstrap';



class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textSearch: "",
      modal: false,
      typeofalcohol: "Whisky",
      typeofbeer: "Both",
      pricemin: 200,
      pricemax: 1000,
      useFilter: false,
      isLoading: true
    }
  };

  componentDidMount() {

    this.props.getItems();
    
  }





  changeText = (event) => {
    this.setState({
      textSearch: event.target.value
    })
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  applyFilters() {

    this.props.applyFilters(this.state.textSearch)
  }










  render() {

    //console.log(this.state.products);
    return (
      <div>

        <div className="container" >



          <input type="text" value={this.state.testSearch} className="searchbox" placeholder="Search for Beer" onChange={this.changeText} />
          <Button className="filterbutton" onClick={() => {
            console.log("clicked");
            this.applyFilters();
          }}>Search</Button>
          <div className="row">

            {

              this.props.products.map(product => {
                return <Product key={product.id} product={product} />
              })
            }




          </div>
        </div>


      </div>
    )
  }
}
ProductList.propTypes = {
  getItems: PropTypes.func.isRequired,

}
const mapStateToProps = (state) =>
  ({

    products: state.item.products,
    firstTime: state.item.firstTime

  })
export default connect(mapStateToProps, { getItems, applyFilters })(ProductList);