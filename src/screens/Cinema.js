import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import DispatchConstants from '../saga/DispatchConstants';
import {CinemaState} from '../state';
import Snackbar from 'react-native-snackbar';

const CinemaScreen = () => {
  const dispatch = useDispatch();
  const cinemaWorld = useSelector(CinemaState.selectCinemaWorld);
  const filmWorld = useSelector(CinemaState.selectFilmWorld);
  const error = useSelector(CinemaState.error);

  console.log('Film World', filmWorld?.Movies.length);
  console.log('Cinema World', cinemaWorld?.Movies.length);
  console.log('Error State', error);
  useEffect(() => {
    callApi();
  }, []);

  useEffect(() => {
    console.log('Error State', error);
    if (error) {
      Snackbar.show({
        text: 'Server Error',
        duration: Snackbar.LENGTH_INDEFINITE,
        action: {
          text: 'Retry',
          textColor: 'green',
          onPress: () => callApi(),
        },
      });
    }
  }, [error]);

  const callApi = () => {
    dispatch({type: DispatchConstants.CINEMA_API});
  };

  const renderItem = ({item, index}) => (
    <View style={styles.boxContainer}>
      <Image
        source={{uri: item.Poster}}
        style={styles.imageContainer}
        resizeMode="cover"
      />
      <Text testID="header-Title" style={styles.movieTitle}>
        {item.Title}
      </Text>
      <View style={styles.movieBottomContainer}>
        {cinemaWorld?.Movies[index].Price > filmWorld?.Movies[index].Price ? (
          <View>
            {filmWorld && (
              <View style={styles.currencyHolder}>
                <Text>Filmworld </Text>
                <Text>${filmWorld?.Movies[index].Price}</Text>
              </View>
            )}
            {cinemaWorld && (
              <View style={styles.currencyHolder}>
                <Text>Cinemaworld </Text>
                <Text>${cinemaWorld?.Movies[index].Price}</Text>
              </View>
            )}
          </View>
        ) : (
          <View>
            {cinemaWorld && (
              <View style={styles.currencyHolder}>
                <Text>Cinemaworld </Text>
                <Text>${cinemaWorld?.Movies[index].Price}</Text>
              </View>
            )}

            {filmWorld && (
              <View style={styles.currencyHolder}>
                <Text>Filmworld </Text>
                <Text>${filmWorld?.Movies[index].Price}</Text>
              </View>
            )}
          </View>
        )}
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.textHeader}>Princes Cinema</Text>
          <Text style={styles.textHeader2}>Classic Movies At Home</Text>
          <Text style={styles.textHeader3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </Text>
          <Text style={styles.textHeader4}>Classic Movie List</Text>
        </View>
        {(filmWorld || cinemaWorld) && (
          <FlatList
            data={filmWorld?.Movies || cinemaWorld?.Movies}
            numColumns={2}
            testID="Movies-rows"
            renderItem={renderItem}
            columnWrapperStyle={styles.flatListWrapperStyle}
            keyExtractor={item => item.ID}
            //   showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            //   showsVerticalScrollIndicator={false}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: 'black'},
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'black',
  },
  imageContainer: {width: '100%', height: 190},
  flatListWrapperStyle: {justifyContent: 'space-between', width: '95%'},
  boxContainer: {
    width: '48%',
    backgroundColor: '#fff',
    // height: 250,
    marginVertical: 7,
    // borderRadius: 20,
  },
  currencyHolder: {flexDirection: 'row', justifyContent: 'space-between'},
  textHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: '15%',
  },
  textHeader2: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 30,
    color: 'white',
  },
  textHeader3: {
    textAlign: 'center',
    alignItems: 'center',
    width: '80%',
    paddingTop: '5%',
    color: 'white',
  },
  textHeader4: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    paddingTop: '5%',
    paddingBottom: '5%',
  },
  movieTitle: {fontWeight: '600', marginHorizontal: 5},
  movieBottomContainer: {marginTop: 20, marginHorizontal: 5},
});

export default CinemaScreen;
