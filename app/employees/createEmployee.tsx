"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HexColorPicker } from "react-colorful";
import { SpinnerCircularFixed } from "spinners-react";
import { CldUploadWidget } from "next-cloudinary";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [colorPicker, setColorPicker] = useState(false);
  const [color, setColor] = useState("#1c00ff");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const router = useRouter();

  const create = async () => {
    setLoading(true);
    await fetch("/api/employees", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        color,
        imgSrc,
      }),
    });

    setName("");
    setEmail("");
    setImgSrc("");

    setColor("#1c00ff");
    setColorPicker(false);

    router.refresh();
    setLoading(false);
  };

  const style = { backgroundColor: color };

  return (
    <div className="mt-3  absolute left-6 top-3">
      <button
        onClick={() => setVisible(!visible)}
        className="border rounded-md font-bold w-fit mx-auto p-2 hover:bg-black hover:bg-opacity-25 mb-6"
      >
        Add a new employee
      </button>

      {visible && (
        <form
          className="flex flex-col gap-4 max-w-xl mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            create();
          }}
        >
          {loading && (
            <div
              className={`w-full flex justify-center bg-inherit items-center mb-2 h-full`}
            >
              <SpinnerCircularFixed
                size={90}
                thickness={180}
                speed={100}
                color="rgba(118, 57, 172, 1)"
                secondaryColor="rgba(0, 0, 0, 0.44)"
              />
            </div>
          )}

          <input
            type="text"
            placeholder="Name"
            value={name}
            className="p-2 text-black rounded-lg"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            className="p-2 text-black rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex gap-2 items-center">
            <p>Pick a color:</p>
            <button
              className="w-6 h-6 rounded-md"
              style={style}
              type="button"
              onClick={() => setColorPicker(!colorPicker)}
            ></button>
          </div>
          {colorPicker && <HexColorPicker color={color} onChange={setColor} />}
          <CldUploadWidget
            onUpload={(results: any) => setImgSrc(results.info.public_id)}
            uploadPreset="next-cloudinary-unsigned"
          >
            {({ open, results }) => {
              function handleOnClick(e: any) {
                e.preventDefault();
                open();
              }

              return (
                <button className="text-left" onClick={handleOnClick}>
                  Choose a profile picture
                </button>
              );
            }}
          </CldUploadWidget>

          <button
            className="border rounded-md font-bold w-fit mx-auto p-2 hover:bg-black hover:bg-opacity-25"
            type="submit"
          >
            Add employee
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateEmployee;
