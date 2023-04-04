import { View, Text, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  useLazyGetCartQuery,
  useGetCartItemsQuery,
} from '../../../services/api';
import CustomCartCard from '../../../components/CustomCartCard/CustomCartCard';
import { useIsFocused } from '@react-navigation/native';

const Cart = () => {
  const isFocused = useIsFocused();
  const [getCart, { data, isSuccess, isLoading }] = useLazyGetCartQuery();
  let cart;
  let cartItems = useGetCartItemsQuery();
  console.log(cartItems, 'Ye cart Items hai ');
  const [cartItemsDetail, setCartItemsDetail] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');

  useEffect(() => {
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

  const handleRenderItems = items => {
    return (
      <CustomCartCard
        price={items?.product_price}
        productId={items?.product_id}
        quantity={items.quantity}
      />
    );
  };
  return (
    <View>
      <Text>This is your Cart </Text>

      {isSuccess && (
        <FlatList
          data={cartItemsDetail}
          renderItem={({ item }) => handleRenderItems(item)}
        />
      )}
      <Text>{totalPrice} </Text>
    </View>
  );
};

export default Cart;
