import { useLayoutEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { getUserSubscriptionById } from '../data/user-subscription-data';

export default function SubHistoryScreen ({ route, navigation }) {

    const { itemId } = route.params;
    const network_data = getUserSubscriptionById(itemId);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
        });
    }, []);



    return ( 
        <View className="flex-1 flex-column justify-center items-center mt-20">
            <Text className="text-3xl mb-5">Payment History</Text>
            <View className="pb-4">
                <Image 
                className="pb-4 w-20 h-20"
                source={network_data.img}
                />
            </View>
            <Text className="text-4xl">{network_data.name }</Text>
            <View className="flex-2 flex-row pb-5">
                <Text className="text-gray-600 pr-1">Next payment</Text>
                <Text className="text-blue-700">Feb 24 2023</Text>
            </View>
            <View className="flex-1">
                <Button className="" color="#4146ff" title='Cancel Subscription'/>
            </View>

            {/* History of payments List */}

                <View className="flex-row">
                    <Text className="flex-auto px-10 pb-5 text-xl">History</Text>
                </View>

                {/* End Title */}
            
                <View className="flex-row pb-4">
                    <View className="flex-none pl-10 pt-1">
                        <Image  
                        source={network_data.img}
                        />
                    </View>
                    <View className="flex-auto pl-2">
                        <Text className="text-gray-400">{network_data.date}</Text>
                        <Text >{network_data.name}</Text>
                    </View>
                    <View className="pr-10">
                        <Text>- $12.99</Text>
                        <Text className="text-gray-400">{network_data.renewal_type}</Text>
                    </View>
                </View>

                {/* End Item 1 */}
                
                <View className="flex-row pb-4">
                    <View className="flex-none pl-10 pt-1">
                        <Image  
                        source={network_data.img}
                        />
                    </View>
                    <View className="flex-auto pl-2">
                        <Text className="text-gray-400">{network_data.date}</Text>
                        <Text >{network_data.name}</Text>
                    </View>
                    <View className="pr-10">
                        <Text>- $12.99</Text>
                        <Text className="text-gray-400">{network_data.renewal_type}</Text>
                    </View>
                </View>
                {/* End Item 2 */}

                <View className="flex-row pb-4">
                    <View className="flex-none pl-10 pt-1">
                        <Image  
                        source={network_data.img}
                        />
                    </View>
                    <View className="flex-auto pl-2">
                        <Text className="text-gray-400">{network_data.date}</Text>
                        <Text >{network_data.name}</Text>
                    </View>
                    <View className="pr-10">
                        <Text>- $12.99</Text>
                        <Text className="text-gray-400">{network_data.renewal_type}</Text>
                    </View>
                </View>
                {/* End Item 3 */}

                <View className="flex-row pb-4">
                    <View className="flex-none pl-10 pt-1">
                        <Image  
                        source={network_data.img}
                        />
                    </View>
                    <View className="flex-auto pl-2">
                        <Text className="text-gray-400">{network_data.date}</Text>
                        <Text >{network_data.name}</Text>
                    </View>
                    <View className="pr-10">
                        <Text>- $12.99</Text>
                        <Text className="text-gray-400">{network_data.renewal_type}</Text>
                    </View>
                </View>

                {/* End Item 4 */}

                <View className="flex-row pb-4">
                    <View className="flex-none pl-10 pt-1">
                        <Image  
                        source={network_data.img}
                        />
                    </View>
                    <View className="flex-auto pl-2">
                        <Text className="text-gray-400">{network_data.date}</Text>
                        <Text >{network_data.name}</Text>
                    </View>
                    <View className="pr-10">
                        <Text>- $12.99</Text>
                        <Text className="text-gray-400">{network_data.renewal_type}</Text>
                    </View>
                </View>
        </View>
    );
}