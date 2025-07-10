import { Suspense, lazy } from "react";
import Loading from "../components/Loading";

const componentMap = {

  "/dashboard": lazy(() => import("../pages/Dashboard")),
    "/notfound": lazy(() => import("../pages/NotFound")),

};

const LazyComponent = ({ path }) => {
  const Component = componentMap[path];
  if (!Component) {
    return <div>Component not found</div>;
  }
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
};

export default LazyComponent;
