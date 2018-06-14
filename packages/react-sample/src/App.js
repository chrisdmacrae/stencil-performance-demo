import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scale: 1,
      seconds: 0
    }
  }

  componentDidMount() {
    setInterval(this.tick.bind(this), 1000)
  }

  tick() {
    const seconds = (this.state.seconds % 10) + 1;
    this.setState({seconds: seconds})
  }

  render() {
    const elapsed = this.props.elapsed;
    const t = (elapsed / 1000) % 10;
    const scale = 1 + (t > 5 ? 10 - t : t) / 10;

    return (
      <div id="reactApp" style={{"--scale": scale}}>
        <demo-heading>
          React Example
        </demo-heading>
        <main>
          <demo-triangle
            x={0}
            y={0}
            s={1000}
            seconds={this.state.seconds} 
          />
        </main>
      </div>
    );
  }
}

export default App;
