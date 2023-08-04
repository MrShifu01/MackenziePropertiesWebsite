import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath, faCarSide } from '@fortawesome/free-solid-svg-icons'

const PropertyCard = () => {
  return (
    <div className="container rounded-4 border p-2 overflow-hidden">
      <div className="row">
        <div className="col-4">
          <img src="test4.jpeg" width={'100%'} alt="" className="rounded-3"/>
        </div>
        <div className="col-4">
          <h6 className="fs-6">3 Bedroom House</h6>
          <h6 className="fw-bold suburb">Rhodesdene</h6>
          <div className='d-flex gap-2 align-items-center opacity-75 text-primary'>
            <FontAwesomeIcon icon={faBed} /> 3
            <FontAwesomeIcon icon={faBath} /> 2
            <FontAwesomeIcon icon={faCarSide} /> 3
          </div>
        </div>
        <div className="col-4 text-end">
          R1 600 000
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
