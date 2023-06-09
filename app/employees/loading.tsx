import { SpinnerCircularFixed } from "spinners-react";

export default function Loading() {
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
}
