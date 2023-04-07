"use client";
import { SpinnerCircularFixed } from "spinners-react";

const loading = () => {
  return (
    <div className="w-full flex justify-center">
      <SpinnerCircularFixed
        size={90}
        thickness={180}
        speed={100}
        color="rgba(118, 57, 172, 1)"
        secondaryColor="rgba(0, 0, 0, 0.44)"
      />
    </div>
  );
};
export default loading;
