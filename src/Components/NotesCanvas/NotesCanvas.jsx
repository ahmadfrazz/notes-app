import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNote } from "../../Redux/Slices/notesSlice";

const NotesCanvas = () => {
  const gapY = 30;
  const dispatch = useDispatch();
  const items = useSelector((state) => state?.notes?.allNotes);
  const containerRef = useRef(null);

  const [positions, setPositions] = useState(() => {
    // const gapY = 40;
    const initialPositions = {};
    items?.forEach((item, index) => {
      initialPositions[item?.id] = {
        x: item?.posX || 0,
        y: item?.posY || index * gapY,
      };
    });
    return initialPositions;
  });

  const [dragging, setDragging] = useState(null); // tracking which div is dragging
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event, id) => {
    setDragging(id);

    const rect = event.target.getBoundingClientRect();
    setStartPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleTouchStart = (event, id) => {
    const touch = event.touches[0];
    const rect = event.target.getBoundingClientRect();
    setDragging(id);
    setStartPosition({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    });
  };

  const handleMove = (event) => {
    if (!dragging) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let newX, newY;

    if (event.type === "mousemove") {
      newX = event.clientX - containerRect.left - startPosition.x;
      newY = event.clientY - containerRect.top - startPosition.y;
    } else if (event.type === "touchmove") {
      const touch = event.touches[0];
      newX = touch.clientX - containerRect.left - startPosition.x;
      newY = touch.clientY - containerRect.top - startPosition.y;
    }

    // dragging inside container
    const draggableRect = document
      .getElementById(dragging)
      ?.getBoundingClientRect();
    if (draggableRect) {
      newX = Math.max(
        0,
        Math.min(newX, containerRect.width - draggableRect.width)
      );
      newY = Math.max(
        0,
        Math.min(newY, containerRect.height - draggableRect.height)
      );
    }

    setPositions((prev) => ({
      ...prev,
      [dragging]: { x: newX, y: newY },
    }));
  };

  const latestPositions = useRef(positions);

  useEffect(() => {
    latestPositions.current = positions;
  }, [positions]);

  const handleMouseUp = () => {
    if (dragging) {
      const currentPosition = latestPositions.current[dragging];

      let newObj = {
        ...items?.find((item) => item?.id === dragging),
        posX: currentPosition.x,
        posY: currentPosition.y,
      };
      dispatch(updateNote(newObj));
    }
    setDragging(null);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleMove);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [dragging, startPosition]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 h-full w-full overflow-auto"
    >
      {items?.map((item) => {
        const position = positions[item?.id] || {
          x: 0,
          y: items?.findIndex((i) => i?.id === item?.id) * gapY,
        };

        return (
          <div
            key={item?.id}
            id={item?.id}
            style={{
              left: `${position.x + 10}px`,
              top: `${position.y + 10}px`,
            }}
            onMouseDown={(e) => handleMouseDown(e, item?.id)}
            onTouchStart={(e) => handleTouchStart(e, item?.id)}
            className="draggable-note cursor-move shadow-note absolute w-[131px] h-[125px] opacity-95 bg-[#F7E49C] rotate-[-10deg] p-[12px]"
          >
            <span className="line-clamp-4 font-sfpro text-[13px] sm:text-[16px] opacity-100 text-[#2B251C]">
              {item?.note}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default NotesCanvas;
