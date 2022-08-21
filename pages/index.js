/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Featured from '../view/Featured'
import FoodList from '../view/FoodList'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useState } from "react";
import AddProduct from '../view/AddProduct';
import Add from '../view/Add';


export default function Home({foodList, admin}) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>FoodX</title>
        <meta name="description" content=" Fastest food delivery in town" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet"
          href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <Featured/>
      {admin && <AddProduct setClose={setClose} />}
      <FoodList foodList={foodList}/>
      {!close && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async (ctx) => {

  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      foodList: res.data,
      admin
    }
  }
}

