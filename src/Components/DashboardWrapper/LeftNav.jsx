import React from "react";
import { Layout } from "antd";
import Sidebar from "../Sidebar/Sidebar";

const { Content, Sider } = Layout;

function LeftNav({ children }) {
  return (
    <Layout className="bg-[transparent]">
      <Sider
        width={40}
        className="pl-[16px] pr-[71px] pt-[16px] pb-[16px] !bg-[transparent] hidden sm:block"
      >
        <Sidebar />
      </Sider>
      <Layout className="bg-[transparent]">
        <Content className="mt-[100px] ml-[30px] mr-[30px] sm:ml-[56px] sm:mr-[71px] mb-0">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default LeftNav;
