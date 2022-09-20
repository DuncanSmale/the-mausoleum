import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Block from "../components/Layout/Block";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <h1 className="inline-block text-4xl ml-4 mb-8 bg-gradient-to-r from-red to-pink bg-clip-text text-transparent font-extrabold">
          Dashboard
        </h1>
        <Block>Test app</Block>
      </div>
    </>
  );
};

export default Home;
