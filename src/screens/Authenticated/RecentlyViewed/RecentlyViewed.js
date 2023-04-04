import { SafeAreaView, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useGetRecentlyViewedQuery } from '../../../services/api';
import { FlatList } from 'react-native-gesture-handler';
import CustomCartCard from '../../../components/CustomCartCard/CustomCartCard';
const RecentlyViewed = ({ navigation }) => {
  const data = useGetRecentlyViewedQuery();
  const [length, setLength] = useState(0);
  const [recentItem, setRecentItem] = useState([]);
  useEffect(() => {
    if (data.isLoading === false && data.isSuccess === true) {
      console.log(data.data.data.length, 'ye data hai consol');
      setRecentItem(data?.data?.data);
      setLength(data?.data?.data?.length);
    }
  }, [data]);
    const handleWholeCardPress = () => {
      
    navigation.navigate('ProductDetail', { productId: recentItem.product_id });
  };
  const handleRenderItem = item => {
    return <CustomCartCard productId={item?.product_id}/>;
    console.log(item, 'ye item hai ');
  };
  return (
    <SafeAreaView>
      <Text>RecentlyViewed</Text>
      {!length ? (
        <Text>No Recently Viewed Items</Text>
      ) : (
        <FlatList
          data={recentItem}
          renderItem={item => handleRenderItem(item)}
        />
      )}
    </SafeAreaView>
  );
};

export default RecentlyViewed;
