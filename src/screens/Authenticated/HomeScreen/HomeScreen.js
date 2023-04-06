import { View, Text, FlatList, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useGetAllProductsQuery } from '../../../services/api';
import CustomCard from '../../../components/CustomCard/CustomCard';
import {
  useAddToCartMutation,
  useRecentlyViewedItemsMutation,
} from '../../../services/api';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const getAllProducts = useGetAllProductsQuery();
  const [recentlyViewed, recentlyViewedResult] =
    useRecentlyViewedItemsMutation();

  console.log(recentlyViewedResult, 'ye recently viewed ka result hai');
  const [addToCart, addToCartResult] = useAddToCartMutation();
  console.log(addToCartResult, 'ye add to cart ka result aha');
  useEffect(() => {
    if (
      getAllProducts?.isLoading === false &&
      getAllProducts?.isSuccess === true
    ) {
      setData(getAllProducts?.data?.data);
    }
  }, [getAllProducts]);
  useEffect(() => {
    if (addToCartResult.isLoading === false && addToCartResult === true) {
      console.log(addToCartResult, ' ye add to cart ka result hai ');
    }
  }, [addToCartResult]);
  console.log(data.name);
  const quantity = 1;
  const handleAddToCartButton = id => {
    addToCart({ product_id: id, quantity: quantity });
    console.log(id, 'ye id hai button called ');
  };
  const handleWholeCardPress = id => {
    recentlyViewed({ product_id: id });
    navigation.navigate('ProductDetail', { productId: id });
  };
  const handleRenderItem = item => {
    console.log(item, 'ITEM');
    return (
      <CustomCard
        price={item?.price}
        photo={item?.photo}
        name={item.name}
        onPressAddToCart={() => handleAddToCartButton(item?.id)}
        onPressWholeButton={() => handleWholeCardPress(item?.id)}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => handleRenderItem(item)}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default HomeScreen;
