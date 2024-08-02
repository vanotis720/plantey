import { Dimensions, Linking, Alert, Platform } from "react-native";

export const getInitials = function (string) {
    var names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();
    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
}

export const isEmpty = function (obj) {
    return Object.keys(obj).length > 0 ? false : true;
}

export const containsObject = function (obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i].property === obj) {
            return true;
        }
    }
    return false;
}

export const formatLength = function (text, count, insertDots) {
    return text.slice(0, count) + (((text.length > count) && insertDots) ? "..." : "");
}

export const calculateFontSize = () => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    return Math.min(screenWidth, screenHeight) * 0.04;
};

export const redirectToTerms = (link) => {
    Linking.openURL(link);
}


export const callNumber = (phone) => {
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
        phoneNumber = `telprompt:${phone}`;
    }
    else {
        phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
        .then(supported => {
            if (!supported) {
                Alert.alert('Contact indisponible', 'Informations de contact non disponible')
            } else {
                return Linking.openURL(phoneNumber);
            }
        })
        .catch(err => console.log(err));
};