/* App.js
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [extraInfo, setExtraInfo] = useState("");

  function submitFormToNotion() {
    const currentTimestamp = new Date().toISOString();

    fetch("http://localhost:4000/submitFormToNotion", {
      method: "POST", // Use uppercase for the HTTP method
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        emailAddress: emailAddress,
        extraInfo: extraInfo,
        Timestamp: currentTimestamp,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success! ", data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  return (
    <div className="App">
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h1>Interested in learning more? Put your info in below!</h1>
        <p>Name</p>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <p>Email Address</p>
        <input
          type="text"
          id="emailAddress"
          onChange={(e) => setEmailAddress(e.target.value)} // Fixed the function name
        ></input>
        <p>Anything else?</p>
        <textarea
          onChange={(e) => setExtraInfo(e.target.value)}
          rows={10}
          cols={25}
        />
        <div>
          <button onClick={submitFormToNotion}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default App;


import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [extraInfo, setExtraInfo] = useState("");

  // Functions to handle focus and blur events
  const handleInputFocus = (e) => {
    e.currentTarget.closest(".input-wrap").classList.add("focus");
    e.currentTarget.closest(".input-wrap").classList.add("not-empty");
  };

  const handleInputBlur = (e) => {
    if (e.currentTarget.value === "") {
      e.currentTarget.closest(".input-wrap").classList.remove("not-empty");
    }
    e.currentTarget.closest(".input-wrap").classList.remove("focus");
  };

  function submitFormToNotion() {
    const currentTimestamp = new Date().toISOString();

    fetch("http://localhost:4000/submitFormToNotion", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        emailAddress: emailAddress,
        extraInfo: extraInfo,
        Timestamp: currentTimestamp,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success! ", data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  return (
    <div className="container">
      <div className="contact-heading">
        Feedback Form<span>.</span>
      </div>
      <form action="/submitFormToNotion" method="post" className="contact-form">
        <div className="input-wrap w-100">
          <input
            className="contact-input"
            autoComplete="off"
            name="Name"
            type="text"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Name</label>
          <i className="icon fa-solid fa-address-card"></i>
        </div>
        <div className="input-wrap w-100">
          <input
            className="contact-input"
            autoComplete="off"
            name="Email Address"
            type="text"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          <label>Email Address</label>
          <i className="icon fa-solid fa-envelope"></i>
        </div>
        <div className="input-wrap textarea w-100">
          <textarea
            name="Message"
            autoComplete="off"
            className="contact-input"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={(e) => setExtraInfo(e.target.value)}
          ></textarea>
          <label>Message</label>
          <i className="icon fa-solid fa-inbox"></i>
        </div>
        <div className="contact-buttons">
          <label className="check-container">
            <p>
              I have read and agreed to the{" "}
              <a href="linkedin.com">Terms and Agreement.</a>
            </p>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="contact-buttons">
          <button type="submit" onClick={submitFormToNotion} className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
*/

import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [extraInfo, setExtraInfo] = useState("");

  // Functions to handle focus and blur events
  const handleInputFocus = (e) => {
    e.currentTarget.closest(".input-wrap").classList.add("focus");
    e.currentTarget.closest(".input-wrap").classList.add("not-empty");
  };

  const handleInputBlur = (e) => {
    if (e.currentTarget.value === "") {
      e.currentTarget.closest(".input-wrap").classList.remove("not-empty");
    }
    e.currentTarget.closest(".input-wrap").classList.remove("focus");
  };

  const submitFormToNotion = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const currentTimestamp = new Date().toISOString();

    fetch("http://localhost:4000/submitFormToNotion", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        emailAddress: emailAddress,
        extraInfo: extraInfo,
        Timestamp: currentTimestamp,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success! ", data);
        // Reset form fields or show a success message as needed
        setName("");
        setEmailAddress("");
        setExtraInfo("");
      })
      .catch((error) => {
        console.log("Error: ", error);
        // Handle error or show an error message as needed
      });
  };

  return (
    <div className="container">
      <div className="contact-heading">
        Feedback Form<span>.</span>
      </div>
      <form onSubmit={submitFormToNotion} className="contact-form">
        <div className="input-wrap w-100">
          <input
            className="contact-input"
            autoComplete="off"
            name="Name"
            type="text"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Name</label>
          <i className="icon fa-solid fa-address-card"></i>
        </div>
        <div className="input-wrap w-100">
          <input
            className="contact-input"
            autoComplete="off"
            name="Email Address"
            type="text"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          <label>Email Address</label>
          <i className="icon fa-solid fa-envelope"></i>
        </div>
        <div className="input-wrap textarea w-100">
          <textarea
            name="Message"
            autoComplete="off"
            className="contact-input"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={(e) => setExtraInfo(e.target.value)}
          ></textarea>
          <label>Message</label>
          <i className="icon fa-solid fa-inbox"></i>
        </div>
        <div className="contact-buttons">
          <label className="check-container">
            <p>
              I have read and agreed to the{" "}
              <a href="linkedin.com">Terms and Agreement.</a>
            </p>
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="contact-buttons">
          <button type="submit" onClick={submitFormToNotion} className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
