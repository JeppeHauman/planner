"use client";

import { BsXSquare } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  employeeName: string;
  shiftId: string;
  timeStart: any;
  timeEnd: any;
}

const Shift = ({ employeeName, timeStart, timeEnd, shiftId }: Props) => {
  const [deleteHover, setDeleteHover] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch(`/api/shifts/${shiftId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(res);

    router.refresh();
  };

  return (
    <div
      onMouseEnter={() => setDeleteHover(true)}
      onMouseLeave={() => setDeleteHover(false)}
      className="justify-between p-4 hover:cursor-pointer hover:bg-opacity-80 bg-purple-600 relative"
    >
      {deleteHover && (
        <button className="absolute top-1 right-2 hover:text-white">
          <BsXSquare onClick={handleDelete} className="stroke-1" />
        </button>
      )}
      <h3>{employeeName}</h3>
      <div>
        <span>{timeStart}</span> - <span>{timeEnd}</span>
      </div>
    </div>
  );
};

export default Shift;
