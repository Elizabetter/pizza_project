import React, {Component} from 'react';
import {CartDetailsRows} from '../CartDetailsRow';
import './style.sass';
import {Link} from 'react-router-dom';

export class Cart extends Component {

    render() {
        return <div className='cart'>
            <h2 className='text-center'>Ваша пицца:</h2>
            <table className='table table-bordered table-striped'>
                <thead>
                <tr>
                    <th>Ингредиент</th>
                    <th className='text-left'>Цена (бел. руб)</th>
                </tr>
                </thead>
                <tbody>
                <CartDetailsRows cart={this.props.cart}
                                 cartCost={this.props.cartCost}
                />
                </tbody>
            </table>

            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary m-1'>
                    Продолжить
                    </button>
                </Link>
            </div>
        </div>
    }
}
