import React from "react";
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../constants/colors";
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

export default Plant = ({ item }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <ImageBackground source={item.image} style={styles.images}>
                <Text style={styles.itemName}>
                    {item.name}
                </Text>
                <Text style={styles.itemPrice}>
                    $ {item.price}
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonCart}>
                        <Text style={styles.buttonCartText}>Add to cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonFavorite}>
                        <MaterialIcons name="favorite-border" size={30} color={colors.white} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width / 1.5,
        backgroundColor: colors.gray,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 10,
    },
    images: {
        height: '90%',
        width: '90%',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 10,
        right: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonCart: {
        backgroundColor: colors.white,
        flex: 1,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 10,
    },
    buttonCartText: {
        fontWeight: '600',
        fontSize: 14,
    },
    buttonFavorite: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.black,
        borderRadius: 30,
    },
    itemName: {
        position: 'absolute',
        left: -30,
        top: height / 5,
        transform: [{ rotate: '270deg' }],
        fontSize: 20,
        fontWeight: '800',
    },
    itemPrice: {
        position: 'absolute',
        fontSize: 19,
        fontWeight: '600',
        right: 10,
    }
});