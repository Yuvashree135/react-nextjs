import React from 'react';
import DigitalClock from '../src/DigitalClock';

class Index extends React.Component {

    static async getInitialProps() {
        // for sync data
        // return ({
        //     time: new Date().toLocaleString()
        // });

        // for async
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    time: new Date().toLocaleString()
                })
            }, 3000);
        });
        return promise;
    }

    constructor(props) {
        super(props);
        this.state = {
            time: props.time
        }
    }

    tick() {
        this.setState(
            () => {
                return (
                    {time: new Date().toLocaleString()}
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
        return <h1>{this.state.time}</h1>
    }
}

export default Index;