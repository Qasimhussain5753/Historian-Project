import React, { Component } from "react";

/////// Start Bootstrap Files //////////
import "bootstrap-select/dist/css/bootstrap-select.min.css";
import "bootstrap-select/js/bootstrap-select.js";
import "bootstrap-select-country/dist/css/bootstrap-select-country.min.css";
// End BootStrap Select files ////
class AsideControl extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <aside className="control-sidebar control-sidebar-dark">
        <div className="form-group">
          <div className="col-sm-10">
            <h1>Advance search</h1>
            <br />
            <br />
            <br />
            <h5 className="">Select the country*</h5>
            <select
              className="selectpicker countrypicker"
              flag-tag="true"
              multiple
            ></select>
            <br />
            <br />
            <br />
            <h6 className="">Select the State/Province*</h6>
            <select
              className="selectpicker countrypicker"
              flag-tag="true"
              multiple
            ></select>
            <br />
            <br />
            <br />
            <h5 className="">Select the Contribution*</h5>
            <select
              className="selectpicker countrypicker"
              flag-tag="true"
              multiple
            ></select>
          </div>
        </div>
      </aside>
    );
  }
}
export default AsideControl;
