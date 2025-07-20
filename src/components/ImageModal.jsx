import React from "react";

function ImageModal({imageURL,imgModalRef}) {
    
    
  return (
    <dialog ref={imgModalRef} className="modal">
      <div className="modal-box w-10/12 bg-base-300 max-w-7xl max-h-[100%] h-11/12">
        <form method="dialog" className="pb-5">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <img src={imageURL} className="w-[95%] object-cover mx-auto rounded-lg" alt="img" />
      </div>
    </dialog>
  );
}

export default ImageModal;
