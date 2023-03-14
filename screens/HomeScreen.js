// import { useNavigation } from '@react-navigation/native';
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

            <SafeAreaView style={styles.container}>
                <Text className="text-4xl mt-6 mb-3 pt-7">Welcome, User</Text>
                <Text style={styles.subheading}>Your cards</Text>
                <Image style={styles.heroImage} 
                    source={require('../assets/mastercard.png')}
                />
                {/* End Header */}

                <View className="flex-1 flex-row items-center  pt-16">
                    <Text className="pr-24">Recent subscriptions</Text>
                    <Text 
                        onPress={() => navigation.navigate('Statistics')}>
                        View All
                    </Text> 
                    <View className="p-1">
                        <Ionicons name="arrow-forward-outline" size={18}/>
                    </View>
                </View>

                
                {/* End Title */}

                {/* Creating the list that displays recent subscriptions on the home page  */}
                <View className="flex-row pb-4">
                    <View className="flex-none pl-10 pt-1"> 
                        <Image  
                        source={require('../assets/netflix-32.png')}
                        />
                    </View>
                    <View className="flex-auto pl-2">
                        <Text className="text-gray-400">Jan 1</Text>
                        <Text>Netflix</Text>
                    </View>
                    <View className="pr-10">
                        <Text>$12.99</Text>
                        <Text className="text-gray-400">/month</Text>
                    </View>
                </View>
                <View className="flex-row pb-4">
                    <View className="flex-none pl-10 pt-1"> 
                        <Image  
                        source={require('../assets/spotify-32.png')}
                        />
                    </View>
                    <View className="flex-auto pl-2">
                        <Text className="text-gray-400">Jan 2</Text>
                        <Text>Spotify</Text>
                    </View>
                    <View className="pr-10">
                        <Text>$16.99</Text>
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
                        <Text>Amazon</Text>
                    </View>
                    <View className="pr-10">
                        <Text>$9.99</Text>
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
                        <Text>Youtube</Text>
                    </View>
                    <View className="pr-10">
                        <Text>$12.99</Text>
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
                        <Text>Shopify</Text>
                    </View>
                    <View className="pr-10"> 
                        <Text>$32.99</Text>
                        <Text className="text-gray-400">/month</Text>
                    </View>
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
        marginBottom: 10, 
        padding: 25,
    }, 
    subheading: {
        fontSize: 20,
        marginLeft: 30,
        marginBottom: 20,
    },
    heroImage: {
        width: 330,
        height: 210,
    },
    textBox: {
        backgroundColor: '#c0c0c0',
        marginTop: 40,
        borderRadius: 10,
    },

    textboxitems: {
        fontSize: 17,
        justifyContent: 'flex-start',
    },
    textboxbutton: {
        flex: 1,
        color: '#0E4C92',
        fontSize: 15,
        textAlign: 'center',
    }

})