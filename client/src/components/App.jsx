import React from 'react';
import axios from 'axios';
import Detections from './Detections';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
    this.getData = this.getData.bind(this);
    // this.getRecentDetections = this.getRecentDetections.bind(this);
  }

  componentDidMount() {
    this.getData();
    // this.getRecentDetections();
  }

  getData() {
    axios.get('/data')
      .then((response) => {
        console.log(response.data);
        this.setState({
          data: response.data,
        });
      })
      .catch(error => console.error(error.message));
  }

  // getRecentDetections() {
  //   axios({
  //     method: 'get',
  //     url: 'https://api.cogniac.io/1/applications/QBzQ3t1x/detections',
  //     headers: {
  //       Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWEiOiJmcm9udF9lbmRfY2FuZGlkYXRlc0Bjb2duaWFjLmNvIiwic3ViIjoiU0NVOXZSNTlxRUF4b2Q0cU1xWUo4RiIsImlzcyI6IkNvZ25pYWMiLCJleHAiOjE1NjA0NjAxNTEuMTMxNDI5LCJ0aWQiOiI1aGdyeGVxa3BpejgiLCJpYXQiOjE1NTk4NTUzNTEuMTMxNDI5LCJybHMiOlsidGVuYW50X3VzZXIiXX0.EsKZfEtF7xCLkBaJzE3cVGDu_okmTeOeC6z0jlz9601ebOGTJFG7L5Pw-c-sMRzx35rRUZjobmRgB5btaJEV0C0QnvsE51QaWGhTij9tnLZjsPwo2_v9dho6xF58bkmhW8KUfiFyR9x5QJ9yEKlFFRRAitQBL5pze8SZXVotNMGOv99zrVh5mEi2nsCECCK3EV9unufaL0ZK_CP6Pi4yIBpg3Webl1SXrD5Sr37rJged9QhT8DCImJeprZoakcbNh7U1_5uGP_UtCEAx9pic6M9vvzvtmacSVCi2brXyZS_mSqQSKUw86AKYj2EKlzlo2s2QXGfyPhQMIvhJD1ITgw'
  //     },
      // responseType: 'blob',
    // })
    //   .then((response) => {
    //     console.log(response.data);
    //     const blobUrl = URL.createObjectURL(new Blob([response.data]));
    //     console.log('THIS ', blobUrl);
    //     const img = document.getElementById('test');
    //     img.src = blobUrl;
        // console.log(response);
        // const mediaUrlArr = [];
        // response.data.data.forEach((data) => {
        //   mediaUrlArr.push(data.media.media_url);
        // });
        // this.setState({
        //   data: mediaUrlArr[0],
        // });
        // console.log(mediaUrlArr[0]);
  //     })
  //     .catch(error => console.log('YEAH ERROR ', error));
  // }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Detections data={data} />
      </div>
    );
  }
}

export default App;
