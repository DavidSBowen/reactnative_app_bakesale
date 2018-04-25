import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

import { priceDisplay } from './../util';

class DealDetail extends React.Component {
    static propTypes = {
        deal: PropTypes.object.isRequired,
    };


    render() {
        const { deal } = this.props;

        return (
            <View style={styles.list}>
                <View key={deal.key} style={styles.dealDetailContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: deal.media[0] }} />
                    <View style={styles.textContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>{deal.title}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <View style={styles.causeNameContainer}>
                                <Text style={styles.causeNameText}>{deal.cause.name}</Text>
                            </View>
                            <View style={styles.priceContainer}>
                                <Text style={styles.priceText}>{priceDisplay(deal.price)}</Text>
                            </View>
                        </View>
                    </View>
                    {/* <Text>...</Text> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#ccc',
        flex: 1,
        width: '100%',
        paddingTop: 40,
        paddingBottom: 10,
    },
    dealDetailContainer: {
        backgroundColor: '#eee',
        marginHorizontal: 15,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 150,
    },
    textContainer: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#666',
    },
    titleContainer: {
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5,
    },
    infoContainer: {
        flexDirection: 'row',
    },
    causeNameContainer: {
        flex: 1,
    },
    causeNameText: {
        fontSize: 12,
    },
    priceContainer: {
        flex: 1,
    },
    priceText: {
        fontSize: 14,
        textAlign: 'right',
    },
})

export default DealDetail;