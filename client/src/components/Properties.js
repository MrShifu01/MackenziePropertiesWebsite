import PropertyCard from "./PropertyCard";

const Properties = () => {
  return (
    <div>
      <div className="d-flex justify-content-end align-items-center pt-5">
        <h3 className="text-black me-2 pt-2 fs-5">Suburb: </h3>
        <select className="btn btn-secondary">
          <option value="all">All</option>
          <option value="royldene">Royldene</option>
          <option value="rhodesdene">Rhodesdene</option>
          <option value="hadisonpark">Hadison Park</option>
        </select>
      </div>
      <div className="d-flex flex-column gap-2 justify-content-center align-items-center pt-5">
        <PropertyCard />
        <PropertyCard active='active' />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  )
};

export default Properties;
