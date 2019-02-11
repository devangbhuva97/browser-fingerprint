import React from 'react';
import Fingerprint2 from 'fingerprintjs2';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fingerprint: null
    }
  }

  async componentDidMount() {
    const fingerprint = await Fingerprint2.getPromise({}).then(function (components) {
      return Fingerprint2.x64hash128(components.map(function (pair) { return pair.value }).join(), 31);
    });    
    this.setState({ fingerprint });
  }

  render() {
    return <div>Browser Fingerprint : <strong>{this.state.fingerprint}</strong></div>;
  }
}

export default App;