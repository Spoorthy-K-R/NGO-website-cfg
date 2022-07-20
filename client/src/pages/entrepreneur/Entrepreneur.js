import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Entrepreneur.scss";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table-entre/Table";

const Entrepreneur = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="entrepreneur" />
          <Widget type="enthire" />
        </div>
        <div className="charts">
          <Chart
            title="Last 6 Months (Number of entrepreneur)"
            aspect={2 / 1}
          />
        </div>
        <div className="listContainer">
          <div className="listTitle">List of Entrepreneur</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Entrepreneur;
