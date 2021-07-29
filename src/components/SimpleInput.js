import React, { useState, useEffect } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredvaluTuched, setEnteredValuseTuched] = useState(false);

  const enterednameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enterednameIsValid && enteredvaluTuched;

  const NameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredValuseTuched(true);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!enterednameIsValid) {
      return;
    }

    setEnteredName("");
  };
  const nameinputClasses = nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameinputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onBlur={nameInputBlurHandler}
          onChange={NameInputChangeHandler}
        />
        {!enterednameIsValid && <p>name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
