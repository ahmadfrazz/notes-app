import React from "react";
import TopRibbon from "../../assets/icons/TopRibbon.svg";
import SideNoteIcons from "../../assets/icons/SideNoteIcons.svg";
import SidePillArea from "../../Components/SidePillArea/SidePillArea";
import { useNavigate } from "react-router-dom";
import NotesCanvas from "../../Components/NotesCanvas/NotesCanvas";

function Notes() {
  const navigate = useNavigate();
  const onBackClick = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <div
        onClick={onBackClick}
        className="cursor-pointer max-w-[calc(100%-20px)] mx-auto rounded-tl-[4px] rounded-tr-[4px] mt-[-20px] boxshadow1 shadow-custom bg-[#FFFFFF] h-[20px]"
      ></div>
      <div className="relative">
        <div className="relative w-full rounded-[4px] boxshadow1 shadow-custom bg-[#FFFFFF] h-[calc(100vh-100px)] px-[10px] py-[45px]">
          <img
            className="absolute top-[-4px] left-[36px]"
            src={TopRibbon}
            alt="ribbon"
          />
          <img
            className="absolute top-[20px] left-[-8px]"
            src={SideNoteIcons}
            alt="Side-Note-Icons"
          />
          <div>
            <NotesCanvas />
          </div>
        </div>
        <SidePillArea />
      </div>
    </>
  );
}

export default Notes;
