import React, { useRef } from "react";
import ImageModal from "./ImageModal";

function ImageCard({ image }) {
  console.log(image, "img");
  const {img,id} = image;
  const imgModalRef = useRef(null);

  const handleImageModal = () => {
    // document.querySelector("#imgModal").showModal();
    imgModalRef.current?.showModal();
  };

  return (
    <>
      <div className="w-full h-full bg-base-100 rounded-lg overflow-hidden hover:scale-[1.02] transition duration-200 cursor-pointer hover:shadow-md hover:shadow-secondary-content">
        <img
          loading={"lazy"}
          className="w-full object-cover min-h-[12em] flex items-center justify-center"
          onClick={handleImageModal}
          src={img}
          alt="img"
        />
      </div>
      <ImageModal imgModalRef={imgModalRef} imageURL={img} />
    </>
  );
}

export default ImageCard;
