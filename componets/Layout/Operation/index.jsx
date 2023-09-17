import styles from "./style.module.css"


function index() {
  return (
    <div className={styles.container}>

        <h1>Horario de funcionamento</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-asterisk" viewBox="0 0 16 16">
          <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z" />
        </svg>


      <div className={styles.box}>
        <span>Segunda - Sexta</span>
        <span className={styles.time} >08:00 - 20:00</span>
        <span>Sábado</span>
        <span className={styles.time}>11:00 - 23:00</span>
      </div>
    </div>
  )
}

export default index