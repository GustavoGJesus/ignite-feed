import { useState } from 'react';
import Web3 from "web3";

import './global.css'
import styles from './App.module.css'

import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";



const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/GustavoGJesus.png",
      name: "Gustavo Gomes",
      role: "Front-End Engineer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera 👋🏽",
      },
      {
        type: "paragraph",
        content: "Primeiro módulo de react do ignite da Rocketseat",
      },
      {
        type: "link",
        content: '👉🏽 rocketseat.com',
      },
    ],
    publishedAt: new Date("2023-01-19 23:40:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/GustavoGJesus.png",
      name: "Gustavo Gomes",
      role: "Front-End Engineer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galera 👋🏽",
      },
      {
        type: "paragraph",
        content: "Primeiro módulo de react do ignite da Rocketseat",
      },
      {
        type: "link",
        content: '👉🏽 rocketseat.com',
      },
    ],
    publishedAt: new Date("2023-01-19 23:40:00"),
  },
];

function App() {
  const [ login, setLogin ] = useState(false);

  const connectWalletHandler = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
     await window.ethereum.request({ method: "eth_requestAccounts" });
      const web3 = new Web3(window.ethereum);
      console.log("teste");
      setLogin(true);
    } else {
      console.log("connect wallet please");
    }
  };

  return (
    <>
      <Header />

      {login ? (
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map((post) => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              );
            })}
          </main>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: "300px",
            // background: "red",
          }}
        >
          <button
            style={{
              width: "250px",
              padding: "40px",
              borderRadius: "50px",
              cursor: "pointer",
              border: "none",
              outline: "none",
              background: "#00B37E",
              color: "#FFF",
              fontWeight: "700",
              fontSize: "18px",
            }}
            onClick={connectWalletHandler}
          >
            Connect wallet 🦊
          </button>
        </div>
      )}
    </>
  );
}

export default App
