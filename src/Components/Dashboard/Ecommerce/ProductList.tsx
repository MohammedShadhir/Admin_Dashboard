import React, { useState } from "react";
import productItems from "../../../data/product";
import DropDown from "../../DropDown";
import PaginationsComponent from "../../PaginationsComponent";

const ProductList = () => {
  return (
    <>
      <div className="relative rounded-lg bg-white m-4 overflow-x-auto shadow-md sm:rounded-lg p-4">
        <div className="flex justify-start items-center mt-2">
          <h1 className="capitalize text-[17px] font-[600] text-[#403e57]">
            best selling products
          </h1>
        </div>
        <div className="w-full  grid grid-cols-1 gap-4 sm:grid-cols-4 mt-4">
          <div className="w-full col-span-1">
            <DropDown title="show by" items={["12 row", "24 Row", "36 Row"]} />
          </div>
          <div>
            <DropDown
              title="show by"
              items={["mans", "Womans", "Kids", "Accessory"]}
            />
          </div>
          <div>
            <DropDown
              title="show by"
              items={["ecstasy", "Freeland", "Rongdhonu"]}
            />
          </div>
          <div className="mt-2">
            <h1 className="text-[12px] font-[700] text-[#403e57] uppercase ">
              search by
            </h1>
            <input
              type="text"
              placeholder="Search"
              className="mt-2 inline-flex justify-start w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-4">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#2b77e5] dark:text-white">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    Uid
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                category
              </th>
              <th scope="col" className="px-6 py-3">
                brand
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                stock
              </th>
              <th scope="col" className="px-6 py-3">
                rating
              </th>

              <th scope="col" className="px-6 py-3">
                sales
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {productItems.map((product) => (
              <tr className="bg-white border-b dark:bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-300">
                <th className="w-6 p-4">
                  <div className="flex justify-center items-center">
                    <input
                      id="checkbox-table-search-2"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />

                    <span className="ml-2">{product.uid}</span>
                  </div>
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-500"
                >
                  {product.product}
                </th>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.brand}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">{product.stock}</td>
                <td className="px-6 py-4">{product.rating}</td>
                <td className="px-6 py-4">{product.sales}</td>

                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <div>
            <h1>showing 12 of 60 results</h1>
          </div>
          <div>
            <PaginationsComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
