import { colors } from '../constants/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import { Feather, MaterialIcons, AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    backgroundColor: colors.gray,
                    margin: 10,
                    height: 70,
                    borderRadius: 20,
                    elevation: 1,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen name="Favorite"
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="favorite-border" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Scan"
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="scan1" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="shopping-bag" size={30} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" size={30} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}