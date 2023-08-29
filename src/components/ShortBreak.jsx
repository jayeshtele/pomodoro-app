import React, { useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import ReplayIcon from "@mui/icons-material/Replay";

export default function ShortBreak() {
  const [playPause, setPlayPause] = useState(false);

  return (
    <div>
      <h1 className="mt-20 text-9xl text-white">05:00</h1>
      <div className="playPause mt-10 flex cursor-pointer justify-center space-x-10 text-white">
        <div
          className="playPause_toggle"
          onClick={() => setPlayPause((toggle) => !toggle)}
        >
          {playPause ? (
            <PauseCircleIcon style={{ fontSize: "5em" }} />
          ) : (
            <PlayCircleIcon style={{ fontSize: "5em" }} />
          )}
        </div>

        <ReplayIcon style={{ fontSize: "5em" }} />
      </div>
    </div>
  );
}
