import { useLayoutEffect } from 'react';
import { View, Text, Image, Button, TouchableOpacity, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SubAddScreen({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
        });
    }, []);

    return (
        <View>
            {/* This is in charge of adding a new card */}
            {/* We state that on press we want it to navigate to the addCard screen where a user will be able to add card information */}
            <View className="mb-3">
                <View className="flex-1 items-center mt-10 mb-52">
                    <Image
                    className="items-center w-80 h-48" 
                    source={require('../assets/mastercard.png')}
                    />
                </View>
            </View>
            <View className="flex-1 items-center">
                <View className="w-80 h-44 bg-gray-200 rounded-lg m-3 justify-center items-center">
                    <TouchableOpacity className="flex-1 justify-center items-center" onPress= {() => navigation.navigate("Card")}>
                        <Ionicons name="add-circle" color={'#4146ff'} size={45} /> 
                    </TouchableOpacity>
                </View>
            </View>
            <View className="flex-1 items-center">
                <View className="w-40 h-44 justify-end mt-20">
                    <Button
                    color={'#4146ff'}
                    title='Scan Card'
                    />
                </View>
            </View>
        </View>
    )

}