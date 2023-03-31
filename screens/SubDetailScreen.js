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
                        <Text className="text-blue-900 font-medium">{ item['name'] }</Text>
                    </View>
                    <View>
                        <Text className="text-blue-900 font-medium">{item['price']}</Text>
                        <Text className="text-gray-400">{item['renewal_type']}</Text>
                    </View>
                    
                </TouchableOpacity>
    );    



    return (
        <View className="flex-1 flex-column justify-center items-center bg-white pt-36">
            <View>
                <Text className="text-3xl mb-7 text-blue-900 font-medium text-center">Subscriptions</Text>
                <Text className="text-5xl text-blue-900 font-medium">$ 310.00</Text> 
            </View>
            <View className="flex-row my-2">
                <Text className="text-gray-600 pr-1">Spending &bull;</Text>
                <Text className="text-gray-600">Jan 2023</Text>
            </View>

            <View className="flex-row p-7 ">
                <Text className="flex-1 pl-4 text-lg text-blue-900 font-medium ">Your Subscriptions</Text>
                <View className="">
                    <Button 
                        icon={
                        <Ionicons name="chevron-down" size={20} color="white" 
                        />
                        }
                        title="This month" 
                        color={"#1E3A8A"} 
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
        </View>
    );
}