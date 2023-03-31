import { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, SafeAreaView, Button, Text } from 'react-native';


import Ionicons from '@expo/vector-icons/Ionicons';
import MyListItem from '../components/MyListItem';

import { getSubscriptionData } from '../data/subscription-data';
// import { Text } from '@rneui/themed';


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
        <View className="bg-white flex-1 items-center justify-center pt-20">
            <Text className="text-2xl text-blue-900 mb-5">Add Subscription</Text>
            <View className="bg-white border-2 border-blue-900 flex-1 flex-row items-center w-[220px] max-h-[35px] pl-2 rounded-lg">
                <Ionicons name="search" size={20} color={'#1E3A8A'}/>
                    <TextInput
                        className="pl-2"
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
        </View>
    );
}