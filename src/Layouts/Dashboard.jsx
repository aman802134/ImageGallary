import React from "react";
import ProfileIMg from "/images/DashboardProfile.avif";
import UploadedItemTotalCard from "../components/UploadedItemTotalCard";
import Uploader from "../components/Uploader";
const Dashboard = () => {
  return (
    <>
      <main className="w-full h-full overflow-x-hidden space-y-1 pb-2">
        <header className="w-full py-3 px-10 flex justify-between items-center Dash_nav_Shadow">
          <div>
            <a
              href="#Logo"
              className="font-sans font-bold text-2xl tracking-wider"
            >
              PictureWorld
            </a>
          </div>
          <div>
            <div className="flex justify-center items-center space-x-1">
              <div className="w-10 h-10 rounded-full flex justify-center items-center">
                <i className="bi bi-bell text-xl cursor-pointer"></i>
              </div>
              <div className="w-12 h-12  rounded-full">
                <img
                  src={ProfileIMg}
                  alt=""
                  className="w-full h-full rounded-full bg-center bg-cover bg-no-repeat cursor-pointer"
                />
              </div>
            </div>
          </div>
        </header>
        <section className="dashboard-grid w-full h-[550px] max-h-[540px]">
          <div className="w-full h-full  ">
            <aside className="w-full h-full flex flex-col justify-between items-start py-3 px-2 Dash_nav_Shadow">
              <ul className=" w-full h-full flex flex-col space-y-8">
                <li className="w-full flex justify-start items-center px-2 py-2 space-x-3  shadow-md hover:shadow-sm hover:transition-all rounded-md cursor-pointer">
                  <i className="bi bi-grid text-xl"></i>
                  <h2 className="font-roboto font-normal text-normal">Dashboard</h2>
                </li>
                <li className="w-full flex justify-start items-center px-2 py-2 space-x-3  shadow-md hover:shadow-sm hover:transition-all rounded-md cursor-pointer">
                  <i className="bi bi-cloud-arrow-up text-xl"></i>
                  <h2 className="font-roboto font-normal text-normal">All uploads</h2>
                </li>
                <li className="w-full flex justify-start items-center px-2 py-2 space-x-3  shadow-md hover:shadow-sm hover:transition-all rounded-md cursor-pointer">
                  <i className="bi bi-collection text-xl"></i>
                  <h2 className="font-roboto font-normal text-normal">Collections</h2>
                </li>
                <li className="w-full flex justify-start items-center px-2 py-2 space-x-3  shadow-md hover:shadow-sm hover:transition-all rounded-md cursor-pointer">
                  <i className="bi bi-bar-chart-line text-xl"></i>
                  <h2 className="font-roboto font-normal text-normal">statistics</h2>
                </li>
                <li className="w-full flex justify-start items-center px-2 py-2 space-x-3  shadow-md hover:shadow-sm hover:transition-all rounded-md  cursor-pointer">
                  <i className="bi bi-gear text-xl"></i>
                  <h2 className="font-roboto font-normal text-normal">setting</h2>
                </li>
              </ul>
              <div className="w-full">
                <div className="w-full h-full flex justify-start items-center space-x-3 cursor-pointer px-2 py-2">
                 <i class="bi bi-box-arrow-right text-xl"></i>
                  <a href="#" className="font-roboto font-normal text-normal">Logout</a>
                </div>
              </div>
            </aside>
          </div>
            <div className="w-full h-full overflow-x-hidden overflow-y-scroll">
              <div className="w-full h-full flex justify-center items-center">
                  <Uploader/>
              </div>
            </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
