import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Company.scss";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table-comp/Table";

const Company = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="company" />
          <Widget type="comhire" />
        </div>
        <div className="charts">
          <Chart title="Last 6 Months (Number of Companies)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">List of Companies</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Company;
