import React from "react";

const Property = () => {
  return (
      <div className="m-6 position-relative">
        <div className="container rounded-5 p-0 overflow-hidden">
          <div className="row">
            <div className="col-8 p-0">
              <img
                src="test4.jpeg"
                width={"100%"}
                alt="property pic"
              />
            </div>
            <div className="col-md-4 p-0 d-flex flex-column justify-content-between">
              <div className="row pb-1 ps-2">
                <img src="test2.jpeg" alt="property pic" />
              </div>
              <div className="row ps-2">
                <img src="test3.jpeg" alt="property pic" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light rounded-5 p-2 position-absolute opacity-75" style={{ bottom: '10px', right: '10px' }}>
          View All Photos
        </div>
      </div>
  );
};

export default Property;
