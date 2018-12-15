import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

class NewFeatureScreen extends Component {

    render(){
        const {navigate} = this.props.navigation;

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>New Feature Screen</Text>
                <Button
                    onPress={() => navigate('Home')}
                    title={"Home"}/>
            </View>
        )
    }
}

export default NewFeatureScreen

