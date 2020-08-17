import React from 'react';
import {Header} from '../components/Header';
import {Footer} from "../components/Footer";

export default function (WrappedComponent) {
    return class extends React.Component {
        render() {
            return (
                <>
                    <Header/>
                    <WrappedComponent/>
                    <Footer/>
                </>
            );
        }
    };
}
