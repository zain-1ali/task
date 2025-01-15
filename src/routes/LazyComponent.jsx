import { Suspense, lazy } from "react";
// import Loading from "../components/loading/Loading";

const componentMap = {
  // home
  "/": lazy(() => import("../pages/Home")),
  "/streak": lazy(() => import("../pages/Streak")),

  // driver stack
  //   "/driver": lazy(() => import("../pages/driver/DriverStack")),
  //   "/driverDetail/:id": lazy(() => import("../pages/driver/driverDetail")),
  //   "/editDriverDetail/:id": lazy(() =>
  //     import("../pages/driver/editDriverDetail")
  //   ),
};

const LazyComponent = ({ path }) => {
  const Component = componentMap[path];
  if (!Component) {
    return <div>Component not found</div>;
  }
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default LazyComponent;
