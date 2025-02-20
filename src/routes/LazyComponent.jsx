import { Suspense, lazy } from "react";
import Loading from "../components/Loading";
// import Loading from "../components/loading/Loading";

const componentMap = {
  // home
  "/": lazy(() => import("../pages/Home")),
  "/streak": lazy(() => import("../pages/Streak")),
  "/invite": lazy(() => import("../pages/Invite")),
  "/thehive": lazy(() => import("../pages/TheHive")),
  "/you": lazy(() => import("../pages/You")),
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
