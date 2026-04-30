




/* 
import { useState } from "react";
import Header from "../component/Header";

interface TodayData {
  date : number;
  time : number;
  all : Date;
}

const TodayData = ({date, time, all}: TodayDataProps) => {
  const now = new Date();
  date = now.toLocaleDateString();
  time = now.toLocaleTimeString();
  all = now.toStriﬁng();
}

export {TodayData}; 

const UpdateTodayData = () => {
  const init = {
    date: 0,
    time: 0,
    all: new Date()
  };

  const [todayData, setTodayData] = useState<TodayData>(init);

  const TodayData = (now:Date) => {
    setTodayData({
      date : now.getDate(),
      time : now.getTime(),
      all : now
    });
  }
  return (
      <Header todayData={todayData} updateToday={TodayData}/>
  );
};

export type {TodayData};
export {UpdateTodayData};
*/