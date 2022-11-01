import React, { Suspense } from "react";
import { RouteObject, useRoutes } from "react-router-dom";

const Home = React.lazy(() => import("@nx-react/home"));
const Cart = React.lazy(() => import("@nx-react/cart"));
const Products = React.lazy(() => import("@nx-react/products"));

const routeList: RouteObject[] = [
  {
    path: "/products",
    element: <Suspense><Products /></Suspense>,
  },
  {
    path: "/cart",
    element: <Suspense><Cart /></Suspense>,
  },
  {
    path: "/",
    element: <Suspense><Home /></Suspense>,
  },
  {
    path: "**",
    element: <Suspense>
      <Home />
    </Suspense>,
  },
];

export default function Routes() {
  const routes = useRoutes(routeList);
  return routes;
}
