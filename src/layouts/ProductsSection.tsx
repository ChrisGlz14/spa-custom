import { NavLink } from "react-router-dom";
import { getCategories } from "../services/API/productService"
import { CategoryResponse }  from "../services/API/productService";
import { useState, useEffect } from "react";
import styles from "../layouts/ProductSection.module.css"


const ProductsSection = () => {

const [categories, setCategories] = useState<CategoryResponse[]>([]);
const [loading, setloading] = useState(true);
const [error, setError] = useState<string | null> (null);
useEffect(()=> {
    const fetchCategories = async() => {
        try{
            const data = await getCategories();
            setCategories(data);
            setloading(false);
        } catch (error) {
            setError("Error al cargar Categories");
            console.log(error);
        } finally {
            setloading(false);
        }
    }
    fetchCategories();
})

if (loading) {
    return <p>Loading...</p>;
  }
  
  if (error) {
    return <p>{error}</p>;
  } 

  return (
    <section className={styles.section_products}>
        <div className={styles.grid_container}>
            {
                categories.map((category) => (
                    <div className={styles.grid_item} key={category.id}>
                        <NavLink className={styles.nav_link} to={`/category/${category.id}`}>{category.name}</NavLink>
                        <img className={styles.img_category} src={category.image} alt={category.name} />
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default ProductsSection