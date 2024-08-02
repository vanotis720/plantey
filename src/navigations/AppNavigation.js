import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../constants/colors';
import WelcomeScreen from '../screens/WelcomeScreen';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {

    return (
        <Stack.Navigator
            initialRouteName="Welcome"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: '#eee',
            }}
        >
            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    title: 'Accueil',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="App"
                component={BottomNavigation}
                options={{
                    title: 'Accueil',
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}