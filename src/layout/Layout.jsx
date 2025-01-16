import { Layout } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import Appfooter from "./footer/footer";

const { Content, Footer } = Layout;

const AppLayout = () => {
  const location = useLocation();
  return (
    <Layout
      style={{
        minHeight: "100dvh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        // overFlow: "hidden",
      }}
    >
      <Layout
        style={{
          maxWidth: "430px",
          width: "100%",
          height: "100dvh",
        }}
      >
        {/* <Layout> */}
        {/* <Content> */}
        <div
          id="detail"
          style={{ height: location?.pathname != "/" ? "88%" : "100%" }}
        >
          <Outlet />
        </div>
        {/* </Content> */}
        {location?.pathname != "/" && (
          <Footer
            style={{
              width: "100%",
              height: "12%",
              padding: "0px",
            }}
          >
            <Appfooter />
          </Footer>
        )}
        {/* </Layout> */}
      </Layout>
    </Layout>
  );
};
export default AppLayout;
