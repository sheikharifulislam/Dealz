import React from "react";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { TbCash, TbTruckReturn } from "react-icons/tb";
const DeliveryInfo = () => {
    return (
        <div className="w-[30%] rounded bg-gray-50 py-3 px-2">
            <div className="border-b-2 border-gray-200 pb-2">
                <div className="mb-2 flex items-center justify-between">
                    <h4>Delivery</h4>
                    <AiOutlineInfoCircle />
                </div>
                <div className="mb-2 flex items-start border-b pb-2">
                    <IoLocationOutline size={22} />
                    <div className="flex w-[90%] items-center">
                        <span className="text-sm">
                            Dhaka, Dhaka North, Banani Road No. 12 - 19
                        </span>
                        <button className="text-xs uppercase text-[#1a9cb7]">
                            Change
                        </button>
                    </div>
                </div>
                <div className="t mb-2 flex items-start">
                    <AiOutlineHome size={22} />
                    <div className="ml-1 flex-1">
                        <span className="block text-sm">Home Delivery</span>
                        <small className="block text-[10px]">3-5 days</small>
                    </div>
                    <span className="">$50</span>
                </div>
                <div className="flex items-start">
                    <TbCash size={23} />
                    <span className="ml-1 block text-sm">
                        Cash on Delivery Available
                    </span>
                </div>
            </div>
            <div className="mt-2">
                <div className="flex items-center justify-between">
                    <h4>Services</h4>
                    <AiOutlineInfoCircle />
                </div>
                <div className="mt-1 mb-2 flex items-start">
                    <TbTruckReturn size={28} />
                    <div className="ml-1">
                        <span className="block text-sm">7 Days Returns</span>
                        <small className="block text-[10px]">
                            Change of mind is not applicable
                        </small>
                    </div>
                </div>
                <div className="flex items-center">
                    <MdOutlineSecurity />
                    <span className="ml-1 block text-sm">
                        Warranty not available
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DeliveryInfo;
