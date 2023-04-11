import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  useGetProductQuery,
  useGetReviewQuery,
  useProductReviewMutation,
} from '../../../services/api';
import { BASE_URL, COMMON_CONSTS } from '../../../shared/constants';
import styles from './styles';
import { increment, decrement } from '../../../store /feature/CounterSlice';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { useDispatch, useSelector } from 'react-redux';
import { useAddToCartMutation } from '../../../services/api';
import CustomTextInput from '../../../components/CustomTextInput/CustomTextInput';

import RatingComponent from '../../../components/RatingComponent/RatingComponent';
import CustomShowRating from '../../../components/CustomShowRating/CustomShowRating';
const ProductDetail = ({ navigation, route }) => {
  const [productDetail, setProductDetail] = useState({});
  const [productReview, setProductReview] = useState('');
  const [validReview, setValidReview] = useState(false);
  const { productId } = route.params;
  const quantity = useSelector(state => state.counter.value);
  console.log(productId);
  const currentRating = useSelector(state => state.productSlice.currentRating);
  console.log(currentRating, 'ye cuyrrent reatomb jsajo lkjnlkvbjlkcvj');
  const product = useGetProductQuery(productId);
  const [addToCart, addToCartResult] = useAddToCartMutation();
  const [productReviewM, productReviewResult] = useProductReviewMutation();
  const review = useGetReviewQuery({ product_id: productId });
  console.log(review, 'Ye review result hai ......Bhai bhai bhai bahi ');
  const [allFilled, setAllFilled] = useState(false);
  console.log(productReviewResult, 'product review result hai api ka ');
  console.log(addToCartResult, 'ye add to cart result hai');
  console.log(product);
  const [outOfStock, setOutOfStock] = useState(false);
  const [productReviewAddIsLoading, setProductReviewIsLoading] =
    useState(false);

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
  useEffect(() => {
    if (productReviewResult.isLoading) {
      setProductReviewIsLoading(true);
    } else {
      setProductReviewIsLoading(false);
    }
    if (productReviewResult.isError) {
      alert('You have not bought this item yet please buy to add review');
    }
    if (
      productReviewResult.isLoading === false &&
      productReviewResult === true
    ) {
      console.log(
        productReviewResult,
        'ye product review result hai ..,.,.,.,.',
      );
    }
  }, [productReviewResult]);
  useEffect(() => {
    if (
      addToCartResult.isLoading === false &&
      addToCartResult.isSuccess === true
    ) {
      alert('Product added to cart successfully');
    }
  }, [addToCartResult]);
  const handleBuyNowButtonPress = () => {
    navigation.navigate('OrderSummaryPage', {
      id: productId,
      quantity: quantity,
    });
  };
  const handleOnChangeReview = text => {
    console.log(text);
    setProductReview(text);
    if (text.length >= 5 && currentRating >= 1) {
      setValidReview(true);
    }
  };
  const handleAddToCartButton = () => {
    if (quantity !== 0) {
      addToCart({ product_id: productDetail.id, quantity: quantity });
    }
  };

  const handleReviewButtonPress = () => {
    console.log('Handle review button pressed ');
    if (!!review && validReview) {
      console.log('handle review button is called Pan');
      setAllFilled(true);
      productReviewM({
        product_id: productDetail.id,
        review: productReview,
        rating: currentRating,
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.containerScrollView}>
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
          <View style={styles.reviewContainer}>
            <Text style={styles.productDetailTitleStyle}>
              {COMMON_CONSTS.REVIEW}
            </Text>
            <CustomTextInput
              onChangeTextFunction={handleOnChangeReview}
              styleInputText={styles.reviewStyle}
            />
            <RatingComponent initialRating={1} />
            {!review ? <Text>{COMMON_CONSTS.PLEASE_ADD_REVIEW}</Text> : null}
            <CustomButton
              btnText={COMMON_CONSTS.ADD_REVIEW}
              styleBtn={styles.buttonStyle}
              onPressFunction={() => handleReviewButtonPress()}
              styleTxt={styles.buttonTextStyle}
            />
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
