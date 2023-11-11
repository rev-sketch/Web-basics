import { Formik, Form, Field } from "formik";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Registration1() {
  const [data, setdata] = useState([]);
  const [btnText, setbtnText] = useState("Submit");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:8080/Users")
      .then((response) => response.json())
      .then((result) => {
        setdata(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const Submit = (values, action) => {
    if (btnText === "Submit") {
      axios
        .post(
          "http://localhost:8080/Users",
          {
            id: values.id,
            name: values.name,
            country: values.country,
            comment: values.comment,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("Data successfully submitted:", response.data);
          action.resetForm();
          setbtnText("Submit");
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
        })
        .finally(() => {
          getData();
        });
    } else {
      axios
        .put(`http://localhost:8080/Users/${values.id}`, values)
        .then((response) => {
          console.log("Record updated successfully:", response.data);
          action.resetForm();
          setbtnText("Submit");
        })
        .catch((error) => {
          console.error("Error updating record:", error);
        })
        .finally(() => {
          getData();
        });
    }
  };

  const Validate = (values) => {
    const errors = {};
    if (!values.id) {
      errors.id = "Required";
    }
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.country) {
      errors.country = "Required";
    }
    if (!values.comment) {
      errors.comment = "Required";
    }
    return errors;
  };

  const deleterecord = (id) => {
    axios
      .delete("http://localhost:8080/Users/" + id)
      .then(function (response) {
        alert("Record deleted");
        getData();
      })
      .catch(function (error) {
        console.error("There was a problem with the Axios request:", error);
      });
  };

  const editrecord = (item) => {
    setbtnText("Update");
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>
        <center>Test Form</center>
      </h1>
      <Formik
        initialValues={{
          id: "",
          name: "",
          country: "",
          comment: "",
        }}
        validate={Validate}
        onSubmit={Submit}
      >
        {({ errors, touched }) => (
          <Form>
            <div style={{ width: "40%", float: "left", marginLeft: "60px" }}>
              <div>
                <label htmlFor="id">ID</label>
                <Field type="text" id="id" name="id" />
                {errors.id && touched.id && (
                  <div className="txt-red">{errors.id}</div>
                )}
              </div>

              <div>
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                {errors.name && touched.name && (
                  <div className="txt-red">{errors.name}</div>
                )}
              </div>

              <div>
                <label htmlFor="country">Country</label>
                <Field as="select" id="country" name="country">
                  <option value="">Select a country</option>
                  <option value="India">India</option>
                  <option value="US">US</option>
                </Field>
                {errors.country && touched.country && (
                  <div className="txt-red">{errors.country}</div>
                )}
              </div>

              <div>
                <label htmlFor="comment">Comment</label>
                <Field as="textarea" id="comment" name="comment" />
                {errors.comment && touched.comment && (
                  <div className="txt-red">{errors.comment}</div>
                )}
              </div>

              <button type="submit">{btnText}</button>
            </div>
          </Form>
        )}
      </Formik>
      <div style={{ width: "40%", float: "right", marginRight: "80px" }}>
        <table className="users-table">
          <tbody>
            <tr>
              <th>Id </th>
              <th>Name </th>
              <th>Country</th>
              <th>Comment</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {data
              ? data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id} </td>
                    <td>{item.name} </td>
                    <td>{item.country}</td>
                    <td> {item.comment}</td>
                    <td>
                      <button
                        onClick={(e) => {
                          editrecord(item);
                        }}
                      >
                        Edit
                      </button>{" "}
                    </td>
                    <td>
                      {" "}
                      <button
                        onClick={(e) => {
                          deleterecord(item.id);
                        }}
                      >
                        Delete
                      </button>{" "}
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Registration1;
