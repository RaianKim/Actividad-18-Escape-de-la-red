import styles from './style.module.css';

const ComponenteHome= ({isFading}) => {
    return (
      <div className={isFading ? `${styles.fade} ${styles.fadeOut}` : styles.fade}>
        <h2>Este es el Componente A</h2>
        <p>Aquí está el contenido original.</p>
      </div>
    );
  };
  
  export default ComponenteHome;