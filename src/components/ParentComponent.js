import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';

import {refreshFavList} from '../actions/userActions';
import ProductList from './ProductList';
class ParentComponent extends Component {
    
componentDidMount()
{

    this.props.refreshFavList();
}
    render() {
        return <div>
            <Navbar />
            <ProductList />

        </div>
    }
}
const mapStateToProps = (state) =>
    ({




    })

export default connect(mapStateToProps, { refreshFavList})(ParentComponent);