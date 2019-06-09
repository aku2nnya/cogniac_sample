import React from 'react';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
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
          data: response.data,
        });
      })
      .then(() => console.log(this.state.data))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>HI</div>
    );
  }
}

export default App;
