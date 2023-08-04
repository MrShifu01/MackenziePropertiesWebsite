import Sidebar from "../components/Sidebar";
import Properties from "../components/Properties";
import Property from "../components/Property";
import FilterBar from "../components/FilterBar";

const HomePage = () => {
  return (
    <div className="row" >
      <div className="col-lg-2 border" style={{ maxHeight: '100vh'}}>
        <Sidebar />
      </div>
      <div className="col-lg-10" style={{ maxHeight: '100vh', overflow: 'hidden' }}>
        <div className="row filter-row">
          <div className="col-12">
            <FilterBar />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 border-0 border-top" style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}>
            <Properties />
          </div>
          <div className="col-lg-8 border-0 border-top" style={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}>
            <Property />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
