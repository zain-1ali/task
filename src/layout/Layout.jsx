import { Layout } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import Appfooter from "./footer/footer";

const { Content, Footer } = Layout;

const AppLayout = () => {
  const location = useLocation();
  return (
    <Layout
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Layout style={{ maxWidth: "430px", width: "100%", height: "100%" }}>
        <Layout>
          <Content>
            <div id="detail">
              <Outlet />
            </div>
          </Content>
          {location?.pathname != "/" && (
            <Footer
              style={{
                width: "100%",
                height: "82px",
                padding: "0px",
              }}
            >
              <Appfooter />
            </Footer>
          )}
        </Layout>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
