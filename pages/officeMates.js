import React from 'react';
import axios from 'axios';
import Link from 'next/link';

class Index extends React.Component {

    static async getInitialProps() {
        var promise = axios.get('http://localhost:4000/office').
            then(response => {
                return {
                    hasErrored: false,
                    officeMates: response.data,
                }
            }).catch(err => {
                return {
                    hasErrored: true,
                    officeMates: err.message,
                }
            });
        return promise;
    }

    constructor(props) {
        super(props);
        this.state = {
            officeMates: props.officeMates
        }
    }

    render() {
        return <>
        <Link href="/">
            <a>Friends</a>
        </Link>
            <ul>{ this.state.officeMates.map((officeMate, index) => {
                return <li key={ index }>{ officeMate.name }</li>
            }) }</ul>
        </>
    }
}

export default Index;