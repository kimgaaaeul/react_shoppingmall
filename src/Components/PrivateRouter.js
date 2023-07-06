import React from 'react'
import ProductDetail from './ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({authenticate}) => {
  return (
    authenticate == true ? <ProductDetail /> : <Navigate to="/login" />
  ) //로그인이 정상적으로 된다면 productdetail 페이지로, 그렇지 않다면 로그인 페이지로 
};

export default PrivateRouter
