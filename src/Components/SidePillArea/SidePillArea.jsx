import React, { useEffect, useRef, useState } from "react";
import AddNoteIcon from "../../assets/icons/AddNoteIcon.png";
import AddNotePopup from "../AddNotePopup/AddNotePopup";
import { Button } from "antd";

const SidePillArea = () => {
  const containerRef = useRef(null); // Ref for container
  const divRef = useRef(null); // ref for draggable div
  const [isDragging, setIsDragging] = useState(false); // track dragging state
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 }); // initial click position
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 }); // current position of the div

  const handleMouseDown = (event) => {
    setIsDragging(true);
    const clientX =
      event.type === "touchstart" ? event.touches[0].clientX : event.clientX;
    const clientY =
      event.type === "touchstart" ? event.touches[0].clientY : event.clientY;

    const rect = divRef.current.getBoundingClientRect();
    setStartPosition({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const clientX =
      event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
    const clientY =
      event.type === "touchmove" ? event.touches[0].clientY : event.clientY;

    const containerRect = containerRef.current.getBoundingClientRect();
    const divRect = divRef.current.getBoundingClientRect();

    // calc new positions
    let newX = clientX - containerRect.left - startPosition.x;
    let newY = clientY - containerRect.top - startPosition.y;

    // constrain within the container
    newX = Math.max(0, Math.min(newX, containerRect.width - divRect.width));
    newY = Math.max(0, Math.min(newY, containerRect.height - divRect.height));

    setCurrentPosition({ x: newX, y: newY });

    // moving the div manually
    const div = divRef.current;
    if (div) {
      div.style.left = `${newX}px`;
      div.style.top = `${newY}px`;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = containerRef.current;
    const draggableDiv = divRef.current;

    if (container && draggableDiv) {
      const containerHeight = container.offsetHeight;
      const divHeight = draggableDiv.offsetHeight;

      setCurrentPosition({
        x: 0,
        y: (containerHeight - divHeight) / 2,
      });
      draggableDiv.style.left = "0px";
      draggableDiv.style.top = `${(containerHeight - divHeight) / 2}px`;
    }
  }, []);

  useEffect(() => {
    // global mouse/touch events
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      // clean up events on unmount
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, startPosition, currentPosition]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 right-[-27px] h-[calc(100vh-100px)] w-[54px] overflow-hidden"
    >
      <div
        ref={divRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        className={`absolute !left-[7px] !right-[7px] top-[${
          currentPosition.y || "50%"
        }] cursor-move overflow-hidden bg-[#FFFFFF] rounded-[28px] h-[240px] min-h-[150px] w-[40px] shadow-custom flex justify-center items-start pt-[16px]`}
      >
        <AddNotePopup>
          <Button
            type="primary"
            className="!bg-[transparent] outline-none shadow-none p-0 rounded-md"
          >
            <img
              src={AddNoteIcon}
              className="cursor-pointer w-[24px] h-[24px]"
              alt="add-note-icon"
            />
          </Button>
        </AddNotePopup>
      </div>
    </div>
  );
};

export default SidePillArea;
