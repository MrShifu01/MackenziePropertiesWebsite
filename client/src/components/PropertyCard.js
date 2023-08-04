import React from "react";

const PropertyCard = () => {
  return (
    <div className="container rounded-4 border p-2 overflow-hidden">
      <div className="row">
        <div className="col-4">
          <img src="test.jpeg" width={'100%'} alt="" className="rounded-3"/>
        </div>
        <div className="col-6">
          <h4 className="fs-6">3 Bedroom House</h4>
          <h6 className="fw-bold suburb">Rhodesdene</h6>
          <i className="fas fa-check-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
