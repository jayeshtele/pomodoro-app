import React, { useEffect, useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import ReplayIcon from "@mui/icons-material/Replay";

export default function ShortBreak() {
  const [isPaused, setIsPaused] = useState(true);
  const [timer, setTimer] = useState(300);

  useEffect(() => {
    let interval;

    function startTimer() {
      if (!isPaused) {
        interval = setInterval(() => {
          setTimer((time) => time - 1);
        }, 1000);
      }

      if (timer < 0) {
        clearInterval(interval);
        setTimer(300);
        setIsPaused(true);
      }
    }
    startTimer();

    return () => {
      clearInterval(interval);
    };
  }, [isPaused, timer]);

  function handleReset() {
    setIsPaused(true);
    setTimer(300);
  }

  return (
    <div>
      <h1 className="mt-10 w-[14rem] rounded-full border-[10px] px-10 py-20 text-5xl text-white">{`${Math.floor(
        timer / 60,
      )
        .toString()
        .padStart(2, "0")}:${Math.floor(timer % 60)
        .toString()
        .padStart(2, "0")}`}</h1>
      <div className="playPause mt-10 flex cursor-pointer justify-center space-x-10 text-white">
        <div
          className="playPause_toggle"
          onClick={() => setIsPaused((toggle) => !toggle)}
        >
          {isPaused ? (
            <PlayCircleIcon style={{ fontSize: "5em" }} />
          ) : (
            <PauseCircleIcon style={{ fontSize: "5em" }} />
          )}
        </div>

        <ReplayIcon onClick={handleReset} style={{ fontSize: "5em" }} />
      </div>
    </div>
  );
}
