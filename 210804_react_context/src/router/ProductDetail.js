import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import data from './data'

const ProductDetail = () => {
    const {productID} = useParams()
    const history = useHistory()

    // 선택한 데이터 하나만
    const thisPro = data.find(item => item.id === productID)

    const onGo = () => {
        history.push('/products')
    }
    return (
        <div>
            <h1>{thisPro.name} 상세 페이지</h1>
            <h2>{thisPro.name} -가격 : ${thisPro.price}</h2>
            <p>
                <img src={thisPro.photo} alt="" width="400"/>
            </p>
            <p>상품 설명 : {thisPro.description}</p>
            <button onClick={onGo}>목록</button>
        </div>
    );
};

export default ProductDetail;