import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
// import config from '../config';
import {CinemaState} from '../state';

/**
 * This component is for custom loader. Whenever loading state changed in redux
 * it will show/hide loader
 */
const Loader = () => {
  const isLoading = useSelector(CinemaState.loader);

  if (!isLoading) {
    return null;
  }

  return (
    <View  style={styles.mainBackViewStyle}>
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color={'red'} testID="loader"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBackViewStyle: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 2,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderStyle: {
    maxWidth: '80%',
    zIndex: 5,
    borderRadius: 13,
    justifyContent: 'space-around',
    padding: 20,
  },
});

export default Loader;
