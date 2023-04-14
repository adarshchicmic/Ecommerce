import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { COMMON_CONSTS } from '../../../shared/constants';
import styles from './styles';
import { useLogOutMutation } from '../../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { addToken, setName } from '../../../store /feature/userSlice';
import { useGetNameMutation } from '../../../services/api';
import { useIsFocused } from '@react-navigation/native';

const Profile = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [getName, getNameResult] = useGetNameMutation();
  console.log(getNameResult?.data?.data?.username, 'ye get name result hai ');
  const dispatch = useDispatch();
  const [name, setNamee] = useState('');
  const statew = useSelector(state => state?.userSlice?.user);
  console.log(statew, 'ye state w ahja');
  const [logout, logoutResult] = useLogOutMutation();
  console.log(logoutResult);
  useEffect(() => {
    if (isFocused) {
      getName({ phone_number: statew.number });
    }
    if (logoutResult.isLoading === false && logoutResult.isSuccess === true) {
      console.log(logoutResult, 'ye logout result hai ');
      if (logoutResult.data.status === true) {
        navigation.navigate('Login');
        dispatch(
          addToken({
            token: '',
          }),
        );
      }
    }
  }, [logoutResult, isFocused]);
  useEffect(() => {
    if (getNameResult.isLoading === false && getNameResult.isSuccess === true) {
      dispatch(setName({ name: getNameResult?.data?.data?.username }));
      setNamee(getNameResult?.data?.data?.username);
    }
  }, [getNameResult]);
  const handleLogoutButtonPress = () => {
    logout();
  };
  const handleRecentViewedButtonPress = () => {
    navigation.navigate('RecentView');
  };
  const handleOrderHistory = () => {
    navigation.navigate('OrderHistory');
  };
  const handleTransactionHistory = () => {
    navigation.navigate('TransactionHistory');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerTextStyle}>
        {COMMON_CONSTS.HELLO}
        {'   '}
        {name}
      </Text>
      <View style={styles.twoButtonStyle}>
        <CustomButton
          btnText={COMMON_CONSTS.ORDER_HISTORY}
          styleBtn={styles.buttonStyle(false)}
          styleTxt={styles.buttonTextStyle}
          onPressFunction={handleOrderHistory}
        />
        <CustomButton
          btnText={COMMON_CONSTS.TRANSACTION_HISTORY}
          styleBtn={styles.buttonStyle(false)}
          styleTxt={styles.buttonTextStyle}
          onPressFunction={handleTransactionHistory}
        />
      </View>
      <View style={styles.twoButtonStyle}>
        <CustomButton
          btnText={COMMON_CONSTS.RECENTLY_VIEWED_ITEMS}
          styleBtn={styles.buttonStyle(false)}
          styleTxt={styles.buttonTextStyle}
          onPressFunction={handleRecentViewedButtonPress}
        />
        <CustomButton
          btnText={COMMON_CONSTS.LOGOUT}
          styleBtn={styles.buttonStyle(true)}
          styleTxt={styles.buttonTextStyle}
          onPressFunction={handleLogoutButtonPress}
        />
      </View>
    </View>
  );
};

export default Profile;
