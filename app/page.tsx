import Cards from "./ui/dashboard/cards";
import Chart from "./ui/dashboard/chart";

export default async function Home() {
  return (
    <div className="container-fluid">
      <div className="row py-3 px-4">
        <div className="text-center mb-4 pt-4">
          &nbsp;&nbsp;&nbsp;
          <h1 className="h3 mb-0 py-2 text-gray-800">Főoldal</h1>
        </div>
        <div className="col-md-12">
          <div className="row col-md-12 px-2">
            <Cards />
          </div>
        </div>
        <div className="col-md-12">
          <Chart></Chart>
        </div>
      </div>
    </div>
  );
}
