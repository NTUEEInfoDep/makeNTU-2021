import React from "react";
import Timeline from "react-time-line";

const data = [
  { ts: "2021-05-08T09", text: "　報　　到　　Check-in" },
  { ts: "2021-05-08T10", text: "　開　　幕　　Opening" },
  { ts: "2021-05-08T11", text: "『　開始　』　Making Starts" },
  { ts: "2021-05-08T12", text: "　午　　餐　　Lunch" },
  { ts: "2021-05-08T18", text: "　晚　　餐　　Dinner" },
  { ts: "2021-05-08T21", text: "　宵　　夜　　Night Treat" },
  { ts: "2021-05-09T07", text: "　早　　餐　　Breakfast" },
  { ts: "2021-05-09T11", text: "『　結束　』　Making Ends" },
  { ts: "2021-05-09T11:30", text: "　午　　餐　　Lunch" },
  { ts: "2021-05-09T12", text: "　分組評選　　Expo" },
  { ts: "2021-05-09T16", text: "　八強決選　　Top 8 Demo" },
  { ts: "2021-05-09T17", text: "　頒獎典禮　　Award Ceremony" },
  { ts: "2021-05-09T18", text: "　閉　　幕　　Ending" },
];

export default function () {
  return (
    <div>
      <h1>react-time-line</h1>
      <p>
        <br />
      </p>
      <Timeline items={data} format="Tkk:mm" />
    </div>
  );
}
