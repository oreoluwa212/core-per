import React from "react";
import Header from "../components/Header";
import { FaAngleDown } from "react-icons/fa";

const ProgressIndicator = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="flex flc items-center">
        <div className="w-10 h-10 border-black border text-black bg-gray-300 flex justify-center items-center rounded-full">
          1
        </div>
        <div className="h-1 bg-gray-300 w-28"></div>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 text-black flex justify-center items-center rounded-full">
          2
        </div>
        <div className="h-1 bg-gray-300 w-28"></div>
      </div>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 text-black flex justify-center items-center rounded-full">
          3
        </div>
      </div>
    </div>
  );
};

const ShippingAddressForm = () => {
  return (
    <form className="space-y-4">
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Street Address</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">
          Country <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div className="flex space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium">
            State/Province <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium">City</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">
          Zip/Postal Code <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-full"
      >
        Next
      </button>
    </form>
  );
};

const OrderSummary = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-sm">
      <h3 className="font-semibold text-lg mb-2">Order Summary</h3>
      <div className="flex w-full justify-between items-center">
        <p className="my-2">1 item in cart</p>
        <FaAngleDown />
      </div>
      <hr />
    </div>
  );
};

const ShipmentInfo = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-sm mt-4">
      <h3 className="font-semibold text-lg mb-2">Shipment Info</h3>
      <div className="flex w-full justify-between items-center">
        <p className="my-2">Product prices including shipping</p>
        <FaAngleDown />
      </div>
      <hr />
    </div>
  );
};

const CheckoutPage = () => {
  return (
    <div className="w-full font-montserrat bg-white text-black">
      <Header />
      <div className="py-[5%] mt-16 w-full flex flex-col justify-between gap-16 lg:px-[5%]">
        <ProgressIndicator />
        <div className="mt-8 px-[5%] lgss:px-0 flex lgss:flex-row flex-col justify-between w-full">
          <div className="flex flex-col lgss:w-[45%]">
            <h2 className="text-2xl font-semibold mb-4">Shipping Address</h2>
            <ShippingAddressForm />
          </div>
          <div className="lgss:w-1/3 mt-8 py-6 space-y-10">
            <OrderSummary />
            <ShipmentInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
