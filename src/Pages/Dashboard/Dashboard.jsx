import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button/Button";

function Dashboard() {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate("/notes");
  };
  return (
    <>
      <div className="w-full rounded-[4px] boxshadow1 shadow-custom bg-[#FFFFFF] h-[calc(100vh-100px)] px-[64px] py-[44px]">
        <Button text="Open Child Document" onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default Dashboard;
