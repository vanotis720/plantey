import { colors } from '../constants/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Favorite" component={() => {

            }} />
            <Tab.Screen name="Scan" component={() => {

            }} />
            <Tab.Screen name="Cart" component={() => {

            }} />
            <Tab.Screen name="Account" component={() => {

            }} />
        </Tab.Navigator>
    );
}