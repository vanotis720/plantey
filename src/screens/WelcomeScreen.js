import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/colors';

const { width, height } = Dimensions.get('window');

export default WelcomeScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.appName}>Plantey.Shop</Text>
            <Text style={styles.appPromise}>Plant a {"\n"}tree for life </Text>
            <Image style={styles.image} source={require('./../assets/images/sansevera-cylindricaaaa-removebg-preview.png')} />
            <Text style={styles.appDeliveryTime}>
                Worldwide delivery {"\n"}within 10-15 days
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate('App')
                }}
            >
                <Text style={styles.buttonText}>Go</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    appName: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
    },
    appPromise: {
        fontSize: 45,
        fontWeight: '800',
        textAlign: 'center',
        flexWrap: 'wrap',
    },
    image: {
        height: height / 2,
        marginVertical: 20,
        resizeMode: 'contain',
    },
    appDeliveryTime: {
        fontSize: 17,
        textAlign: 'center',
        fontWeight: '500'
    },
    button: {
        backgroundColor: colors.primary,
        marginTop: 20,
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        elevation: 1
    },
    buttonText: {
        fontSize: 18,
        color: colors.white,
        fontWeight: '600',
        textTransform: 'uppercase',
    }
});