import { View, Text, FlatList, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useGetAllProductsQuery } from '../../../services/api';
import CustomCard from '../../../components/CustomCard/CustomCard';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const getAllProducts = useGetAllProductsQuery();
  useEffect(() => {
    if (
      getAllProducts?.isLoading === false &&
      getAllProducts?.isSuccess === true
    ) {
      setData(getAllProducts?.data?.data);
    }
  }, [getAllProducts]);
  console.log(data.name);
  const handleAddToCartButton = () => {};
  const handleWholeCardPress = () => {
    navigation.navigate('ProductDetail');
  };
  const handleRenderItem = item => {
    console.log(item, 'ITEM');
    return (
      <CustomCard
        price={item?.price}
        photo={item?.photo}
        name={item.name}
        onPressAddToCart={handleAddToCartButton}
        onPressWholeButton={handleWholeCardPress}
      />
    );
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => handleRenderItem(item)}
        keyExtractor={item => item.id}
        numColumns={2}
      />

      {/* <Image
        source={{
          uri: 'https://54ab-122-160-165-213.in.ngrok.io/media/images/fan.png',
        }}
      /> */}
    </View>
  );
};

export default HomeScreen;
