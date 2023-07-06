import React from 'react';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {
  const [productsList, setProductList] = useState([]);
  const [query,setQuery] = useSearchParams();
  //쿼리가 업데이트 되도록 사용하는함수 ...?
  const getProduct = async () => {
    let searchQuery = query.get('q') || '';
    //q에 매칭되어지는 함수를 찾아서 searchQuery에 넣어.. 어떠한것도 검색되지 않을 땐 '' 빈값... 
    console.log('쿼리값?', searchQuery);
    let url = `https://my-json-server.typicode.com/kimgaaaeul/react_shoppingmall/products?q=${searchQuery}`;
    console.log(url);
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProductList(data)
  }

  useEffect(() => {
    getProduct();
  }, [query])

  return (
    <div>
      <Container>
        <Row>
          {productsList.map((item) => (
            <Col md={3} sm={12} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll;
