
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import ajax from './../ajax';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
        'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

class App extends Component {

    async componentDidMount() {
        const deals = await ajax.fetchInitialDeals();
        console.log(deals);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.containerText}>Bakesale!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    containerText: {
        fontSize: 30,
    }
});

export default App;