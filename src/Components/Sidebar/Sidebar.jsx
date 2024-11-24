import React from "react";
import NoteIcon from "../../assets/icons/NoteIcon.png";

function Sidebar() {
  return (
    <>
      <div
        className={`flex flex-col justify-between overflow-auto h-[100vh] fixed bottom-0 w-[40] pl-[16px] pr-[16px] pt-[16px] pb-[16px]`}
      >
        <div className="overflow-hidden bg-[#FFFFFF] rounded-[28px] h-[488px] min-h-[400px] w-[40px] shadow-custom flex justify-center items-start pt-[16px]">
          <img src={NoteIcon} alt="note-icon" />
        </div>
        <div className="overflow-hidden bg-[#FFFFFF] rounded-[28px] h-[40px] w-[40px] shadow-custom"></div>
      </div>
    </>
  );
}

export default Sidebar;
