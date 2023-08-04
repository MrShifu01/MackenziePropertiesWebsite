import PropertyCard from "./PropertyCard";

const Properties = () => {
  return (
    <div>
      <h2 className="text-center">Properties</h2>
      <div className="d-flex flex-column gap-2 justify-content-center align-items-center pt-5">
        <PropertyCard />
        <PropertyCard />
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
