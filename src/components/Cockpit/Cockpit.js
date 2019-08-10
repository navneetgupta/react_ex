import React, { useEffect } from "react";

const Cockpit = props => {
  useEffect(() => {
    console.log("[CockPit.js] useEffeck Hook...");
    // HTtp Request goes here
    // This will run for every changes for virtual dom and then verify it with actual dom if any changes then
    // Only it changes actual dom.
    // It runs for every lifecycle hook we have seen in class based component. after every reder cycle infact
    setTimeout(() => {
      console.log("Saved Data to cloud...");
    }, 1000);
  }, [props.persons]);

  //useEffect(); We could define multiple useHook for different set of data.

  const csscl = [];
  if (props.persons.length <= 2) {
    csscl.push(props.styles.red);
  }

  if (props.persons.length <= 1) {
    csscl.push(props.styles.bold);
  }
  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p className={csscl.join(" ")}>This is really working!</p>
      <button style={props.styles.style} onClick={props.toggle}>
        Toggle Person View
      </button>
    </div>
  );
};

export default Cockpit;
