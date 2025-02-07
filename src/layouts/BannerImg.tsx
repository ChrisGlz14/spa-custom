import styles from "./Banner.module.css"
export const BannerImg = () => {
  return (
    <div className={styles.hero_banner}>
        <div className={styles.overlay}>
            <h1 className="title">Bienvenidos a la Tienda!</h1>
            <p className="pagraph">La mejor ropa de todo Santa Fe</p>
            <img src="src\assets\bg-img\backimg.jpg" alt="imagen1"/>
        </div>
    </div>
  )
}
