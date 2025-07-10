import { Layout, Menu } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";

const {  Sider, Content } = Layout;

const AppLayout = () => {
  const location = useLocation();

  return (
    <Layout style={{ maxHeight: "100vh" }}>
<Sider>
     <Sidebar/>
</Sider>
      <Layout>
        {/* Header */}
  <Header/>

        {/* Main content */}
        <Content 
        style={{ marginLeft: "30px", padding: 24, background: "#FAFCFFf" }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
