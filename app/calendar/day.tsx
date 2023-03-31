"use client";
import Shift from "./shift";

interface Props {
  day: string;
}

const Day = ({ day }: Props) => {
  return (
    <div className="hover:bg-neutral-700 bg-neutral-800 border-neutral-600 border-2">
      <h2 className="border-b text-2xl py-3">Tuesday</h2>
      <Shift employeeName="asd" timeStart={"asd"} timeEnd={"asd"} />
    </div>
  );
};

export default Day;
