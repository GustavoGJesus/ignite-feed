import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/GustavoGJesus.png" hasBorder={false}/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Gustavo Gomes</strong>
                     <time title="28 de novembro às 1:32" dateTime="2022-11-28 1:31:00">Cerca de 1hr atrás</time>
                </div>

                <button title='Deletar comentário'>
                    <Trash size={24}/>
                </button>
            </header>
            <p>Muito bom!</p>
        </div>

        <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}