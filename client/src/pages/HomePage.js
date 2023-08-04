import Sidebar from "../components/Sidebar";
import Properties from "../components/Properties";
import Property from "../components/Property";
import FilterBar from "../components/FilterBar";

const HomePage = () => {
  return (
    <div className="row vh-100">
      <div className="col-lg-2 border">
        <Sidebar />
      </div>
      <div className="col-lg-10">
        <div className="row filter-row">
          <div className="col-12">
            <FilterBar />
          </div>
        </div>
        <div className="row vh-100">
          <div className="col-lg-4 border">
            <Properties />
          </div>
          <div className="col-lg-8 border">
            <Property />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
