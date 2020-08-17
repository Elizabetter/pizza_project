import React, { Component } from 'react';
import { addToCart_RemoveFromCart, updateCart, clearCart } from '../../data/CartActionCreators';
import { connect } from 'react-redux';
import { loadData } from '../../data/ActionCreators';
import { DataTypes } from '../../data/types';
import { PizzaConstructor } from '../PizzaConstructor';


const mapStateToProps = (dataStore) => ({
    ...dataStore
});

const mapDispatchToProps = {
    loadData, addToCart_RemoveFromCart, updateCart, clearCart
};

export const PizzaConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {
        render() {
            return (<PizzaConstructor {...this.props}
                                      toppings={this.props.toppings}/>
            )
        }
        componentDidMount() {
            this.props.loadData(DataTypes.TOPPINGS);
        }
    }
);
