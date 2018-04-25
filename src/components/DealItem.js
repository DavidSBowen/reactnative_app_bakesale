import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { priceDisplay } from './../util';

class DealItem extends React.Component {
    static propTypes = {
        deal: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired,
    };

    handlePress = () => {
        this.props.onPress(this.props.deal.key);
    };

    render() {
        const { deal } = this.props;

        return (
            <TouchableOpacity
                key={deal.key}
                style={styles.dealItemContainer}
                onPress={this.handlePress}>
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
            </TouchableOpacity>
        );
    };
};

const styles = StyleSheet.create({
    dealItemContainer: {
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

export default DealItem;