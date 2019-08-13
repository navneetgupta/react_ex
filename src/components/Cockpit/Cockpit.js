import React, { useEffect, useRef, useContext } from "react";
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("[CockPit.js] useEffeck Hook...");
    // HTtp Request goes here
    // This will run for every changes for virtual dom and then verify it with actual dom if any changes then
    // Only it changes actual dom.
    // It runs for every lifecycle hook we have seen in class based component. after every reder cycle infact
  }, [props.persons]);

  useEffect(() => {
    console.log(
      "this will be executed only when component is loaded, not every render cycle"
    );
    toggleBtnRef.current.click();
    // This return will run before the main useEffect function runs
    // but after the (first) render cycle.
    const timeout = setTimeout(() => {
      console.log("Saved Data to cloud...");
    }, 1000);
    return () => {
      clearTimeout(timeout);
      console.log("[Cockpit.js] Cleanup Work in useEffect progress...");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 3rd useEffect Cycle");
    // This return will run before the main useEffect function runs
    // but after the (first) render cycle.
    // below will run cleanu on every render cycle.
    return () => {
      console.log("[Cockpit.js] 2nd cleanup work in useHook progressing...");
    };
  });

  //useEffect(); We could define multiple useHook for different set of data.

  const csscl = [];
  if (props.personsLength <= 2) {
    csscl.push(props.styles.red);
  }

  if (props.personsLength <= 1) {
    csscl.push(props.styles.bold);
  }
  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p className={csscl.join(" ")}>This is really working!</p>
      <button
        ref={toggleBtnRef}
        style={props.styles.style}
        onClick={props.toggle}
      >
        Toggle Person View
      </button>

      <button onClick={authContext.login} style={props.styles.style}>
        Login
      </button>
    </div>
  );
};

// export default Cockpit;
export default React.memo(Cockpit);
