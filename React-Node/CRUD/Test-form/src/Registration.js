import React, { useEffect, useState } from "react";


function Registration() {
  const [data, setdata] = useState([]);
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [country, setcountry] = useState("");
  const [comment, setcomment] = useState("");

  const [reqId, setreqId] = useState("");
  const [reqName, setreqName] = useState("");
  const [reqCountry, setreqCountry] = useState("");
  const [reqComment, setreqComment] = useState("");
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

  const submit = (event) => {
    event.preventDefault();
    resetErrorMessage();
    if (Validate()) {
      if (btnText === "Submit") {
        fetch("http://localhost:8080/Users", {
          method: "POST",
          body: JSON.stringify({
            id: id,
            name: name,
            country: country,
            comment: comment,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            alert("Record inserted");
            getData();
            resetform();
            resetErrorMessage();
          });
      } else {
        fetch("http://localhost:8080/Users/" + id, {
          method: "PUT",
          body: JSON.stringify({
            name: name,
            country: country,
            comment: comment,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => {
            alert("Record updated");
            getData();
            resetform();
            resetErrorMessage();
          });
      }
    }
  };

  const Validate = () => {
    if (id.trim() === "") setreqId("required");
    else if (name.trim() === "") setreqName("required");
    else if (country.trim() === "") setreqCountry("required");
    else if (comment.trim() === "") setreqComment("required");
    else return true;
  };

  const resetErrorMessage = () => {
    setreqId("");
    setreqName("");
    setreqCountry("");
    setreqComment("");
  };
  const resetform = () => {
    setid("");
    setname("");
    setcountry("");
    setcomment("");
    setbtnText("Submit");
  };
  const deleterecord = (id) => {
    fetch("http://localhost:8080/Users/" + id, { method: "DELETE" })
      .then((response) => response.json())
      .then((result) => {
        alert("Record deleted");
        getData();
      });
  };
  const editrecord = (item) => {
    setid(item.id);
    setname(item.name);
    setcountry(item.country);
    setcomment(item.comment);
    setbtnText("Update");
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>
        <center>Test Form</center>
      </h1>
      <div style={{ width: "40%", float: "left", marginLeft: "60px" }}>
        <form onSubmit={submit}>
          <table className="users-table">
            <tbody>
              <tr>
                <th colSpan="2">
                  <center>User Registration Form</center>
                </th>
              </tr>
              <tr>
                <td>
                  <b>Id</b>
                </td>
                <td>
                  <input
                    type="number"
                    value={id}
                    name="id"
                    onChange={(e) => setid(e.target.value)}
                  />
                  <br />
                  {reqId === "required" && (
                    <span className="txt-red">Please enter id</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <b> Name</b>
                </td>
                <td>
                  <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={(e) => setname(e.target.value)}
                  />
                  <br />
                  {reqName === "required" && (
                    <span className="txt-red">Please enter name</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <b>Country</b>{" "}
                </td>
                <td>
                  <select
                    name="country"
                    value={country}
                    onChange={(e) => setcountry(e.target.value)}
                  >
                    <option value="">-----------Select------------</option>
                    <option value="India">India</option>
                    <option value="US">US</option>
                  </select>
                  <br />
                  {reqCountry === "required" && (
                    <span className="txt-red">Please select country</span>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <b>Comment</b>{" "}
                </td>
                <td>
                  <textarea
                    value={comment}
                    name="comment"
                    onChange={(e) => setcomment(e.target.value)}
                  ></textarea>
                  <br />
                  {reqComment === "required" && (
                    <span className="txt-red">Please enter comment</span>
                  )}
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <input type="submit" value={btnText} />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
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
export default Registration;
