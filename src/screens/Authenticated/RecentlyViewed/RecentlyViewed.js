import { SafeAreaView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  useGetRecentlyViewedQuery,
  useLazyGetRecentlyViewedItemsQuery,
} from '../../../services/api';
import { FlatList } from 'react-native-gesture-handler';
import CustomCartCard from '../../../components/CustomCartCard/CustomCartCard';
import StatusBarr from '../../../components/StatusBar/StatusBar';
import CustomGoBackComponent from '../../../components/CustomGoBack/CustomGoBackComponent';
import styles from './styles';
const RecentlyViewed = ({ navigation }) => {
  const [length, setLength] = useState(0);
  const [recentItem, setRecentItem] = useState([]);
  const [page, setPage] = useState(0);
  const [getRecent, { data, isSuccess, isLoading }] =
    useLazyGetRecentlyViewedItemsQuery();
  const dataa = useGetRecentlyViewedQuery(page);
  console.log(dataa, 'ye data hai fjkadhsklfhdasjkhfakjs');
  useEffect(() => {
    if (dataa.isLoading === false && dataa.isSuccess === true) {
      console.log(dataa.data.data, 'ye data hai consol');
      setRecentItem(dataa?.data?.data);
      setLength(dataa?.data?.data?.length);
    }
  }, [dataa]);
  useEffect(() => {
    getRecent(page);
    if (isSuccess === true && isLoading === false) {
      setRecentItem([...recentItem, ...data]);
    }
  }, [page]);
  const handleWholeButtonPress = value => {
    navigation.navigate('ProductDetail', { productId: value });
  };
  const addPage = () => {
    setPage(page + 1);
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
  const handleButtonGoBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <StatusBarr backgroundColor={'#9ad3db'} />
      <CustomGoBackComponent onPress={handleButtonGoBack} />
      <View style={styles.container}>
        <FlatList
          data={recentItem}
          renderItem={item => handleRenderItem(item.item)}
          onEndReachedThreshold={0.7}
          onEndReached={addPage}
        />
      </View>
    </View>
  );
};

export default RecentlyViewed;
