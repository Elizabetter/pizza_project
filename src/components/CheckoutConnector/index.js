import React, {Component} from 'react';
import {clearCart} from '../../data/CartActionCreators';
import {connect} from 'react-redux';
import {ValidatedForm} from "../ValidatedForm";


const mapStateToProps = (dataStore) => ({
    ...dataStore
});

const mapDispatchToProps = {
    clearCart
};

export const CheckoutConnector = connect(mapStateToProps, mapDispatchToProps)(
    class extends Component {

        constructor(props) {
            super(props);
            this.defaultAttrs = {type: 'text', required: true};
            this.formModel = [
                {label: 'Имя'},
                {label: 'Email', attrs: {type: 'email'}},
                {label: 'Адрес'},
                {label: 'Город'},
                {label: 'Телофон'},
            ]
        }

        render() {
            return <div className='container-fluid'>
                <ValidatedForm formModel={this.formModel} {...this.props}
                               defaultAttrs={this.defaultAttrs}/>
            </div>
        }
    }
);
