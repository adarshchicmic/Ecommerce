import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { BASE_URL, COMMON_CONSTS } from '../../shared/constants';
import styles from './styles';
import { useGetProductQuery } from '../../services/api';
const CustomCartCard = ({
  name,
  photo,
  price,
  totalPrice,
  quantity,
  onPressWholeButton = () => {},
  onPressAddToCart = () => {},
  productId,
}) => {
  const product = useGetProductQuery(productId);
  const [productDetail, setProductDetail] = useState({});
  console.log(product);
  useEffect(() => {
    if (product.isLoading === false && product.isSuccess === true) {
      console.log(product?.data?.data, 'ye product hai ');
      setProductDetail(product?.data?.data);
    }
  }, [product]);
  return (
    <View style={styles.cardContainerStyle}>
      <TouchableOpacity onPress={onPressWholeButton}>
        <Image
          style={styles.cardImageStyle}
          source={{ uri: `${BASE_URL}${productDetail.photo}` }}
        />
        <Text style={styles.titleStyle}> {productDetail.name}</Text>
        <Text style={styles.priceStyle}>₹ {price}</Text>
        <Text>
          {COMMON_CONSTS.QUANTITY}
          {quantity}
        </Text>
        {/* <TouchableOpacity
          style={styles.addToCartBtnStyle}
          onPress={onPressAddToCart}
        >
          <Text style={styles.addToCartBtntextStyle}>
            {COMMON_CONSTS.ADD_TO_CART}
          </Text>
        </TouchableOpacity> */}
      </TouchableOpacity>
    </View>
  );
};

export default CustomCartCard;
