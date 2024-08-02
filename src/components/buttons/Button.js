import React from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from "../../constants/colors";

export default function Button({ name, action, isLoading, color = 'white', icon = null, background = null }) {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, {
                    backgroundColor: background ?? colors.primary
                }]}
                onPress={action}
                disabled={isLoading}
            >
                {
                    isLoading ? <ActivityIndicator size={'large'} color={color} /> : (
                        <View style={styles.textIcon}>
                            <MaterialCommunityIcons name={icon} size={20} color={color} />
                            <Text style={[styles.name, { color: color }]}>{name}</Text>
                        </View>

                    )
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
        marginStart: 5,
        fontWeight: 'bold'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 15
    },
    textIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});