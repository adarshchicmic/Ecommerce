import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useGetProductQuery } from '../../../services/api';
import { BASE_URL, COMMON_CONSTS } from '../../../shared/constants';
import styles from './styles';
import { increment, decrement } from '../../../store /feature/CounterSlice';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { useAddToCartMutation } from '../../../services/api';
const ProductDetail = ({ navigation, route }) => {
  const [productDetail, setProductDetail] = useState({});

  const { productId } = route.params;
  const quantity = useSelector(state => state.counter.value);

  console.log(productId);
  const product = useGetProductQuery(productId);
  const [addToCart, addToCartResult] = useAddToCartMutation();
  console.log(addToCartResult, 'ye add to cart result hai');
  console.log(product);
  const [outOfStock, setOutOfStock] = useState(false);
  useEffect(() => {
    if (quantity === 0) {
      setOutOfStock(true);
    } else {
      setOutOfStock(false);
    }
  }, [quantity]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product.isLoading === false && product.isSuccess === true) {
      console.log(product.data.data, 'ye product ddata.data hai ');
      setProductDetail(product?.data?.data);
    }
  }, [product]);

  const handleBuyNowButtonPress = () => {
    navigation.navigate('OrderSummaryPage', {
      id: productId,
      quantity: quantity,
    });
  };

  const handleAddToCartButton = () => {
    if (quantity !== 0) {
      addToCart({ product_id: productDetail.id, quantity: quantity });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          style={styles.imageStyle}
          source={{ uri: `${BASE_URL}${productDetail?.photo}` }}
        />
        <View style={styles.afterImage}>
          <View style={styles.namePriceStyle}>
            <Text style={styles.titleStyle}>{productDetail?.name}</Text>
            <Text style={styles.priceStyle}>₹. {productDetail?.price}</Text>
          </View>
          <View style={styles.afterPriceStyle}>
            <Text style={styles.hurryUpStyle}>
              {COMMON_CONSTS.HURRY_UP} {'\n'}
              {COMMON_CONSTS.ITEMS_LEFT} <Text>{'  '} </Text>
              {outOfStock ? (
                <Text>{COMMON_CONSTS.OUT_OF_STOCK}</Text>
              ) : (
                <Text style={styles.itemLeftStyle}>
                  {productDetail.quantity} {COMMON_CONSTS.ONLY}
                </Text>
              )}
            </Text>
            <Text style={styles.productDetailTitleStyle}>
              {COMMON_CONSTS.PRODUCT_DETAIL}
            </Text>
            <Text style={styles.detailStyle}>
              {productDetail.product_details}
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.quantityStyle}>
        <Text style={styles.quantityTextStyle}>{COMMON_CONSTS.QUANTITY}</Text>
        <TouchableOpacity onPress={() => dispatch(increment())}>
          <Text style={styles.quantityTextStyle}>{COMMON_CONSTS.PLUS}</Text>
        </TouchableOpacity>
        <Text style={styles.quantityTextStyle}>{quantity}</Text>
        <TouchableOpacity onPress={() => dispatch(decrement())}>
          <Text style={styles.quantityTextStyle}>{COMMON_CONSTS.MINUS}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.twoButtonStyle}>
        <CustomButton
          styleBtn={styles.buttonStyle}
          btnText={COMMON_CONSTS.ADD_TO_CART}
          styleTxt={styles.buttonTextStyle}
          onPressFunction={handleAddToCartButton}
        />
        <CustomButton
          styleBtn={styles.buttonStyle}
          btnText={COMMON_CONSTS.BUY_NOW}
          styleTxt={styles.buttonTextStyle}
          onPressFunction={handleBuyNowButtonPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
