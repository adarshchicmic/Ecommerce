import { SafeAreaView, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useGetRecentlyViewedQuery } from '../../../services/api';
import { FlatList } from 'react-native-gesture-handler';
import CustomCartCard from '../../../components/CustomCartCard/CustomCartCard';
const RecentlyViewed = ({ navigation }) => {
  const data = useGetRecentlyViewedQuery();
  console.log(data, 'ye data hai fjkadhsklfhdasjkhfakjs');
  const [length, setLength] = useState(0);
  const [recentItem, setRecentItem] = useState([]);
  useEffect(() => {
    if (data.isLoading === false && data.isSuccess === true) {
      console.log(data.data.data, 'ye data hai consol');
      setRecentItem(data?.data?.data);
      setLength(data?.data?.data?.length);
    }
  }, [data]);
  const handleWholeButtonPress = value => {
    navigation.navigate('ProductDetail', { productId: value });
  };
  const handleRenderItem = items => {
    // return console.log(items.product_id, 'ye product id hai ');
    return (
      <CustomCartCard
        price={items?.product_price}
        productId={items?.product_id}
        quantity={items.quantity}
        show={false}
        onPressWholeButton={() => handleWholeButtonPress(items?.product_id)}
      />
    );
  };
  return (
    <SafeAreaView>
      <Text>RecentlyViewed</Text>

      <FlatList
        data={recentItem}
        renderItem={item => handleRenderItem(item.item)}
      />
    </SafeAreaView>
  );
};

export default RecentlyViewed;
