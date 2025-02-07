import styles from "./Banner.module.css"
export const BannerImg = () => {
  return (
    <div className={styles.hero_banner}>
        <div className={styles.overlay}>
              <div className={styles.textBox}>
                <h1 className={styles.title}>Bienvenidos a la Tienda!</h1>
                <p className={styles.paragraph}>La mejor ropa de todo Santa Fe</p>
              </div>
        </div>
    </div>
  )
}
