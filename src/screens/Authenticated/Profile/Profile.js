import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { COMMON_CONSTS } from '../../../shared/constants';
import styles from './styles';
import { useLogOutMutation } from '../../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { addToken } from '../../../store /feature/userSlice';
import { useGetNameMutation } from '../../../services/api';
const Profile = ({ navigation }) => {
  const [getName, getNameResult] = useGetNameMutation();
  const dispatch = useDispatch();
  const statew = useSelector(state => state?.userSlice?.user);
  console.log(statew);
  const [logout, logoutResult] = useLogOutMutation();
  console.log(logoutResult);
  useEffect(() => {
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
  }, [logoutResult]);

  const handleLogoutButtonPress = () => {
    logout();
  };
  const handleRecentViewedButtonPress = () => {
    navigation.navigate('RecentView');
  };
  return (
    <View style={styles.container}>
      <CustomButton
        btnText={COMMON_CONSTS.LOGOUT}
        styleBtn={styles.buttonStyle}
        styleTxt={styles.buttonTextStyle}
        onPressFunction={handleLogoutButtonPress}
      />
      <CustomButton
        btnText={COMMON_CONSTS.LOGOUT}
        styleBtn={styles.buttonStyle}
        styleTxt={styles.buttonTextStyle}
        onPressFunction={handleRecentViewedButtonPress}
      />
    </View>
  );
};

export default Profile;
