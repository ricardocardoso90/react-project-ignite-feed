import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.scss';
import { Avatar } from '../Avatar/Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar imgProps="https://github.com/ricardocardoso90.png" />
        <strong>Ricardo Cardoso</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#"> <PencilLine style={{ marginRight: '8px' }} size={20} /> Editar seu perfil</a>
      </footer>
    </aside>
  )
};