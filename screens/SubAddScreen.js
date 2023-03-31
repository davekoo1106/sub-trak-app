import { useLayoutEffect, useState } from 'react';
import { View, Text, Image, Button, TouchableOpacity, Pressable, } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function SubAddScreen({ route , navigation }) {

    // Once the add new card button is clicked, a new card (image) appears

    let card_counter = 1;
    if(route.params !== undefined) {
        card_counter = route.params.hasOwnProperty('loopImage') ? route.params.loopImage : card_counter;
    }
    
    const cards = [];

    for(let i = 0; i < card_counter; i++) {

        cards.push(
            <View className="flex-1 items-center mt-10 mb-52" key={i}>
                <Image
                className="items-center w-80 h-48" 
                source={require('../assets/mastercard.png')}
                />
            </View>
        )
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
        });
    }, []);

    return (
        <View className="flex-1 bg-white">
            {/* This is in charge of adding a new card */}
            {/* We state that on press we want it to navigate to the addCard screen where a user will be able to add card information */}
            <View className="mb-3">
                {cards}
            </View>
            <View>
                <View className="flex-1 items-center">
                    <View className="w-80 h-44 bg-gray-200 rounded-lg m-3 justify-center items-center">
                        <TouchableOpacity className="flex-1 justify-center items-center" onPress= {() => navigation.navigate("Card")}>
                        {/* <TouchableOpacity className="flex-1 justify-center items-center" onPress= {addNewCard}> */}
                            <Ionicons name="add-circle" color={'#1E3A8A'} size={45} /> 
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="flex-1 items-center">
                    <View className="w-40 h-44 justify-end mt-20">
                        <Button
                        color={'#1E3A8A'}
                        title='Scan Card'
                        />
                    </View>
                </View>
            </View>
        </View>

    )

}