
import axios from "axios"
import React, { useEffect, useState } from "react"
import productsStyles from "./products.module.css"
import { useDispatch } from "react-redux"
import { cartSlice } from "../Redux/cartSlice"
import { useNavigate } from "react-router-dom"

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((res) => setProducts(res.data.products))
            .catch((err) => console.log(err));
    }, []); // تم إضافة array فارغة هنا

    const [done, setDone] = useState(false)
    const dispatch = useDispatch();
    const cartItem = (x) => {
        dispatch(cartSlice.actions.addtocart(x));
        setDone(true)
    };
    const naviagte = useNavigate()
    return (
        <>
            {
                done ? (
                    <div className={productsStyles.done}>
                        <div className={productsStyles.content}>
                            <h1>Added Successfully</h1>
                            <button onClick={() => setDone(false)}>DONE</button>
                        </div>
                    </div>
                ) : undefined}

            <section className={productsStyles.container}>
                <h1>PRODUCTS</h1>
                <div className={productsStyles.products}>
                    {products.map((el) => (
                        <div className={productsStyles.Products} key={el.id}>
                            <img src={el.thumbnail} alt="" />
                            <h2>{el.title}</h2>
                            <h3>{el.category}</h3>
                            <span>$ {el.price}</span>
                            <div className={productsStyles.buttons}>
                                {/* <button onClick={() =>{
                                    window.sessionStorage.setItem('product' , JSON.stringify(el))
                                    naviagte('singleproduct')
                                }} >Read More</button> */}
                                <button onClick={() => {
                                    dispatch(cartSlice.actions.addtocart(el))
                                    naviagte('singleproduct');
                                }}>Read More</button>
                                <button onClick={() => cartItem(el)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Products;
