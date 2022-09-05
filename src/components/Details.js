import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../database/items';

export function Details({route, navigation}) {
  const {
    flagCategoryPizza,
    name,
    price,
    image,
    size,
    crust,
    delivery,
    ingredients,
    isTopOfTheWeek,
  } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => navigation.goBack()}>
          <Icon name="angle-left" size={16} style={{color: COLORS.black}} />
        </TouchableOpacity>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={[styles.containerCrown, {opacity: isTopOfTheWeek ? 1 : 0.5}]}>
          <IconEntypo name="star" size={15} />
        </View>
      </View>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.containerPrice}>
        <Text style={styles.symbolReal}>R$</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.containerInfo}>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <View style={{paddingHorizontal: 20}}>
          <View style={styles.subContainerInfo}>
            <Text style={styles.textInfo}>Size</Text>
            <Text style={styles.info}>{size}</Text>
          </View>
          <View style={styles.subContainerInfo}>
            <Text style={styles.textInfo}>Crust</Text>
            <Text style={styles.info}>{crust}</Text>
          </View>
          <View style={styles.subContainerInfo}>
            <Text style={styles.textInfo}>Delivery</Text>
            <Text style={styles.info}>{delivery} min</Text>
          </View>
        </View>
        <View
          style={
            flagCategoryPizza ? styles.containerImgPizza : styles.containerImg
          }>
          <Image source={image} style={styles.img} />
        </View>
      </View>
      <Text style={styles.titleIngredients}>Ingredients</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {ingredients.map((ingredient, index) => {
          return (
            <View key={index} style={styles.containerImgIngredient}>
              <Image source={ingredient} style={styles.imgIngredient} />
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.containerOrder}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.btnOrder}>
          <Text style={styles.textBtnOrder}> Place on Order</Text>
          <Icon name="angle-right" size={16} style={{color: COLORS.black}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    position: 'relative',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnBack: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCrown: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: COLORS.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 38,
    color: COLORS.black,
    fontWeight: '800',
    paddingHorizontal: 20,
    maxWidth: 300,
  },
  containerPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  symbolReal: {
    fontSize: 20,
    color: COLORS.accentRed,
    fontWeight: '900',
    paddingRight: 5,
    paddingBottom: 8,
  },
  price: {
    fontSize: 35,
    color: COLORS.accentRed,
    fontWeight: '900',
  },
  containerInfo: {
    flexDirection: 'row',
    maxHeight: 300,
    width: '100%',
    alignItems: 'center',
  },
  subContainerInfo: {
    paddingVertical: 20,
  },
  textInfo: {
    fontSize: 12,
    color: COLORS.black,
    opacity: 0.5,
  },
  info: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.black,
  },
  containerImg: {
    width: 350,
    height: 350,
  },
  containerImgPizza: {
    width: 350,
    height: 265,
    marginLeft: 32,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  titleIngredients: {
    paddingTop: 20,
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.black,
  },
  imgIngredient: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  containerImgIngredient: {
    margin: 12,
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    elevation: 5,
  },
  containerOrder: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnOrder: {
    width: '90%',
    height: 80,
    backgroundColor: COLORS.accent,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textBtnOrder: {
    fontSize: 16,
    fontWeight: '800',
    color: COLORS.black,
    letterSpacing: 1,
    marginRight: 10,
  },
});
