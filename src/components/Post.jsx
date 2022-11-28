import { Comment } from './Comment';
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/GustavoGJesus.png"
          />
          <div className={styles.authorInfo}>
            <strong>Gustavo Gomes</strong>
            <span>Front-End Engineer</span>
          </div>
        </div>

        <time title="28 de novembro às 1:32" dateTime="2022-11-28 1:31:00">
          Públicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 👋🏽</p>
        <p>Primeiro módulo de react do ignite da Rocketseat</p>
        <p>
          👉🏽 <a href="">rocketseat.com</a>
        </p>
        <p>
          <a href=""> #reactjs</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}