import React, { useState } from "react";
import { useFormik } from "formik";

import axios from "axios";
import Switch from "react-switch";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { console } from "window-or-global";
// import Address from "../../address";
const validate = (value) => {
  let errors = {};

  if (!value.seconds) {
    errors.seconds = "Required";
  }
  if (!value.minutes) {
    errors.minutes = "Required";
  }
  if (!value.hours) {
    errors.hours = "required";
  }
  if (!value.days) {
    errors.days = "Required";
  }
  if (!value.months) {
    errors.months = "months Required";
  }
  if (!value.weeks) {
    errors.weeks = "Weeks Required";
  }
  return errors;
};

function Admin() {
  const [stateFamily, setFamily] = useState(false);
  const [stateContrib, setContrib] = useState(false);
  const [stateCorrds, setCoords] = useState(false);
  const [stateProfession, setProfession] = useState(false);

  const formik = useFormik({
    //// Initialize and Default values
    initialValues: {
      seconds: "1",
      minutes: "",
      hours: "",
      days: "",
      months: "",
      weeks: "",
    },
    onSubmit: (value) => {
      const { seconds, minutes, hours, days, months, weeks } = value;
      console.log("Formik_data", value);
      console.log("Family_tree", value);

      const fetch = axios
        .get(
          `http://${process.env.IP}:${process.env.PORT_3}?seconds=${seconds}
                        &minutes=${minutes}
                        &hours=${hours}
                        &days=${days}
                        &months=${months}
                        &weeks=${weeks}
                        &familytrees=${stateFamily}
                        &contributors=${stateContrib}
                        &coordinates=${stateCorrds}
                        &professions=${stateProfession}
                        `
        )
        .then((res) => console.log(res.data));
    },
    // validate,
  });

  console.log("Formik-values", formik.values);
  // console.log('Formik-Error',formik.errors)
  // console.log('Formik-Visited',formik.touched)
  function handleChangeFamily(checked) {
    if (checked) setFamily(true);
    else setFamily(false);
  }
  function handleChangeContributes(checked) {
    if (checked) setContrib(true);
    else setContrib(false);
  }
  function handleChangeCoords(checked) {
    if (checked) setCoords(true);
    else setCoords(false);
  }
  function handleChangeProfession(checked) {
    if (checked) setProfession(true);
    else setProfession(false);
  }
  console.log("FamilyTree", stateFamily);
  console.log("Contributor", stateContrib);
  console.log("Coordinates", stateCorrds);
  console.log("Profession", stateProfession);

  function TextFieldArea(field) {
    const label = `Enter ${field}*`;

    return (
      <li>
        <TextField
          type="number"
          label={label}
          id={field}
          name={field}
          onChange={formik.handleChange}
          value={formik.values.field}
          //  onBlur = { formik.handleBlur }
        />
        {formik.touched.field && formik.errors.field ? (
          <div style={{ color: "red" }}>{formik.errors.field}</div>
        ) : null}
      </li>
    );
  }
  console.log("Formik-values", formik.handleChange);
  console.log("Forik_touched", formik.initialTouched);

  return (
    <div>
      <div className="row">
        <div className="col">
          <form onSubmit={formik.handleSubmit}>
            <ul style={{ "list-style-type": "none" }}>
              {TextFieldArea("seconds")}
              {TextFieldArea("minutes")}
              {TextFieldArea("hours")}
              {TextFieldArea("days")}
              {TextFieldArea("months")}
              {TextFieldArea("weeks")}
              <li>
                <Button type="submit">Submit</Button>
              </li>
            </ul>
          </form>
        </div>
        <div class="col">
          <label>
            <Switch onChange={handleChangeFamily} checked={stateFamily} />
          </label>
          <p>
            {" "}
            Family Tree <b>{stateFamily ? "on" : "off"}</b>
          </p>
          <label>
            <Switch onChange={handleChangeContributes} checked={stateContrib} />
          </label>
          <p>
            {" "}
            Contributors <b>{stateContrib ? "on" : "off"}</b>
          </p>
          <label>
            <Switch onChange={handleChangeCoords} checked={stateCorrds} />
          </label>
          <p>
            {" "}
            Corrdinates <b>{stateCorrds ? "on" : "off"}</b>
          </p>
          <label>
            <Switch
              onChange={handleChangeProfession}
              checked={stateProfession}
            />
          </label>
          <p>
            {" "}
            Profession <b>{stateProfession ? "on" : "off"}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Admin;

{
  /* <TextField
                  type="number"
                  label="Enter Hours*"
                  id="hours"
                  name="hours"
                  onChange={formik.handleChange}
                  value={formik.values.hours}
                  //  onBlur = { formik.handleBlur }
                />
                {formik.touched.hours && formik.errors.hours ? (
                  <div style={{ color: "red" }}>{formik.errors.hours}</div>
                ) : null} */
}
