
import { useLayoutEffect } from 'react';
import { StyleSheet, View, Text, Button, Image, SafeAreaView, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen ({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return ( 

            <SafeAreaView className="bg-white">
                <View className="flex flex-row justify-between items-center px-8 pt-16 pb-6">
                    <View>
                        <Text className="text-3xl font-medium text-blue-900">Hello, Bryan!</Text>
                    </View>
                    <View>
                        <Image 
                            className="w-[50px] h-[50px] rounded-full"
                            source={require('../assets/headshot.jpg')}
                        />
                    </View>
                </View>
                <View>
                    <Text className="text-blue-900 font-medium text-lg pl-10 mb-5">Your cards</Text>
                </View>
                <View>
                    
                </View>
                <View className="flex items-center">
                    <Image  
                    className="w-[330px] h-[210px] z-10 mt-10 drop-shadow-lg"
                    source={require('../assets/mastercard.png')}
                    />
                    <View className="w-[330px] bottom-[250px] rounded-md bg-blue-900 z-9 flex flex-row justify-between">
                        <Text className="text-white text-lg p-2 font-medium h-20">**** 8942</Text>
                        <Text className="text-white text-lg p-2 font-medium h-20">Exp. 11/24</Text>
                    </View>
                </View>
                {/* End Header */}

                <View className="flex flex-row items-center m-[-10px]">
                    <Text className="pr-24 text-blue-900 text-lg font-bold flex-1 text-center">Recent subscriptions</Text>
                    <View className="flex flex-row pr-5">
                        <Text 
                            className="text-blue-900 font-bold"
                            onPress={() => navigation.navigate('Statistics')}>
                            View All
                        </Text> 
                        <View className="pr-3">
                            <Ionicons name="arrow-forward-outline" size={18} color={'#1E3A8A'}/>
                        </View>
                    </View>
                </View>

                
                {/* End Title */}

                {/* Creating the list that displays recent subscriptions on the home page  */}
            
                <View className="flex-row pb-3 pt-3 rounded-lg m-0.5">
                    <View className="flex-none pl-10 pt-1"> 
                        <Image  
                        source={require('../assets/netflix-32.png')}
                        />
                    </View>
                    <View className="flex-auto pl-2">
                        <Text className="text-gray-400">Jan 1</Text>
                        <Text className="text-blue-900 font-medium">Netflix</Text>
                    </View>
                    <View className="pr-10">
                        <Text className="text-blue-900 font-medium">$12.99</Text>
                        <Text className="text-gray-400">/month</Text>
                    </View>
                </View>
                <View className="flex-row pb-3 pt-3 rounded-lg m-0.5">
                    <View className="flex-none pl-10 pt-1"> 
                        <Image  
                        source={require('../assets/spotify-32.png')}
                        />
                    </View>
                    <View className="flex-auto pl-2 rounded-lg">
                        <Text className="text-gray-400">Jan 2</Text>
                        <Text className="text-blue-900 font-medium">Spotify</Text>
                    </View>
                    <View className="pr-10">
                        <Text className="text-blue-900 font-medium">$16.99</Text>
                        <Text className="text-gray-400">/month</Text>
                    </View>
                </View>
                <View className="flex-row pb-3 pt-3 rounded-lg m-0.5">
                    <View className="flex-none pl-10 pt-1"> 
                        <Image  
                        source={require('../assets/amazon-32.png')}
                        />
                    </View>
                    <View className="flex-auto pl-2">
                        <Text className="text-gray-400">Jan 4</Text>
                        <Text className="text-blue-900 font-medium">Amazon</Text>
                    </View>
                    <View className="pr-10">
                        <Text className="text-blue-900 font-medium">$9.99</Text>
                        <Text className="text-gray-400">/month</Text>
                    </View>
                </View>
                <View className="flex-row pb-3 pt-3 rounded-lg m-0.5">
                    <View className="flex-none pl-10 pt-1"> 
                        <Image  
                        source={require('../assets/youtube-32.png')}
                        />
                    </View>
                    <View className="flex-auto pl-2">
                        <Text className="text-gray-400">Jan 5</Text>
                        <Text className="text-blue-900 font-medium">Youtube</Text>
                    </View>
                    <View className="pr-10">
                        <Text className="text-blue-900 font-medium">$12.99</Text>
                        <Text className="text-gray-400">/month</Text>
                    </View>
                </View>
                <View className="flex-row pb-3 pt-3 rounded-lg m-0.5">
                    <View className="flex-none pl-10 pt-1"> 
                        <Image  
                        source={require('../assets/shopify-32.png')}
                        />
                    </View>
                    <View className="flex-auto pl-2">
                        <Text className="text-gray-400">Jan 6</Text>
                        <Text className="text-blue-900 font-medium">Shopify</Text>
                    </View>
                    <View className="pr-10"> 
                        <Text className="text-blue-900 font-medium">$32.99</Text>
                        <Text className="text-gray-400">/month</Text>
                    </View>
                </View>
            </SafeAreaView>
    );
}
