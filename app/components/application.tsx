import React from "react";

export default function Application() {
  return (
    <div>
      <h1>Application Component</h1>
      <h2>This is a testing component used to under stand roles </h2>
      <p>All fees are mandatory</p>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          aria-label="name"
          placeholder="balls"
          value="Vishwas"
          readOnly
        />
        <img src="https://balls.com" alt="This is a goat" />
        <span title="close">close</span>
        <div>
          <textarea id="bio" aria-label="bio" name="bio" />
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="USA">United states</option>
            <option value="GH">Ghana</option>
            <option value="NGN">Nigeria</option>
            <option value="CO">Congo</option>
            <option value="GA">Gambia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to the terms and
            conditions
          </label>
        </div>
      </div>
      <button>Button</button>
    </div>
  );
}
