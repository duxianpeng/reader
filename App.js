import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import HomeScreen from './src/page/Home'
import NewFeatureScreen from './src/page/NewFeature'


const AppNavigator = createStackNavigator({
    NewFeature: {
      screen: NewFeatureScreen
    },
    Home: {
      screen: HomeScreen
    }
})

export default createAppContainer(AppNavigator)
