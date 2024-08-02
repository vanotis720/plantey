import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import PlacesAutocomplete from "rn-expo-google-places-autocomplete";
import { colors } from "../../constants/colors";
import { FontAwesome } from '@expo/vector-icons';

const requestConfig = { countries: ["CD"] };


export default function AutoCompleteInput({ label = null, placeholder = null, value, setValue, setFocus, onSelected, height = 50, navigation = null }) {
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [results, setResults] = useState([]);

    const onChangeText = useCallback(
        async (text) => {
            setInputValue(text);
            try {
                let result = await PlacesAutocomplete.findPlaces(text, requestConfig);
                setResults(result.places);
            } catch (e) {
                console.log('================ PlacesAutocomplete.findPlaces ====================');
                console.log(e);
                console.log('====================================');
            }
        },
        [requestConfig],
    );

    const onPlaceSelected = useCallback(
        async (placeId) => {
            try {
                setIsLoading(true);
                const details = await PlacesAutocomplete.placeDetails(placeId);
                console.log(details);
                setIsLoading(false);
                onSelected(details);
            } catch (e) {
                console.log('================ PlacesAutocomplete.placeDetails ====================');
                console.log(e);
                console.log('====================================');
            }
        },
        [onPlaceSelected],
    );

    const handleNavigation = (destination) => {
        if (navigation) {
            return navigation.navigate(destination);
        }
    }

    useEffect(() => {
        const initializePlacesAutocomplete = () => {
            try {
                PlacesAutocomplete.initPlaces("AIzaSyDEmZhbuX7uU4nvDOIqnnGb31XecdSbjaE");
            } catch (error) {
                if (error.message === 'Network request failed') {
                    console.error('Network error occurred:', error);
                    // Handle network error (e.g., show a message to the user)
                } else {
                    console.error('Error initializing Places Autocomplete:', error.message);
                    // Handle other types of errors
                }
            }
        };

        initializePlacesAutocomplete();
    }, []);

    // const onSearchError = useCallback((error) => {
    //     console.log(error);
    // }, []);

    // const onPlaceSelected = useCallback((place) => {
    //     console.log(place);
    // }, []);

    return (
        // <>
        //     <Text style={styles.label}>
        //         Déstination
        //     </Text>

        //     <GooglePlacesAutocomplete
        //         apiKey={"AIzaSyDEmZhbuX7uU4nvDOIqnnGb31XecdSbjaE"}
        //         placeholder="Choisir la déstination"
        //         requestConfig={{ countries: ["CD"] }}
        //         onPlaceSelected={onPlaceSelected}
        //         onSearchError={onSearchError}
        //         containerStyle={{
        //             marginBottom: 15,
        //         }}
        //         searchInputStyle={{
        //             backgroundColor: colors.white
        //         }}
        //         inputContainerStyle={{
        //             height: 'auto',
        //             borderRadius: 5,
        //             // marginTop: 5,
        //             borderWidth: 0.3,
        //             borderColor: colors.gray,
        //             color: colors.secondary,
        //             backgroundColor: colors.white
        //         }}

        //     />
        // </>
        <View style={styles.inputSection}>
            {label && <Text style={styles.label}>
                {label}
            </Text>}
            <View style={styles.inputBox}>
                <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder={placeholder ?? 'Choisir la déstination'}
                    value={inputValue}
                    onFocus={() => { setFocus(1) }}
                    onChangeText={(text) => onChangeText(text)}
                    placeholderTextColor={colors.gray}
                    style={[styles.inputField, { height: height }]}
                    keyboardType='ascii-capable'
                />
                <TouchableOpacity
                    style={styles.mapIconBox}
                    onPress={() => handleNavigation("ChooseDestination")}
                >
                    <FontAwesome name="map" size={15} color={colors.white} />
                </TouchableOpacity>
            </View>
            {isLoading ? <ActivityIndicator /> : results.map((item) => {
                return (
                    <TouchableOpacity
                        key={item.placeId}
                        style={styles.resultItem}
                        onPress={() => onPlaceSelected(item.placeId)}
                    >
                        <Text >{item.fullText}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    inputSection: {
        marginBottom: 15,
    },
    label: {
        fontSize: 12,
        textTransform: 'capitalize',
        fontWeight: '600',
        color: colors.secondary
    },
    inputField: {
        borderRadius: 5,
        marginTop: 5,
        paddingStart: 10,
        borderWidth: 0.3,
        borderColor: colors.gray,
        color: colors.secondary,
        paddingEnd: 50
    },
    resultItem: {
        backgroundColor: '#f0f0f0',
        marginVertical: 3,
        padding: 8
    },
    inputBox: {
        position: 'relative',
        justifyContent: 'center',
    },
    mapIconBox: {
        position: 'absolute',
        right: 10,
        backgroundColor: colors.secondary,
        padding: 7,
        borderRadius: 30,
    },
});