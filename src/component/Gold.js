import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
export default function Gold() {
  return (
    <>
      <div className="text-white mt-5">
        <h4>LBMA Gold Prices</h4>

        {/* table goes here */}
        {/* <AutoSizer>
          {({ height, width }) => (
            <List className="List" height={100} itemCount={10} itemSize={35}> */}
        <table class="table table-dark table-hover mt-5">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">AM</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">PM</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">USD $</th>
              <th scope="col">GBP £</th>
              <th scope="col">EUR €</th>
              <th scope="col">USD $</th>
              <th scope="col">GBP £</th>
              <th scope="col">EUR €</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
        {/* </List>
          )}
        </AutoSizer> */}
      </div>
    </>
  );
}
