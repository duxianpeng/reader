import React from 'react'
import {
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation';
import ShelfScreen from './Shelf'
import MarketScreen from './Market'
import CommunityScreen from './Community'
import MineScreen from './Mine'

const TabNavigator = createBottomTabNavigator({
    Shelf: ShelfScreen,
    Market: MarketScreen,
    Community: CommunityScreen,
    Mine: MineScreen
});

export default TabNavigator;