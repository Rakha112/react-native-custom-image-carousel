import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Text,
} from 'react-native';
import React from 'react';
import CustomImageCarousalSquare from './src/components/CustomImageCarousalSquare';
import CustomImageCarousalLandscape from './src/components/CustomImageCarousalLandscape';

const App = () => {
  const data = [
    {
      image: require('./src/assets/image-product-1.jpg'),
    },
    {
      image: require('./src/assets/image-product-2.jpg'),
    },
    {
      image: require('./src/assets/image-product-3.jpg'),
    },
    {
      image: require('./src/assets/image-product-4.jpg'),
    },
  ];
  const data2 = [
    {
      image: require('./src/assets/image-product-1-landscape.jpg'),
    },
    {
      image: require('./src/assets/image-product-2-landscape.jpg'),
    },
    {
      image: require('./src/assets/image-product-3-landscape.jpg'),
    },
    {
      image: require('./src/assets/image-product-4-landscape.jpg'),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.carouselContainer}>
        <Text style={styles.text}>Image Carousel Square</Text>
        <CustomImageCarousalSquare data={data} autoPlay={true} />
      </View>
      <View style={styles.carouselContainer}>
        <Text style={styles.text}>Image Carousel Landscape</Text>
        <CustomImageCarousalLandscape data={data2} autoPlay={false} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'white',
  },
  text: {textAlign: 'center', color: 'black', marginBottom: 10},
  carouselContainer: {
    marginBottom: 20,
  },
});
