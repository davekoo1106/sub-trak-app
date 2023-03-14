import { useLayoutEffect } from 'react';
import { View, Text, Image, Button, TouchableOpacity} from 'react-native';
import {Avatar} from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationHelpersContext } from '@react-navigation/native';


export default function ProfileScreen({ navigation }) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <View className="flex-1 items-center justify-center">
            <View className="flex-column pt-28 w-80 mb-20">
                <Text className="text-3xl mb-7">Your Account</Text>
                <View className="flex-row items-center">
                    <Avatar 
                        source={require('../assets/avatar-32.png')}
                    />
                    <Text className="text-2xl ml-3">User</Text>
                </View>
            </View>
            {/* End Header */}

            {/* This is the list of options on the profile screen */}
            {/* I plan on building upon this down the road and making it fully functional */}
            <View className="flex-1 w-80">

                <View className="flex-row justify-between">
                    <View className="flex-row pb-5 justify-between items-center">
                    <Image className="mr-3"
                    source={require('../assets/settings-24.png')}
                    />
                        <Text className="text-lg">Account</Text>
                    </View>
                    <View className="ml-10">
                        <Ionicons 
                        name="chevron-forward"
                        size={20}
                        />
                    </View>
                </View>

                <View className="flex-row justify-between">
                    <View className="flex-row pb-5 justify-between items-center">
                        <Image className="mr-3"
                        source={require('../assets/eye-24.png')}
                        />
                        <Text className="text-lg">Appearance</Text>
                    </View>
                    <View className="ml-10">
                        <Ionicons 
                        name="chevron-forward"
                        size={20}
                        />
                    </View>
                </View>

                <View className="flex-row justify-between">
                    <View className="flex-row pb-5 justify-between items-center">
                        <Image className="mr-3" 
                        source={require('../assets/privacy-24.png')}
                        />
                        <Text className="text-lg">Privacy and Security</Text>
                    </View>
                    <View className="ml-10">
                        <Ionicons 
                        name="chevron-forward"
                        size={20}
                        />
                    </View>
                </View>

                <View className="flex-row justify-between">
                    <View className="flex-row pb-5 justify-between items-center">
                        <Image className="mr-3"
                        source={require('../assets/payment-24.png')}
                        />
                        <Text className="text-lg">Linked Cards</Text>
                    </View>
                    <View className="ml-10">
                        <Ionicons 
                        name="chevron-forward"
                        size={20}
                        />
                    </View>
                </View>

                <View className="flex-row justify-between">
                    <View className="flex-row pb-5 justify-between items-center">
                        <Image className="mr-3" 
                        source={require('../assets/help-24.png')}
                        />
                        <Text className="text-lg">Help and Support</Text>
                    </View>
                    <View className="ml-10">
                        <Ionicons 
                        name="chevron-forward"
                        size={20}
                        />
                    </View>
                </View>

                <View className="flex-row justify-between">
                    <View className="flex-row pb-5 justify-between items-center">
                        <Image className="mr-3" 
                        source={require('../assets/info-24.png')}
                        />
                        <Text className="text-lg">About</Text>
                    </View>
                    <View className="ml-10">
                        <Ionicons 
                        name="chevron-forward"
                        size={20}
                        />
                    </View>
                </View>
            {/* End Settings List */}
            </View>
        </View>


    )


}