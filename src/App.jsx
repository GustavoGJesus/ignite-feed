import './global.css'
import styles from './App.module.css'

import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";


function App() {
  return (
   <>
    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        posts
      </main>
    </div>
   </>
  )
}

export default App
