import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image, FlatList, Dimensions } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../constants/colors";
import plantsData from '../constants/plantsData';
import Plant from "../components/Plant";

const categories = [
    {
        name: 'All',
        id: 1,
    },
    {
        name: 'OutDoor',
        id: 2,
    },
    {
        name: 'Indoor',
        id: 3,
    },
    {
        name: 'Popular',
        id: 4,
    },
    {
        name: 'Bio',
        id: 5,
    },
    {
        name: 'Other',
        id: 6,
    }
];

const { height } = Dimensions.get('window');

export default HomeScreen = () => {

    const [active, setActive] = useState(1);

    const Category = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => setActive(item.id)}
                style={[styles.category, active == item.id ? { borderColor: colors.black } : null]}
            >
                <Text style={[styles.categoryText, active == item.id ? { color: colors.black } : null]}>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.topText}>Find your{"\n"}favorite plans</Text>
                <TouchableOpacity style={styles.searchButton}>
                    <AntDesign name="search1" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.promoCard}>
                <View style={styles.promoCardContent}>
                    <Text style={styles.promoCardContentTitle}>30% off</Text>
                    <Text style={styles.promoCardContentSubtitle}>02 - 30 Aout</Text>
                </View>
                <Image style={styles.promoCardImage} source={require('./../assets/images/calathea-medallion-plant-white-pot-removebg-preview-modified.png')} />
            </View>
            <View style={styles.categories}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    renderItem={({ item }) => <Category key={item.id} item={item} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.plantsSection}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={plantsData}
                    renderItem={({ item }) => <Plant item={item} />}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        margin: 20,
    },
    topView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topText: {
        fontSize: 30,
        fontWeight: '600',
    },
    searchButton: {
        borderWidth: 4,
        borderColor: '#c4c0c0',
        height: 60,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    promoCard: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 10,
        backgroundColor: '#D1EBC0',
        height: 150,
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        borderRadius: 30,
    },
    promoCardContent: {
        paddingStart: 30,
    },
    promoCardContentTitle: {
        fontSize: 25,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    promoCardContentSubtitle: {
        fontSize: 18,
        fontWeight: '300',
        marginTop: 5,
    },
    promoCardImage: {
        position: 'absolute',
        right: 20,
        top: -30,
        height: 150,
        width: 120,
        resizeMode: 'contain',
    },
    categories: {
        height: 40,
    },
    category: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginEnd: 15,
        borderWidth: 3,
        borderColor: '#c4c0c0',
        borderRadius: 25,
    },
    categoryText: {
        fontSize: 14,
    },
    plantsSection: {
        marginTop: 30,
        height: height / 2.1,
    }
});