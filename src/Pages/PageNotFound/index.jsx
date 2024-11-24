import React from "react";
import { Result } from "antd";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/Button/Button";

function PageNotFound() {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="grid content-center justify-items-center h-[100vh]">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited doesn't exist or some other error occured."
          extra={<Button text="Back Home" onButtonClick={onButtonClick} />}
        />
      </div>
    </>
  );
}

export default PageNotFound;
