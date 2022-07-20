import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Student.scss";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table-stud/Table";

const Student = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="student" />
          <Widget type="hire" />
        </div>
        <div className="charts">
          <Chart title="Last 6 Months (Number of students)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">List of students</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Student;
