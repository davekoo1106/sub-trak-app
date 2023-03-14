import { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, SafeAreaView, Button } from 'react-native';


import Ionicons from '@expo/vector-icons/Ionicons';
import MyListItem from '../components/MyListItem';

import { getSubscriptionData } from '../data/subscription-data';
import { Text } from '@rneui/themed';


export default function SubListScreen ({ navigation }) {


    const renderItem = ({ item }) => (
        <MyListItem itemData={ item } navigatorRef={ navigation }  />
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


    return ( 
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Add Subscription</Text>
            <View style={styles.searchbar}>
                <Ionicons style={styles.searchicon} name="search" size={20} color="grey"/>
                    <TextInput
                        placeholder='Search by company'
                        keyboardType='default'
                    />
            </View> 
            <View className="flex-1 mt-16">
                <FlatList className="min-h-screen min-w-full px-8"
                    data={getSubscriptionData()}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'left',
        justifyContent: 'flex-start',
        marginBottom: 30,
        width: '100%',
        paddingTop: 60,
    }, 
    header: {
        fontSize: 30,
        paddingBottom: 10,
    },
    searchbar: {
        backgroundColor: '#d3d3d3',
        flex: 1,
        flexDirection: 'row',
        width: 210,
        maxHeight: 35,
        alignItems: 'center', 
        borderRadius: 8,
    },
    searchicon: {
        paddingRight: 20,
        paddingLeft: 10,
    },
    item: {
        backgroundColor: 'black',
        padding: 40, 
        marginVertical: 20,
    },  
    title: {
        fontSize: 15,
        margin: 5,
    },
})