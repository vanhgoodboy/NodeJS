import { response } from "express"
import { request } from "express"
import Product from "../models/products"

// const products = [
//     {id: 1, name: "Product 1"},
//     {id: 2, name: "Product 2"},
//     {id: 3, name: "Product 3"},
//     {id: 4, name: "Product 4"},
//     {id: 5, name: "Product 5"}

// ]

export const listProduct = async (request, response) => {
    try{
        const product = await Product.find().exec()
        response.json(product)
        }catch(error){
        response.status(400).json({message:"Loi"})
        }
    // response.json(products)
}
export const listProductDetail = (request, response) => {
    try {
        const product = Product.findOne({_id:request.params.id}).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"Lỗi data"})
    }
    // const product = products.find(item => item.id === +request.params.id)
    // response.json(product)
}
export const createProduct = async (request, response) => {
    try {
        const product = await Product(request.body).save()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"k thể thêm sp"})
    }
    // products.push(request.body)
    // response.json(products)
}
export const deleteProduct = (request, response)=> {
    try {
        const product = Product.findOneAndDelete({_id:request.params.id}).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"k thể xóa sp"})
    }
    // const product = products.filter(item => item.id != +request.params.id)
    // response.json(product)
}
export const updateProduct = async (request, response)=> {
    try {
        const product = await Product.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"k thể update sp"})
    }
    // response.json(products.map(item => item.id === +request.params.id ? request.body : item))
}