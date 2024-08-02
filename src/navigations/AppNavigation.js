import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../constants/colors';
import App from '../../App';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: '#eee',
            }}
        >
            <Stack.Screen
                name="Home"
                component={App}
                options={{
                    title: 'Accueil',
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}