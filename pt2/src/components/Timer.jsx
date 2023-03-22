import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(60);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (check) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [time, check]);

  const [alertCheck, setAlertCheck] = useState(false);
  const toggleMenu = () => {
    setAlertCheck(true);
  };

  return (
    <div>
      <h1>타이머</h1>
      <h1>{time}</h1>
      <button
        onClick={() => {
          setCheck(!check);
          console.log(check);
        }}
      >
        시작
      </button>
      {alertCheck ? <div>togglemenu다</div> : <></>}
      <button onClick={toggleMenu}>click</button>
    </div>
  );
}

export default Timer;
