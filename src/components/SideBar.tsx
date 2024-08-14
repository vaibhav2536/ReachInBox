import { useState } from "react";
import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import logo from '../assets/logo.svg';

function SideBar({ onMenuItemClick }) {
  const [selectedItem, setSelectedItem] = useState('/');

  const handleMenuItemClick = (path) => {
    setSelectedItem(path);
    onMenuItemClick(path);
  };

  return (
    <div className="dark:bg-[#101113] bg-white h-screen w-[70px] flex flex-col justify-between items-center py-4 px-2 border-r border-[#E0E0E0] dark:border-[#343A40] fixed left-0 top-0 z-10">
      <div className="flex flex-col items-center">
        <img
          src={logo}
          className="w-[30px] h-[36px] mb-6"
          alt="Logo"
        />
        <div className="text-[#AEAEAE] text-2xl space-y-6">
          <div
            className={`cursor-pointer ${selectedItem === '/' ? 'bg-gray-600 rounded-md' : ''}`}
            onClick={() => handleMenuItemClick('/')}
          >
            <RiHome5Fill className="w-8 h-8" />
          </div>
          <div
            className={`cursor-pointer ${selectedItem === '/search' ? 'bg-gray-600 rounded-md' : ''}`}
            onClick={() => handleMenuItemClick('/search')}
          >
            <RiUserSearchLine className="w-8 h-8" />
          </div>
          <div
            className={`cursor-pointer ${selectedItem === '/mail' ? 'bg-gray-600 rounded-md' : ''}`}
            onClick={() => handleMenuItemClick('/mail')}
          >
            <RiMailFill className="w-8 h-8" />
          </div>
          <div
            className={`cursor-pointer ${selectedItem === '/send' ? 'bg-gray-600 rounded-md' : ''}`}
            onClick={() => handleMenuItemClick('/send')}
          >
            <IoIosSend className="w-8 h-8" />
          </div>
          <div
            className={`cursor-pointer ${selectedItem === '/stack' ? 'bg-gray-600 rounded-md' : ''}`}
            onClick={() => handleMenuItemClick('/stack')}
          >
            <SiElasticstack className="w-8 h-8" />
          </div>
          <div
            className={`cursor-pointer ${selectedItem === '/inbox' ? 'bg-gray-600 rounded-md' : ''}`}
            onClick={() => handleMenuItemClick('/inbox')}
          >
            <FaInbox className="w-8 h-8" />
          </div>
          <div
            className={`cursor-pointer ${selectedItem === '/stacks' ? 'bg-gray-600 rounded-md' : ''}`}
            onClick={() => handleMenuItemClick('/stacks')}
          >
            <IoStatsChartSharp className="w-7 h-7" />
          </div>
        </div>
      </div>
      <div
      className="text-white rounded-full flex items-center justify-center mt-4"
  style={{ width: '48px', height: '56px', backgroundColor: '#006400' }} // Dark Green Color
>
        VD      
      </div>
    </div>
  );
}

export default SideBar;
