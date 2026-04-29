import { useEffect, useState } from "react";
import { type TodayData } from "../types/Today";
import { UpdateTodayData } from "../types/Today";

interface HeaderProps {
  todayData : TodayData;
  updateToday: (now:Date) => void;
}

const Header = ({todayData, updateToday}:HeaderProps) => {
  const [date, setDate] = useState<string>('');
  useEffect(() =>{
    updateToday(new Date())
    setDate(todayData.all.toDateString());
  },[date]);

  return(
    <div>
      <h4>오늘은 📅</h4>
      <h2>{date}</h2>
    </div>
  );
};

export default Header;