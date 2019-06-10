import React from 'react';
import moment from 'moment';


const Detections = (props) => {
  const { recentDetections } = props;
  if (recentDetections.data !== undefined) {
    return (
      <div className="detectionResult">
        {recentDetections.data.map(data => (
          <span className="detection">
            <object data={data.media.media_url} type="image/png">
              <img className="detectionImage" src="https://files.readme.io/876620b-small-readme_logo.png" alt="Detection Image" />
            </object>
            <div className="probability">
              Probability: { ((data.detections[0].probability) * 100).toFixed(2) }%
            </div>
            <div className="updated">
              Updated: { moment(data.updated_at).format('MM/DD/YYYY, h:mm:ss a') }
            </div>
          </span>
        ))}
      </div>
    );
  }
  return (
    <div className="loading">Loading...</div>
  );
};

export default Detections;
