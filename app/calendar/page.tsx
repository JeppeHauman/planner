"use client";

import Link from "next/link";
import Shift from "./shift";
import dayjs from "dayjs";
import "dayjs/locale/da";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { useState } from "react";

const Day = () => {
  return (
    <div className="hover:bg-neutral-700 bg-neutral-800 border-neutral-600 border-2">
      <h2 className="border-b text-2xl py-3">Tuesday</h2>
    </div>
  );
};

export default function Calendar() {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.utc();
  const [addIsVisible, setAddIsVisible] = useState(false);

  return (
    <div className="h-[60vh] w-full grid grid-cols-7 text-center text-neutral-300">
      <div className="hover:bg-neutral-700 border-neutral-600 border-2">
        <h2 className="border-b text-2xl py-3">Monday</h2>
        <Shift
          employeeName="Nima"
          timeStart={dayjs().hour(8).minute(0).second(0).format("HH:mm")}
          timeEnd={dayjs().hour(16).minute(0).second(0).format("HH:mm")}
        />
        <Shift
          employeeName="Nima"
          timeStart={dayjs().hour(8).minute(0).second(0).format("HH:mm")}
          timeEnd={dayjs().hour(16).minute(0).second(0).format("HH:mm")}
        />
      </div>
      <div className="hover:bg-neutral-700 bg-neutral-800 border-neutral-600 border-2">
        <h2 className="border-b text-2xl py-3">Tuesday</h2>
      </div>
      <div className="hover:bg-neutral-700 border-neutral-600 border-2">
        <h2 className="border-b text-2xl py-3">Wednesday</h2>
      </div>
      <div className="hover:bg-neutral-700 bg-neutral-800 border-neutral-600 border-2">
        <h2 className="border-b text-2xl py-3">Thursday</h2>
      </div>
      <div className="hover:bg-neutral-700 border-neutral-600 border-2">
        <h2 className="border-b text-2xl py-3">Friday</h2>
      </div>
      <div className="hover:bg-neutral-700 bg-neutral-800 border-neutral-600 border-2">
        <h2 className="border-b text-2xl py-3">Saturday</h2>
      </div>
      <div className="hover:bg-neutral-700 border-neutral-600 border-2">
        <h2 className="border-b text-2xl py-3">Sunday</h2>
      </div>
    </div>
  );
}
