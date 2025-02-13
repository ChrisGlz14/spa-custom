
interface Product{ 
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: Category
}

interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}

export interface CategoryResponse {
    id: number;
    name: string;
    image: string;
  }


export const getProducts = async (): Promise<Product[]> => {
    try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
        const data : Product[] = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
        throw new Error("Error al cargar los productos");
    }
};

export const getCategories = async () :Promise<CategoryResponse[]> => {
    try {
        const res  =await fetch("https://api.escuelajs.co/api/v1/categories");

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }

        const data: CategoryResponse[] = await res.json();

        if(data.length > 0){
            return data.slice(0, 3);
        } else {
            return [];
        }


    } catch (error) {
        
        console.log("Error al cargar categorias", error);
        return[];
    }
}