import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {  QueryClientProvider } from "@tanstack/react-query";
import { getClient } from '../queryClient'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "../scss/index.scss";
import Gnb from "../components/gnb";
import { RecoilRoot } from "recoil";
const Layout: React.FC = () => {
  // Create a client
  const queryClient = getClient()
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <div>
          <Gnb />
          <Suspense fallback={"loading..."}>
            <Outlet />
          </Suspense>
        </div>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default Layout;
