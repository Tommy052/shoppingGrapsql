import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import '../scss/index.scss'
import Gnb from "../components/gnb";
const Layout: React.FC = () => {
  // Create a client
  const queryClient = new QueryClient({
    defaultOptions:{
      queries : {
        cacheTime : 1000 * 60 * 50 * 24,
        staleTime : 1000 * 60,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus : false
      }
    }
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div>
        <Gnb />
        <Suspense fallback={"loading..."}>
          <Outlet />
        </Suspense>
      </div>
    </QueryClientProvider>
  );
};

export default Layout;
