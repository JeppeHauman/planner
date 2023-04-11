"use client";
import { useState } from "react";
import Day from "./day";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface WeekProps {
  shifts: any;
  dateInWeek: any;
}

export const Week = ({ shifts, dateInWeek }: WeekProps) => {
  return (
    <div>
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 sm:gap-0 sm:gap-y-6 text-center text-neutral-300">
        <Day
          dayOfWeekProp={1}
          day="Monday"
          shifts={shifts}
          customDate={dateInWeek}
        />
        <Day
          dayOfWeekProp={2}
          day="Tuesday"
          shifts={shifts}
          customDate={dateInWeek}
        />
        <Day
          dayOfWeekProp={3}
          day="Wednesday"
          shifts={shifts}
          customDate={dateInWeek}
        />
        <Day
          dayOfWeekProp={4}
          day="Thursday"
          shifts={shifts}
          customDate={dateInWeek}
        />
        <Day
          dayOfWeekProp={5}
          day="Friday"
          shifts={shifts}
          customDate={dateInWeek}
        />
        <Day
          dayOfWeekProp={6}
          day="Saturday"
          shifts={shifts}
          customDate={dateInWeek}
        />
        <Day
          dayOfWeekProp={7}
          day="Sunday"
          shifts={shifts}
          customDate={dateInWeek}
        />
      </div>
    </div>
  );
};

interface MonthProps {
  shifts: any;
}

//Function to add or subtract a month from a given date
function addMonths(date: any, months: number) {
  var d = date.getDate();
  date.setMonth(date.getMonth() + +months);
  if (date.getDate() != d) {
    date.setDate(0);
  }
  return date;
}

const MonthTwo = ({ shifts }: MonthProps) => {
  const [realMonth, setRealMonth] = useState(new Date());
  const [month, setMonth] = useState(
    new Date().toLocaleString("default", { month: "long" })
  );
  //   const firstOfMonth = new Date(
  //     `${realMonth.getMonth() + 1}-1-${realMonth.getFullYear()}T08:00:00`
  //   );
  const firstOfMonth = new Date(
    realMonth.getFullYear(),
    realMonth.getMonth(),
    1,
    8
  );
  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            setRealMonth(addMonths(realMonth, -1));
            setMonth(
              realMonth.toLocaleString("default", {
                month: "long",
              })
            );
          }}
        >
          <IoIosArrowBack />
        </button>
        <h3 className="text-center text-4xl mb-4 mx-8">{month}</h3>
        <button
          onClick={() => {
            setRealMonth(addMonths(realMonth, 1));
            setMonth(
              realMonth.toLocaleString("default", {
                month: "long",
              })
            );
          }}
        >
          <IoIosArrowForward />
        </button>
      </div>
      <div>
        <Week shifts={shifts} dateInWeek={firstOfMonth} />
        <Week
          shifts={shifts}
          dateInWeek={
            new Date(new Date(firstOfMonth).setDate(firstOfMonth.getDate() + 7))
          }
        />
        <Week
          shifts={shifts}
          dateInWeek={
            new Date(
              new Date(firstOfMonth).setDate(firstOfMonth.getDate() + 14)
            )
          }
        />
        <Week
          shifts={shifts}
          dateInWeek={
            new Date(
              new Date(firstOfMonth).setDate(firstOfMonth.getDate() + 21)
            )
          }
        />
        <Week
          shifts={shifts}
          dateInWeek={
            new Date(
              new Date(firstOfMonth).setDate(firstOfMonth.getDate() + 28)
            )
          }
        />
      </div>
    </div>
  );
};
export default MonthTwo;
