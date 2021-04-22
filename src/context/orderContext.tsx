import { createContext, ReactNode ,useEffect, useState, useCallback } from 'react'; 
import api from '../services/index'; 

interface OrderContextData {
    nm_product?: string; 
    description?: string; 
    vl_price?: number; 
    vl_discount?: number; 
    ingredients?: Array<{
        group: string; 
        itens: Array<{
            nm_item: string; 
            vl_item: number; 
        }>; 
    }>; 
    url_image?: string; 
    order_added: boolean; 
    addOrder(): void; 
}

interface OrderProviderContext{
    children: ReactNode; 
}

export const OrderContext = createContext({} as OrderContextData); 

export function OrderProvider({children}: OrderProviderContext){
    const [nm_product, setNm_pruduct]= useState<string | ''>(); 
    const [description, setDescription] = useState<string | ''>(); 
    const [vl_price, setVl_price] = useState<number>(); 
    const [vl_discount, setVl_discount] = useState<number>(); 
    const [ingredients, setIngredients] = useState<Array<{
        group: string; 
        itens: Array<{
            nm_item: string; 
            vl_item: number; 
        }> 
    }>>(); 
    const [url_image, setUrlImage] = useState<string>()

    const [order_added, setOrder_added] = useState<boolean>(false); 
    
    const getOrderData = useCallback( async () => {
        const response = await api.get('products'); 
        const { nm_product, description, vl_price, vl_discount, ingredients, url_image }: OrderContextData = response.data[0]; 
        
        console.log(response.data); 

        setNm_pruduct(nm_product); 
        setDescription(description); 
        setVl_price(vl_price); 
        setVl_discount(vl_discount); 
        setIngredients(ingredients);
        setUrlImage(url_image); 
    }, [])

    useEffect(() => {
        getOrderData(); 
    }, []); 

    function addOrder(){
        setOrder_added(true); 
    }
    

    return(
        <OrderContext.Provider value={{
            nm_product, description, vl_price, vl_discount, ingredients, url_image, 
            order_added, addOrder
        }}>
            {children}
        </OrderContext.Provider>
    )
}