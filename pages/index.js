import React, { useContext, useState, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

import { ChatAppContect } from "@/context/ChatAppContext";
import Chat from "@/component/Chat";
import Register from "@/component/Register";
import { useSelector, useDispatch } from "react-redux";
import { connectWithWalletAction } from "@/redux/actions/action";
export default function Home() {
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.auth);
  const [data, setData] = useState({
    register: false,
  });
  const handle = (key, value) => {
    setData({ ...data, [key]: value });
  };
  useEffect(() => {
    console.log(account);
  }, [account]);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
          }}
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-4xl font-bold text-white">Brand</h2>

              <p className="max-w-xl mt-3 text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                Brand
              </h2>

              <p className="mt-3 text-gray-500 dark:text-gray-300">
                Sign in to access your account
              </p>
            </div>
            {data.register ? (
              <div className="mt-8">
                <h4 className="text-center">Step 1</h4>
                <div className="mt-6">
                  <button className="w-full flex-row px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Connect Wallet
                  </button>
                </div>
                <h4 className="text-center mt-4">Step 2</h4>
                <Register />
              </div>
            ) : (
              <div className="mt-8">
                <div className="mt-6">
                  <button
                    onClick={() => dispatch(connectWithWalletAction())}
                    className="w-full flex-row px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Connect Wallet
                  </button>
                </div>
                <p className="mt-6 text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet?{" "}
                  <span
                    onClick={() => {
                      handle("register", true);
                    }}
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    Sign up
                  </span>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
