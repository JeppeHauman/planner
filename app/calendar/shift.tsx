"use client";

import { BsXSquare, BsCheckLg, BsXLg, BsX } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SpinnerCircularFixed } from "spinners-react";

interface Props {
  employeeName: string;
  shiftId: string;
  timeStart: string;
  timeEnd: string;
  color: string;
}

const Shift = ({ employeeName, timeStart, timeEnd, shiftId, color }: Props) => {
  const [deleteHover, setDeleteHover] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const style = {
    backgroundColor: color,
  };
  const handleDelete = async () => {
    setDeleteModal(false);
    setLoading(true);
    const res = await fetch(`/api/shifts/${shiftId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });

    router.refresh();
    setLoading(false);
  };

  return (
    <div
      onMouseEnter={() => setDeleteHover(true)}
      onMouseLeave={() => setDeleteHover(false)}
      className="justify-between p-4 hover:bg-opacity-80 border-b relative"
    >
      <div
        style={style}
        className="h-5 w-5 rounded-full left-4 -translate-y-1/2 top-1/2 absolute"
      ></div>
      {loading && (
        <div
          className={`w-full flex justify-center bg-inherit items-center mb-2 absolute top-0 left-0 h-full`}
        >
          <SpinnerCircularFixed
            size={40}
            thickness={180}
            speed={100}
            color="rgba(250, 250, 250, 1)"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
        </div>
      )}
      {deleteHover && (
        <button className="absolute top-1 right-2 hover:text-white">
          <BsXSquare
            onClick={() => setDeleteModal(true)}
            className="stroke-1"
          />
        </button>
      )}
      {deleteModal && (
        <div className="absolute w-full h-full top-0 left-0 bg-black z-1000">
          <h4 className="mb-4 text-xl">Are you sure?</h4>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleDelete}
              className="h-8 w-14 hover border rounded-sm bg-neutral-500"
            >
              <FiCheck size="20" className="mx-auto" />
            </button>
            <button
              onClick={() => setDeleteModal(false)}
              className="h-8 w-14 hover border rounded-sm bg-neutral-500"
            >
              <BsXLg className="stroke-[.5] mx-auto" />
            </button>
          </div>
        </div>
      )}
      <h3>{employeeName}</h3>
      <div>
        <span>{timeStart}</span> - <span>{timeEnd}</span>
      </div>
    </div>
  );
};

export default Shift;
