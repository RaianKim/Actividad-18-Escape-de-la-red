import styles from '../ComponenteHome/style.module.css';

const ComponentePregunta1 = ({ isFadingIn }) => {
  return (
    <div className={isFadingIn ? `${styles.fadeIn} ${styles.fadeInActive}` : styles.fadeIn}>
      <h2>Este es el Componente B</h2>
      <p>¡Has cambiado al Componente B!</p>
    </div>
  );
};

export default ComponentePregunta1;