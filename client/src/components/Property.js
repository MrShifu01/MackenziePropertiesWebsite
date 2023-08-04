import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAreaChart,
  faBath,
  faBed,
  faCarSide,
  faCircle,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";

const Property = () => {
  return (
    <>
      {/* Images */}
      <div className="mx-6 mt-6 position-relative">
        <div className="container rounded-5 p-0 overflow-hidden">
          <div className="row">
            <div className="col-8 p-0">
              <img src="test4.jpeg" width={"100%"} alt="property pic" />
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
        <div
          className="bg-light rounded-5 p-2 position-absolute opacity-75"
          style={{ bottom: "10px", right: "10px" }}
        >
          View All Photos
        </div>
      </div>

      <div className="container">
        {/* Title */}
        <div className="row mx-5 mt-3">
          <div className="col-6">
            <h2 className="fw-bold">Rhodesdene</h2>
            <FontAwesomeIcon icon={faMapLocation} />{" "}
            <span className="text-muted opacity-75">
              24 Barkley Ave, Kimberley, Northern Cape, 8301
            </span>
          </div>
          <div className="col-6">
            <button className="btn btn-primary btn-lg float-end mt-4 rounded-5">
              Book a Tour
            </button>
          </div>
        </div>
        <hr className="w-75 mx-auto" />
        {/* Icons */}
        <div className="row w-75 ms-5 d-flex justify-content-around">
          <div className="col-3">
            <div className="d-flex align-items-center gap-3">
              <span className="fa-stack">
                <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
                <FontAwesomeIcon
                  icon={faBed}
                  className="fa-stack-1x text-white"
                />
              </span>
              <h2 className="mt-1">3</h2>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex align-items-center gap-3">
              <span className="fa-stack">
                <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
                <FontAwesomeIcon
                  icon={faBath}
                  className="fa-stack-1x text-white"
                />
              </span>
              <h2 className="mt-1">1</h2>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex align-items-center gap-3">
              <span className="fa-stack">
                <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
                <FontAwesomeIcon
                  icon={faCarSide}
                  className="fa-stack-1x text-white"
                />
              </span>
              <h2 className="mt-1">2</h2>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex align-items-center gap-3">
              <span className="fa-stack">
                <FontAwesomeIcon icon={faCircle} className="fa-stack-2x" />
                <FontAwesomeIcon
                  icon={faAreaChart}
                  className="fa-stack-1x text-white"
                />
              </span>
              <h2 className="mt-1">1500m</h2>
            </div>
          </div>
        </div>
        <hr className="w-75 mx-auto" />
        {/* Description */}
        <div className="row ms-5">
          <div className="col-10">
            <h4 className="fw-bold">Description</h4>
            <p className="text-muted opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vitae diam euismod, aliquam nunc quis, ultricies nisl. Donec
              aliquam, nisl vitae aliquam ultricies, nunc nisl ultricies nunc,
              vitae aliquam nunc nisl ut nisl. Donec aliquam, nisl vitae aliquam
              ultricies, nunc nisl ultricies nunc, vitae aliquam nunc nisl ut
              nisl.
            </p>
            <p className="text-muted opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vitae diam euismod, aliquam nunc quis, ultricies nisl. Donec
              aliquam, nisl vitae aliquam ultricies, nunc nisl ultricies nunc,
              vitae aliquam nunc nisl ut nisl. Donec aliquam, nisl vitae aliquam
              ultricies, nunc nisl ultricies nunc, vitae aliquam nunc nisl ut
              nisl.
            </p>
            <p className="text-muted opacity-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vitae diam euismod, aliquam nunc quis, ultricies nisl. Donec
              aliquam, nisl vitae aliquam ultricies, nunc nisl ultricies nunc,
              vitae aliquam nunc nisl ut nisl. Donec aliquam, nisl vitae aliquam
              ultricies, nunc nisl ultricies nunc, vitae aliquam nunc nisl ut
              nisl.
            </p>
            </div>
            </div>
      </div>
    </>
  );
};

export default Property;
