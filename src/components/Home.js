import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {COLORS, Categories} from '../database/items';
import Icon from 'react-native-vector-icons/FontAwesome5';

export function Home({navigation}) {
  const [currentSelected, setCurrentSelected] = useState([0]);
  const renderCategories = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setCurrentSelected(index)}>
        <View
          style={[
            styles.containerItem,
            {
              backgroundColor:
                // eslint-disable-next-line eqeqeq
                currentSelected == index ? COLORS.accent : COLORS.white,
            },
          ]}>
          <View style={styles.containerImgItem}>
            <Image source={item.image} style={styles.imgItem} />
            <Text style={styles.nameCategory}>{item.name}</Text>
            <View
              style={[
                styles.containerArrow,
                {
                  backgroundColor:
                    // eslint-disable-next-line eqeqeq
                    currentSelected == index ? COLORS.white : COLORS.accentRed,
                },
              ]}>
              <Icon
                name="angle-right"
                size={12}
                style={{
                  color:
                    // eslint-disable-next-line eqeqeq
                    currentSelected == index ? COLORS.black : COLORS.white,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItems = (data, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() =>
          navigation.push('Details', {
            name: data.name,
            price: data.price,
            image: data.image,
            size: data.size,
            crust: data.crust,
            delivery: data.delivery,
            ingredients: data.ingredients,
            isTopOfTheWeek: data.isTopOfTheWeek,
          })
        }
        style={styles.containerMainItem}>
        <View style={styles.containerInfoItem}>
          <View style={styles.subContainerInfoItem}>
            <View
              style={[
                styles.subTitleInfo,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  display: data.isTopOfTheWeek ? 'flex' : 'none',
                },
              ]}>
              <Icon name="crown" size={10} style={{color: COLORS.accent}} />
              <Text style={styles.titleInfo}>Top of the week</Text>
            </View>
            <Text style={styles.nameItem}>{data.name}</Text>
            <Text style={styles.weightItem}>{data.weight}</Text>
          </View>
          <View style={styles.containerInfoImg}>
            <Image source={data.image} style={styles.imgInfoItem} />
          </View>
          <View style={styles.containerMainButtonPlus}>
            <View style={styles.containerButtonPlus}>
              <Icon name="plus" size={18} />
            </View>
            <View style={styles.containerInfoRating}>
              <Icon
                name="star-half-alt"
                size={18}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{color: COLORS.black, paddingRight: 5}}
              />
              <Text style={styles.rating}>{data.rating}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.scrollViewContainer}>
          <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
          <Image
            source={require('../database/images/background.png')}
            style={styles.backGroundImg}
          />
          <View style={styles.header}>
            <TouchableOpacity style={styles.profileContainer}>
              <Image
                source={require('../database/images/how.jpg')}
                style={styles.profilePicture}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="align-right"
                size={28}
                style={{color: COLORS.black}}
              />
            </TouchableOpacity>
          </View>
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <View style={{padding: 20}}>
            <Text style={styles.subTitle}>Food</Text>
            <Text style={styles.title}>Delivery</Text>
          </View>
          <View style={styles.search}>
            <Icon name="search" size={20} style={styles.searchIcon} />
            <TextInput placeholder="Search..." style={styles.inputSearch} />
          </View>
          <Text style={styles.textCategories}>Categories</Text>
          <FlatList
            horizontal={true}
            data={Categories}
            renderItem={renderCategories}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.namePopular}>Popular</Text>
          {Categories[currentSelected].items.map(renderItems)}
        </View>
        <TouchableOpacity style={styles.btnLoadMore}>
          <Text style={styles.textLoadMoreBtn}>Load more</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    position: 'relative',
  },
  backGroundImg: {
    position: 'absolute',
    top: 0,
    left: -100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  profilePicture: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 20,
  },
  profileContainer: {
    width: 40,
    height: 40,
  },
  subTitle: {
    fontSize: 16,
    color: COLORS.black,
    opacity: 0.5,
    fontWeight: '400',
  },
  title: {
    fontSize: 40,
    color: COLORS.black,
    fontWeight: '600',
    letterSpacing: 2,
  },
  search: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    color: COLORS.black,
    opacity: 0.8,
  },
  inputSearch: {
    color: COLORS.black,
    fontSize: 16,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black + 20,
    width: '90%',
    marginLeft: 10,
    letterSpacing: 1,
  },
  textCategories: {
    paddingTop: 20,
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.black,
    letterSpacing: 1,
  },
  containerItem: {
    width: 120,
    height: 180,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
    elevation: 5,
  },
  imgItem: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },
  containerImgItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameCategory: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: '600',
  },
  containerArrow: {
    marginTop: 2,
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  namePopular: {
    paddingTop: 20,
    paddingHorizontal: 20,
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.black,
  },
  containerMainItem: {
    width: '100%',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    activeOpacity: 0.9,
  },
  containerInfoItem: {
    width: '90%',
    height: 160,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    elevation: 4,
    position: 'relative',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subContainerInfoItem: {
    marginBottom: 20,
  },
  subTitleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleInfo: {
    fontSize: 12,
    color: COLORS.black,
    opacity: 0.8,
    marginLeft: 5,
  },
  nameItem: {
    fontSize: 22,
    color: COLORS.black,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  weightItem: {
    fontSize: 12,
    color: COLORS.black,
    opacity: 0.5,
  },
  imgInfoItem: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  containerInfoImg: {
    width: 150,
    height: 150,
    marginRight: -45,
  },
  containerMainButtonPlus: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerButtonPlus: {
    width: 85,
    height: 50,
    backgroundColor: COLORS.accent,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    fontSize: 15,
    color: COLORS.black,
    fontWeight: 'bold',
  },
  containerInfoRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  textLoadMoreBtn: {
    fontSize: 16,
    color: COLORS.black,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.black,
  },
  btnLoadMore: {
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
});
