/* eslint-disable react/prop-types */
import React from "react";
import Card from "../components/Card";

const isDataReady = (data) => {
  return (data !== null || data !== undefined) && data?.length > 0;
};

const Results = ({ data, setError, error, type }) => {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "60px",
  };

  return (
    <React.Fragment>
      {isDataReady(data) ? (
        <div style={cardStyle}>
          {data.map((obj, i) => (
            <Card
              key={obj.node_id ?? i}
              setError={setError}
              error={error}
              obj={obj}
              type={type}
            />
          ))}
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default Results;
export { isDataReady };
