import React from "react";
import MainLayout from "./MainLayout";

const ViewData = () => {
  const people = [
    {
      name: "Lindsay Walton",
      title: "Front-end Developer",
      email: "lindsay.walton@example.com",
      role: "Member",
    },
  ];
  return (
    <MainLayout pages={"table"}>
      <div className="px-4 sm:px-6 lg:px-8 mt-20 ">
        <div className="sm:flex sm:items-center ">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-bold leading-6 text-gray-900">
              Client: 15196 - {"manoj h mehata (huf)".toUpperCase()}
            </h1>
          </div>
        </div>

        <div className="sm:flex sm:items-center mt-16 text-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-thin text-gray-900">
              {"balance is ".toUpperCase()}{" "}
              <strong className="text-green-600">17033206</strong>{" "}
              {"credit".toUpperCase()}
            </h1>
          </div>
        </div>
        <div className="flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0"
                    >
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email} className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {person.title}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                        {person.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <h1 className="text-green-600 font-bold text-lg">Total</h1>
          <h1 className="text-green-600 font-bold text-lg">138343792.2</h1>
        </div>
      </div>
      <hr className="mt-10 bg-slate-800" />
      <div className="px-4 sm:px-6 lg:px-8 mt-16 ">
        <div className="sm:flex sm:items-center ">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-bold leading-6 text-gray-900">
              STOCK HOLDINGS
            </h1>
          </div>
        </div>

        <div className="sm:flex sm:items-center mt-14 text-left">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-medium text-gray-900">
              Stock: {"best agro".toUpperCase()}
            </h1>
          </div>
        </div>
        <div className="flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Client Code
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Client Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Script
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-0"
                    >
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email} className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {person.title}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                        {person.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <h1 className="text-green-600 font-bold text-lg">Total</h1>
          <h1 className="text-green-600 font-bold text-lg">138343792.2</h1>
        </div>
      </div>
    </MainLayout>
  );
};

export default ViewData;
