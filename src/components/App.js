import React from 'react';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    state = { latitude: null, errorMessage: '' };

    componentDidMount() {
        // runs AFTER component has been rendered
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ latitude: position.coords.latitude }), // success callback
            error => this.setState({ errorMessage: error.message }) // error callback
        );
    }

    render() {
        
        // if there IS an error message, and NO latitude: display an error message
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        // if there is NO error message, and IS a latitude: display the latitude
        if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay latitude={this.state.latitude} />;
        }

        // if there is NO error message, and NO latitude: display loading text
        return <div>Loading...</div>;
    }
}

export default App;

// JS file is loaded into browser
// Instance of the App component is created
// State object is created and assigned to 'this.state'
// React calls the component's 'render' method
// We call geolocation service
// App returns JSX and renders to the page as HTML
// We get result of geolocation