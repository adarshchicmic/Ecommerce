import { View, Text, FlatList, ActivityIndicator, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  useLazyGetCartQuery,
  useGetCartItemsQuery,
} from '../../../services/api';
import CustomCartCard from '../../../components/CustomCartCard/CustomCartCard';
import { useIsFocused } from '@react-navigation/native';
import { useRemoveFromCartMutation } from '../../../services/api';
import CustomButton from '../../../components/CustomButton/CustomButton';
import styles from './styles';
import { COMMON_CONSTS } from '../../../shared/constants';
import { useSelector, useDispatch } from 'react-redux';
import { changeTotalPrice } from '../../../store /feature/ProductSlice';
const Cart = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [getCart, { data, isSuccess, isLoading }] = useLazyGetCartQuery();
  const [currentPage, setCurrentPage] = useState(0);
  const [removeFromCart, removeFromCartResult] = useRemoveFromCartMutation();
  console.log(removeFromCartResult, 'Ye remove from cart ka result hai ');
  // let cartItems = useGetCartItemsQuery();
  // console.log(cartItems, 'Ye cart Items hai ');
  const [cartItemsDetail, setCartItemsDetail] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');
  const [isLoadingg, setIsLoading] = useState(false);
  const [goCheckOut, setGoCheckOut] = useState(false);
  const [removeFromCartLoading, setRemoveFromCartLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoading === true) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    if (isFocused) {
      getCart(currentPage);
      console.log(data, 'ye cart item from lazy query hai ');
      // setCartItemsDetail(data?.data);
      setTotalPrice(data?.Total_price?.product_price__sum);
      dispatch(
        changeTotalPrice({ totalPrice: data?.Total_price?.product_price__sum }),
      );
      setGoCheckOut(data?.data?.length);
    }
    if (isLoading === false && isSuccess === true) {
      setCartItemsDetail(data?.data);
      setTotalPrice(data?.Total_price?.product_price__sum);
      setGoCheckOut(data?.data?.length);
      console.log(data.data.length, 'ye product count hai ');
    }
  }, [isFocused, data, removeFromCartResult, currentPage]);
  useEffect(() => {
    if (removeFromCart.isLoading) {
      setRemoveFromCartLoading(true);
    } else {
      setRemoveFromCartLoading(false);
    }
    if (
      removeFromCartResult.isLoading === false &&
      removeFromCartResult.isSuccess === true
    ) {
      alert('Product removed from cart successfully');
    }
    if (removeFromCartResult.isError) {
      alert('Error');
    }
  }, [removeFromCartResult]);
  const handleRemoveFromCart = productId => {
    console.log(productId, 'id hai ye product waali  ');
    removeFromCart({ id: productId });
  };
  const handleWholeButtonPress = id => {
    console.log(cartItemsDetail, 'ye cart items detail hai ');
    navigation.navigate('ProductDetail', {
      productId: id,
    });
  };
  const handleCheckoutPress = () => {
    if (goCheckOut) {
      navigation.navigate('OrderSummaryPage', {
        productId: 1,
        totalPrice: totalPrice,
      });
    } else {
      alert('there is no products in the cart ');
    }
  };
  const handleRenderItems = items => {
    return (
      <CustomCartCard
        price={items?.product_price}
        productId={items?.product_id}
        quantity={items.quantity}
        onPressAddToCart={() => handleRemoveFromCart(items?.id)}
        onPressWholeButton={() => handleWholeButtonPress(items?.product_id)}
        show={true}
      />
    );
  };
  return (
    <View style={styles.container}>
      {isLoadingg || removeFromCartLoading ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={cartItemsDetail}
          renderItem={({ item }) => handleRenderItems(item)}
          ListFooterComponent={
            <View>
              <View style={styles.cartButtonStyle}>
                <Button
                  title={COMMON_CONSTS.PREV}
                  onPress={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  color="#9ad3db"
                />
                <Button
                  title={COMMON_CONSTS.NEXT}
                  color="#9ad3db"
                  onPress={() => setCurrentPage(currentPage + 1)}
                  disabled={cartItemsDetail.length < 5}
                />
              </View>
              <View>
                <Text style={styles.totalAmountStyle}>
                  {COMMON_CONSTS.TOTAL_AMOUNT} {'    '}
                  {COMMON_CONSTS.RS}
                  {'    '}
                  {totalPrice}
                </Text>
                <CustomButton
                  styleBtn={styles.buttonStyle}
                  styleTxt={styles.buttonTextStyle}
                  btnText={COMMON_CONSTS.PROCEED_TO_CHECKOUT}
                  onPressFunction={handleCheckoutPress}
                />
              </View>
            </View>
          }
        />
      )}
    </View>
  );
};

export default Cart;
