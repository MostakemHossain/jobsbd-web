"use client";
import img from "@/assets/candidate-dashboard/candidate-default.png";
import CircularProgressBar from "@/components/candidate-dashboard/circular-progress-bar";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { MdOutlineCreateNewFolder, MdOutlineDashboard } from "react-icons/md";
import { RiListSettingsLine } from "react-icons/ri";
import Divider from "../ui/Divider";

const AdminDashboardNavbar: React.FC = () => {
  const navLinks = [
    {
      label: "Dashboard",
      icon: <MdOutlineDashboard size={25} />,
      href: "/candidate-dashboard",
    },
    {
      label: "Profile",
      icon: <CgProfile size={25} />,
      href: "/candidate-profile",
    },
    {
      label: "Create Industry",
      icon: <MdOutlineCreateNewFolder size={25} />,
      href: "/admin-dashboard/create-industry",
    },
    {
      label: "Create Department",
      icon: <MdOutlineCreateNewFolder size={25} />,
      href: "/admin-dashboard/create-department",
    },

    {
      label: "Setting",
      icon: <RiListSettingsLine size={25} />,
      href: "/admin-dashboard/admin-change-password",
    },
    {
      label: "Logout",
      icon: <CiLogout size={25} />,
      href: "/candidate-dashboard",
    },
  ];
  return (
    <>
      <div className="bg-white lg:w-[316px] shadow-md lg:min-h-screen rounded z-10">
        <div className="flex flex-row lg:flex-col items-center gap-5  sticky lg:static top-14 bg-white lg:bg-transparent p-5 lg:p-0 border-b lg:border-b-0 shadow-md lg:shadow-none">
          {/* profile picture image */}
          <div className="relative flex items-center justify-center">
            {/* Circular Progress Bar */}
            <CircularProgressBar />
            {/* Centered Image */}
            <Image
              alt="profile default image"
              src={img}
              className="w-[60px] h-[60px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          {/* user Name */}
          <h3 className="text-xl font-bold text-center py-5">User Name</h3>
        </div>
        <Divider />
        <ul className="mt-2 grid grid-cols-2 lg:grid-cols-1 gap-2">
          {navLinks.map((link, index) => (
            <li key={index} className="border lg:border-none p-2 lg:p-0">
              <Link
                href={link.href}
                className="flex items-center text-sm lg:text-base gap-3  p-2"
              >
                <p className="bg-white p-2 rounded-full shadow-xl">
                  {link.icon}
                </p>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdminDashboardNavbar;
