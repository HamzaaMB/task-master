import React from "react";
import editPen from "../../assets/editPen.svg";
import deleteIcon from "../../assets/deleteIcon.svg";

interface EditOrDeleteProps {
  onDelete: () => void;
}

const EditOrDelete = ({ onDelete }: EditOrDeleteProps) => {

  return (
    <section className="mr-2 flex flex-row items-center ml-7">
      <button>
        <img
          className="w-5 h-5 mr-2 hover:h-6 hover:w-6 transition-all duration-300 cursor-pointer "
          src={editPen}
          alt={"pencil icon"}
        />
      </button>

      <button onClick={onDelete}>
        <img
          className="w-6 h-6 hover:h-7 hover:w-7 transition-all duration-300 cursor-pointer"
          src={deleteIcon}
          alt={"bin icon"}
        />
      </button>
    </section>
  );
};
export default EditOrDelete;
