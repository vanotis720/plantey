import React, { useCallback, useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'react-native-image-picker';
import { colors } from '../constants/colors';
import { API } from '../constants/services';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';

const Avatar = ({ user, freshUserToken }) => {
    const [avatarUri, setAvatarUri] = useState(user.avatar_base64);
    const [loading, setLoading] = useState(false);

    const options = {
        title: 'Sélectionnez une image',
        options: {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false,
        },
    };

    const handleChangeAvatar = useCallback(() => {
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response?.assets?.length > 0) {
                const selectedImageUri = response.assets[0].uri;
                setAvatarUri(selectedImageUri);
                uploadAvatar(selectedImageUri, response.assets[0].type);
            }
        });
    }, []);

    const uploadAvatar = async (uri, type) => {
        const formData = new FormData();
        formData.append('avatar', {
            uri,
            name: 'avatar.jpg',
            type: type
        });

        setLoading(true);
        try {
            const response = await axios.post(`${API.user}/upload-avatar`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${user.access_token}`,
                },
            });

            user.avatar_base64 = response.data.data.avatar_base64;
            freshUserToken(user);
        } catch (e) {
            setAvatarUri(user.avatar_base64 ?? null);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Spinner
                cancelable={true}
                visible={loading}
                color={colors.secondary}
                textContent={'Téléversement en cours...'}
                textStyle={styles.spinnerTextStyle}
            />
            <TouchableOpacity
                onPress={handleChangeAvatar}
                style={styles.avatarContainer}
            >
                <Image
                    resizeMode="cover"
                    source={avatarUri != null ? { uri: avatarUri } : require('../../assets/user.png')} style={styles.avatar}
                />
                <View style={styles.iconOverlay}>
                    <Icon name="camera" size={20} color={colors.secondary} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'baseline'
    },
    avatarContainer: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.primary,
    },
    iconOverlay: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 5,
    },
    spinnerTextStyle: {
        color: colors.secondary,
    },
});

export default Avatar;
