import { useLayoutEffect } from 'react';
import { FlatList, View, Text, Image, Button, TouchableOpacity} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationHelpersContext } from '@react-navigation/native';
import SubHistoryScreen from './SubHistoryScreen';
import { getUserSubscriptionData } from '../data/user-subscription-data';


export default function SubDetailScreen({ navigation }) {
    

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    // Here we are callin the data but also calling the correct item from the array  
    // We are using the array because we want to loop through and show more than one item  
    const renderItem = ({ item }) => (
                <TouchableOpacity className="flex-row pt-2 pb-4 w-80" onPress={() => navigation.navigate("History", {
                    itemId: item['id']
                })}>
                    {/* Here we are setting the source of the image as item img for the array */}
                    <View className="flex-none pt-1">
                        <Image
                        source={item['img']}
                        />
                    </View>
                    <View className="flex-auto pl-2">
                        <Text className="text-gray-400">{item['date']}</Text>
                        <Text>{ item['name'] }</Text>
                    </View>
                    <View>
                        <Text>{item['price']}</Text>
                        <Text className="text-gray-400">{item['renewal_type']}</Text>
                    </View>
                </TouchableOpacity>
    );    



    return (
        <View className="flex-column justify-center items-center mt-40">
            <View className="items-center">
                <Text className="text-3xl mb-7">Subscriptions</Text>
                <Text className="text-5xl mb-4">$ 310.00</Text> 
            </View>
            <View className="flex-row my-2">
                <Text className="text-gray-600 pr-1">Spending &bull;</Text>
                <Text className="text-gray-600">Jan 2023</Text>
            </View>
            <View className="flex-row p-7 mt-20">
                <Text className="flex-1 pl-4 text-lg">Your Subscriptions</Text>
                <View className="">
                    <Button 
                        icon={
                        <Ionicons name="chevron-down" size={20} color="white" 
                        />
                        }
                        title="This month" 
                        color={"#4146ff"} 
                    />
                </View>
            </View>
            {/* Here we are calling the data getUserSubscriptionData */}
            {/* This data is responsible for keeping track of the subscriptions that a user has subscribed to */}
            <FlatList 
                data={getUserSubscriptionData()}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

                {/* End Title */}
                {/* <TouchableOpacity className="flex-row pt-2 pb-4" onPress={() => navigation.navigate("History")}>
                    <View className="flex-none pl-10 pt-1">
                        <Image
                        source={require('../assets/netflix-32.png')}
                        />
                    </View>
                    <View className="flex-auto pl-2">
                        <Text className="text-gray-400">Jan 24</Text>
                        <Text>Netflix Family Plan</Text>
                    </View>
                    <View className="pr-10">
                        <Text>- $12.99</Text>
                        <Text className="text-gray-400">/month</Text>
                    </View>
                </TouchableOpacity>
                <View className="flex-row pb-4">
                    <View className="flex-none pl-10 pt-1"> 
                        <Image  
                        source={require('../assets/spotify-32.png')}
                        />
                    </View>
                    <View className="flex-auto pl-2">
                        <Text className="text-gray-400">Jan 2</Text>
                        <Text >Spotify Premium</Text>
                    </View>
                    <View className="pr-10">
                        <Text>- $16.99</Text>
                        <Text className="text-gray-400">/month</Text>
                    </View>
                </View>
                <View className="flex-row pb-4">
                    <View className="flex-none pl-10 pt-1"> 
                        <Image  
                        source={require('../assets/amazon-32.png')}
                        />
                    </View>
                    <View className="flex-auto pl-2">
                        <Text className="text-gray-400">Jan 4</Text>
                        <Text>Amazon Prime</Text>
                    </View>
                    <View className="pr-10">
                        <Text>- $9.99</Text>
                        <Text className="text-gray-400">/month</Text>
                    </View>
                </View>
                <View className="flex-row pb-4">
                    <View className="flex-none pl-10 pt-1"> 
                        <Image  
                        source={require('../assets/youtube-32.png')}
                        />
                    </View>
                    <View className="flex-auto pl-2">
                        <Text className="text-gray-400">Jan 5</Text>
                        <Text>Youtube Premium</Text>
                    </View>
                    <View className="pr-10">
                        <Text>- $12.99</Text>
                        <Text className="text-gray-400">/month</Text>
                    </View>
                </View>
                <View className="flex-row pb-4">
                    <View className="flex-none pl-10 pt-1"> 
                        <Image  
                        source={require('../assets/shopify-32.png')}
                        />
                    </View>
                    <View className="flex-auto pl-2">
                        <Text className="text-gray-400">Jan 6</Text>
                        <Text>Shopify Plus</Text>
                    </View>
                    <View className="pr-10"> 
                        <Text>- $32.99</Text>
                        <Text className="text-gray-400">/month</Text>
                    </View>
                </View> */}
        </View>
    );
}