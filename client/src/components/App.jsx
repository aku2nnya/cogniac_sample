import React from 'react';
import axios from 'axios';
import Detections from './Detections';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recentDetections: {},
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/data')
      .then((response) => {
        this.setState({
          recentDetections: response.data,
        });
      })
      .catch(error => console.error(error.message));
  }

  render() {
    const { recentDetections } = this.state;
    return (
      <div>
        <div className="header">
          Recent Detections
        </div>
        <Detections recentDetections={recentDetections} />
      </div>
    );
  }
}

export default App;
