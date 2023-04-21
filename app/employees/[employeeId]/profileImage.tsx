"use client";

import {
  CldImage,
  CldUploadWidget,
  CldUploadButton,
  cloudinaryLoader,
} from "next-cloudinary";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";

interface Props {
  employee: any;
}

const ProfileImage = ({ employee }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <div>
        {!loading && employee.imgSrc && (
          <CldImage
            placeholder="empty"
            quality={100}
            src={`${employee.imgSrc}`}
            alt={`Profile picture of ${employee.name}`}
            width={200}
            height={200}
          />
        )}
        {loading && (
          <SpinnerCircularFixed
            size={90}
            thickness={180}
            speed={100}
            color="rgba(118, 57, 172, 1)"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
        )}
      </div>

      <CldUploadWidget
        onUpload={async (results: any, widget: any) => {
          setLoading(true);
          widget.close();

          await fetch(`/api/employees/${employee.id}`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              editImgSrc: results.info.public_id,
            }),
          });
          router.refresh();
          setLoading(false);
        }}
        uploadPreset="next-cloudinary-unsigned"
      >
        {({ open }) => {
          function handleOnClick(e: any) {
            e.preventDefault();
            open();
          }

          return (
            <button className="text-center" onClick={handleOnClick}>
              Change profile picture
            </button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};
export default ProfileImage;
