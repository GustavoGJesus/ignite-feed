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
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  );
}

export default App
