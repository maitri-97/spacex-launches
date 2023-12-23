import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import { LaunchesDataContext } from "../../contexts/LaunchesContext";
import Header from "../../components/Header";
import { useState } from "react";
import { LaunchDataTypes } from "../../interfaces/launches.interface";

const Layout = () => {
  const [data, setData] = useState<LaunchDataTypes[]>([]);

  return (
    <>
      <LaunchesDataContext.Provider
        value={{
          data: data,
          setData: setData,
          originalData: data,
          setOriginalData: setData,
        }}
      >
        <Header />
        <main className="main pb-[30px]">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </LaunchesDataContext.Provider>
    </>
  );
};

export default Layout;
