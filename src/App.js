import { useState } from "react";
import Select from "react-select";
import "./App.css";
import Gold from "./component/Gold";

function App() {
  const Metaloptions = [
    { value: "gold", label: "Gold" },
    { value: "silver", label: "Silver" },
    { value: "gofo_libor", label: "GoFO/LIBOR" },
    { value: "platinum", label: "Platinum" },
    { value: "palladium", label: "Palladium" },
  ];
  const Yearoptions = [
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" },
    { value: "2017", label: "2017" },
    { value: "2016", label: "2016" },
    { value: "2015", label: "2015" },
    { value: "2014", label: "2014" },
    { value: "2013", label: "2013" },
    { value: "2012", label: "2012" },
    { value: "2011", label: "2011" },
    { value: "2010", label: "2010" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 10,
      background: "#fff",
    }),
  };
  return (
    <>
      <div className="container">
        {/* common title */}
        <div className="common-title p-4 text-center">
          <span>Prices and Data</span>
          <h2>LBMA Precious Metal Prices</h2>
          <h5>
            International prices for gold, silver, platinum and palladium.
          </h5>
        </div>

        {/* navbar */}
        <div className="metal-header">
          <div className="row">
            <div className="col-lg-3">
              <Select styles={customStyles} options={Metaloptions} />
            </div>
            <div className="col-lg-3">
              <Select styles={customStyles} options={Yearoptions} />
            </div>
            <div className="col-lg-3">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autocomplete="off"
                  checked
                />
                <label className="btn btn-outline-primary" for="btnradio1">
                  Daily
                </label>

                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autocomplete="off"
                />
                <label className="btn btn-outline-primary" for="btnradio2">
                  Monthly
                </label>
              </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-end">
              <button type="button" class="btn btn-primary">
                Download
              </button>
            </div>
          </div>
        </div>

        {/* metal price list */}

        <Gold />
      </div>
    </>
  );
}

export default App;
