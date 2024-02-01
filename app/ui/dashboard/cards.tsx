import React from "react";

const Cards = () => {
  return (
    <div className="row col-md-12 px-2">
      {/* Első kártya */}
      <div className="col-xl-3 col-md-3 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Bevétel (Havi)
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  4 728 000 Ft
                </div>
              </div>
              <div className="col-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-currency-dollar"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 
                  3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 
                  1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 
                  1.472-3.27 3.156 0 1.454.966 2.483 2.661 
                  2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 
                  0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 
                  1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Második kártya */}
      <div className="col-xl-3 col-md-3 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Bevétel (Éves)
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  762 123 000 Ft
                </div>
              </div>
              <div className="col-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-cash-stack"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                  <path
                    d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 
                  0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Harmadik kártya */}
      <div className="col-xl-3 col-md-3 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Függő munkalapok
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">31</div>
              </div>
              <div className="col-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-hourglass"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 
                  1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 
                  .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 
                  1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 
                  2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 
                  4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5m2.5.5v1a3.5 3.5 0 0 0 1.989 
                  3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 
                  1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 
                  9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Negyedik kártya */}
      <div className="col-xl-3 col-md-3 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Lezárt munkalapok
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  123
                </div>
              </div>
              <div className="col-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-collection"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 
                  0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 
                  13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 
                  13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
