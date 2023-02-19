import React, { useState } from "react";

const Input = ({ label, name, handle, value, placeholder, type }) => (
  <div className="mt-3">
    <label
      for={name}
      class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => handle(name, e.target.value)}
      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
    />
  </div>
);

function Register() {
  const [data, setData] = useState({
    userName: "",
    email: "",
    fName: "",
    lName: "",
    birthDate: "",
  });
  const handle = (name, value) => {
    setData({ ...data, [name]: value });
  };
  return (
    <>
      <form>
        <Input
          type={"text"}
          handle={handle}
          name={"userName"}
          label={"UserName"}
          value={data.userName}
          placeholder={"example"}
        />
        <Input
          type={"email"}
          handle={handle}
          name={"email"}
          label={"email"}
          value={data.email}
          placeholder={"example@email.com"}
        />
        <Input
          type={"text"}
          handle={handle}
          name={"fName"}
          label={"First Name"}
          value={data.fName}
          placeholder={"example"}
        />
        <Input
          type={"text"}
          handle={handle}
          name={"lName"}
          label={"Last Name"}
          value={data.lName}
          placeholder={"example"}
        />

        <div class="mt-6">
          <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            Sign in
          </button>
        </div>
      </form>
    </>
  );
}

export default Register;
