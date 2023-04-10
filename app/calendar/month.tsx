import { useRef, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

interface WeekProps {
  days?: string[];
  month: any;
}

const Week = ({ days, month }: WeekProps) => {
  const determineFirst = () => {
    const currentDate = month;
    const firstOfMonth = new Date(
      `${currentDate.getMonth() + 1}-1-${currentDate.getFullYear()}`
    );
    return firstOfMonth;
  };
  let theNumberOfDay = 1;

  return (
    <div className="grid grid-cols-7 ">
      {days ? (
        days.map((day, i) => (
          <div key={i} className="">
            <h3 className="text-center border-x border-t">{day}</h3>
            <div className="w-full h-14 border">
              {determineFirst().toString().split(" ")[0].toLowerCase() ===
              day.slice(0, 3).toLowerCase()
                ? determineFirst().toString()
                : ""}
            </div>
          </div>
        ))
      ) : (
        <>
          <div className="w-full h-14 border"></div>
          <div className="w-full h-14 border"></div>
          <div className="w-full h-14 border"></div>
          <div className="w-full h-14 border"></div>
          <div className="w-full h-14 border"></div>
          <div className="w-full h-14 border"></div>
          <div className="w-full h-14 border"></div>
        </>
      )}
    </div>
  );
};

//Function to add or subtract a month from a given date
function addMonths(date: any, months: number) {
  var d = date.getDate();
  date.setMonth(date.getMonth() + +months);
  if (date.getDate() != d) {
    date.setDate(0);
  }
  return date;
}

interface MonthProps {
  shifts: any;
  employees: any;
}

const Month = ({ shifts, employees }: MonthProps) => {
  const [realMonth, setRealMonth] = useState(new Date());
  const [month, setMonth] = useState(
    new Date().toLocaleString("default", { month: "long" })
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

      <Week
        month={realMonth}
        days={[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ]}
      />
      <Week />
      <Week />
      <Week />
    </div>
  );
};
export default Month;
