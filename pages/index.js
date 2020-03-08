import React from 'react';
import DigitalClock from '../src/DigitalClock';
import axios from 'axios';

class Index extends React.Component {

    static async getInitialProps() {
        // for sync data
        // return ({
        //     time: new Date().toLocaleString()
        // });

        // for async
        // const promise = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve({
        //             time: new Date().toLocaleString()
        //         })
        //     }, 3000);
        // });
        // return promise;

        // for async rest calls
        var promise = axios.get('http://localhost:4000/friends').
            then(response => {
                return {
                    hasErrored: false,
                    friends: response.data,
                    time: new Date().toLocaleString()
                }
            }).catch(err => {
                return {
                    hasErrored: true,
                    friends: err.message,
                    time: new Date().toLocaleString()
                }
            });
        return promise;
    }

    constructor(props) {
        super(props);
        this.state = {
            time: props.time,
            friends: props.friends
        }
    }

    tick() {
        this.setState(
            () => {
                return (
                    { time: new Date().toLocaleString() }
                );
            }
        )
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <>
        <DigitalClock time={ this.state.time }></DigitalClock>
        <ul>{this.state.friends.map((friend, index) => {
            return <li key={index}>{friend.name}</li>
        })}</ul>
        </>
    }
}

export default Index;