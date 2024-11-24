import React from "react";
import { Button as AntButton } from "antd";

export const Button = ({ text, onButtonClick, htmlType }) => {
  return (
    <AntButton
      type="primary"
      htmlType={htmlType || ""}
      onClick={onButtonClick}
      className="font-sfpro font-medium bg-[#54A268] text-[#FFFFFF] text-[15px] rounded-[21px] h-[42px] px-[32px] py-[12px] hover:!bg-[#3d854f] hover:!text-[#FFFFFF] hover:!border-[#3d854f]"
    >
      {text}
    </AntButton>
  );
};
