import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Investor.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table-inve/Table";

const Investor = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="investors" />
          <Widget type="invhire" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Amount of investments)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">List of Investors</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Investor;
