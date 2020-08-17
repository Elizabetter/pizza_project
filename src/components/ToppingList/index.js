import React, {Component} from 'react';

import './style.sass';

export class ToppingList extends Component {

    isToppingInCart = (id) => {
        return this.props.cart.find(({topping}) =>
            topping.id === id
        )
    };

    render() {
        const {toppings, handleAction} = this.props;
        if (!toppings || toppings.length === 0) {
            return <h5 className='p-2'>нет начинок</h5>
        }

        return <div className='topping-list'>
            {toppings.map(t => {
                    const {id, path, name, cost, weight} = t;
                    const svg = require(`../../${path}`);
                    return <button className={`toppings card  bg-light ${this.isToppingInCart(t.id) ? 'active' : ''}`}
                                   key={t.id}
                                   onClick={() => handleAction(t)}>
                        <img src={svg} alt={id}/>
                        <div>
                            <p>
                                {name}
                                <br/>
                                {cost.toFixed(2)} бел. руб.
                                <br/>
                                {weight} грамм
                            </p>
                        </div>
                    </button>
                }
            )}
        </div>
    }
}
