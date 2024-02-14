import React, { useEffect, useRef, useState } from "react";
import webroukCustomRange from "https://cdn.skypack.dev/webrouk-custom-range@latest";
const VideoTrim = () => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [videoSrc, setVideoSrc] = useState("");
  const [trimmedVideoUrl, setTrimmedVideoUrl] = useState("");
  function handleLoadedMetadata() {
    videoRef.current.currentTime = 0;
    setEndTime(videoRef.current.duration);
  }

  function handleStartTimeChange(event) {
    setStartTime(event.target.value);
    videoRef.current.currentTime = event.target.value;
  }

  function handleEndTimeChange(event) {
    setEndTime(event.target.value);
  }

  function handleTimeUpdate() {
    setCurrentTime(videoRef.current.currentTime);
  }

  const handleChange = (e) => {
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    setVideoSrc(url);
  };

  function trimVideo(originalVideoUrl, startTime, endTime) {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      video.src = originalVideoUrl;
      video.currentTime = startTime;

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      let frames = [];

      video.addEventListener("timeupdate", () => {
        if (video.currentTime >= endTime) {
          // Stop capturing frames when the end time is reached
          resolve(framesToBlob(frames));
        } else {
          // Capture frames
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          frames.push(canvas.toDataURL("image/jpeg", 0.8));
          video.currentTime += 0.1;
        }
      });

      video.addEventListener("error", () => {
        reject(new Error("Failed to load video"));
      });
    });
  }
  function framesToBlob(frames) {
    console.log("frames", frames);
    const buffers = frames.map((frame) => {
      const byteString = atob(frame.split(",")[1]);
      const buffer = new ArrayBuffer(byteString.length);
      const view = new Uint8Array(buffer);

      for (let i = 0; i < byteString.length; i++) {
        view[i] = byteString.charCodeAt(i);
      }
      console.log("viewview", view);
      return view;
    });
    console.log("buffers", buffers);
    const blob = new Blob(buffers[buffers.length - 1], { type: "video/mp4" });
    // const url = URL.createObjectURL(
    //   new Blob([data.buffer], { type: "video/mp4" })
    // );
    return URL.createObjectURL(blob);
    // const blob = new Blob(
    //   [new Uint8Array(atob(frames.join(",").split(";base64,")[1])).buffer],
    //   {
    //     type: "video/mp4",
    //   }
    // );
    // return URL.createObjectURL(blob);
  }
  const handleTrim = async () => {
    const trim = await trimVideo(videoSrc, 1, 15);
    console.log("trim", trim);
    const trimmedVideo = document.createElement("video");
    trimmedVideo.src = trim;
    trimmedVideo.controls = true;
    // trimmedVideo.playbackRate = videoRef.current.playbackRate;
    document.body.appendChild(trimmedVideo);
    // setTrimmedVideoUrl(trim);
  };

  // const handleTrim = () => {
  //   const start = 0;
  //   const end = 15;

  //   const stream = videoRef.current.captureStream();
  //   const mediaRecorder = new MediaRecorder(stream, {
  //     videoBitsPerSecond: 8000000,
  //     container: "mp4",
  //   });
  //   // videoRef.current.play();
  //   videoRef.current.currentTime = start;

  //   mediaRecorder.start();
  //   setTimeout(() => {
  //     mediaRecorder.stop();
  //     videoRef.current.pause();
  //     const chunks = [];

  //     mediaRecorder.ondataavailable = (event) => {
  //       console.log("ondataavailable", event.data);
  //       chunks.push(event.data);
  //     };

  //     mediaRecorder.onstop = () => {
  //       const blob = new Blob(chunks, { type: "video/mp4" });
  //       const url = URL.createObjectURL(blob);
  //       console.log("urlurl0,", url);
  //       const trimmedVideo = document.createElement("video");
  //       trimmedVideo.src = url;
  //       trimmedVideo.controls = true;
  //       trimmedVideo.playbackRate = videoRef.current.playbackRate;
  //       document.body.appendChild(trimmedVideo);
  //     };
  //   }, (end - start) * 1000);
  // };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          handleChange(e);
        }}
        accept="video/mp4"
      />

      {videoSrc && (
        <>
          <div>
            <video
              ref={videoRef}
              width={"100%"}
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
              controls
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            {trimmedVideoUrl && (
              <video width={"100%"} controls>
                <source src={trimmedVideoUrl} type="video/mp4" />
              </video>
            )}
          </div>
          <input
            type="range"
            min="0"
            max={endTime}
            value={startTime}
            onChange={handleStartTimeChange}
          />
          <input
            type="range"
            min={startTime}
            max={videoRef.current ? videoRef.current.duration : 0}
            value={endTime}
            onChange={handleEndTimeChange}
          />
        </>
      )}
      <button onClick={handleTrim}>Trim Video</button>
    </div>
  );
};

export default VideoTrim;
