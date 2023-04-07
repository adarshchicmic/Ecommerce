import { View, Text, FlatList, ActivityIndicator } from 'react-native';
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
const Cart = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [getCart, { data, isSuccess, isLoading }] = useLazyGetCartQuery();
  let cart;
  const [removeFromCart, removeFromCartResult] = useRemoveFromCartMutation();
  console.log(removeFromCartResult, 'Ye remove from cart ka result hai ');
  let cartItems = useGetCartItemsQuery();
  console.log(cartItems, 'Ye cart Items hai ');
  const [cartItemsDetail, setCartItemsDetail] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');
  const [isLoadingg, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading === true) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    if (isFocused) {
      cart = getCart();
      console.log(data, 'ye cart item from lazy query hai ');
      setCartItemsDetail(data?.data);
      setTotalPrice(data?.Total_price?.product_price__sum);
    }
    if (isLoading === false && isSuccess === true) {
      setCartItemsDetail(data?.data);
      setTotalPrice(data?.Total_price?.product_price__sum);
    }
  }, [isFocused, data]);
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
    navigation.navigate('OrderSummaryPage', { productId: 1 });
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
      {isLoadingg ? (
        <View>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={cartItemsDetail}
          renderItem={({ item }) => handleRenderItems(item)}
          ListFooterComponent={
            <View>
              <Text style={styles.totalAmountStyle}>
                {COMMON_CONSTS.TOTAL_AMOUNT} {'    '}
                {totalPrice}
              </Text>
              <CustomButton
                styleBtn={styles.buttonStyle}
                styleTxt={styles.buttonTextStyle}
                btnText={COMMON_CONSTS.PROCEED_TO_CHECKOUT}
                onPressFunction={handleCheckoutPress}
              />
            </View>
          }
        />
      )}
    </View>
  );
};

export default Cart;
