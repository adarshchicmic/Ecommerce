import { SafeAreaView, SafeAreaProvider, View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import StatusBarr from '../../../components/StatusBar/StatusBar';
import CustomGoBackComponent from '../../../components/CustomGoBack/CustomGoBackComponent';
import { useTransactionHistoryQuery } from '../../../services/api';
import { FlatList } from 'react-native-gesture-handler';
const TransactionHistory = ({ navigation }) => {
  const [transactionData, setTransactionData] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [page, setPage] = useState(1);
  const transactionHistory = useTransactionHistoryQuery(1);
  console.log('transaction History hai ye : ', transactionHistory);
  useEffect(() => {
    if (
      transactionHistory.isLoading === false &&
      transactionHistory.isSuccess === true
    ) {
      console.log(
        transactionHistory?.data?.data,
        'ye transaction History hai ',
      );
      setTransactionData([
        ...transactionData,
        ...transactionHistory?.data?.data,
      ]);
      console.log(
        transactionHistory?.data?.data?.length,
        'ye transaction History hai ',
      );
      if (transactionHistory?.data?.data?.length) {
        setIsEmpty(false);
      } else {
        setIsEmpty(true);
      }
    }
  }, [transactionHistory]);
  const handleButtonGoBack = () => {
    navigation.goBack();
  };
  const endReached = () => {
    setPage(page + 1);
  };
  return (
    <View>
      <StatusBarr backgroundColor={'#9ad3db'} />
      <CustomGoBackComponent onPress={handleButtonGoBack} />
      {/* <StatusBarr backgroundColor={'red'} /> */}
      {!isEmpty ? (
        <FlatList
          data={transactionData}
          renderItem={({ item }) => {
            return <Text>{item}</Text>;
          }}
          keyExtractor={item => item.id.toString()}
          onEndReached={endReached}
          onEndReachedThreshold={0.5}
        />
      ) : (
        <Text>No Transaction found</Text>
      )}
    </View>
  );
};

export default TransactionHistory;
