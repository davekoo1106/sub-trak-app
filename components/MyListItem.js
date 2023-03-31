
import { useState } from 'react';
import { View, Text } from 'react-native';
import { ListItem, Avatar, Button, Overlay } from '@rneui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function MyListItem ({ itemData }) {

    //Setting a new state variable called visibleAlert 
    //
    const [visibleAlert, setVisibleAlert] = useState(false);


    return (
        <ListItem>
            {/* This will set the avatar of the list on the search page */}
            {/* Essentially we are grabbing the itemData and calling the img so that we can set the image */}
            <Avatar 
                source={itemData.img} 
            />
            
            <ListItem.Content>
                <Text className="text-blue-900 font-medium">{itemData.name} </Text>
            </ListItem.Content> 
            
            {/* Setting the button */}
            <Button 
                color={'#1e3a8a'}
                icon= {{
                    name: 'add-circle',
                    type: 'ionicon',
                    color: '#f1f1f1',
                    size: 20,
                }}
                // We are setting an onPress so that once clicked the overlay will appear. We are calling the itemData id and name and storing it in into detailId and detailName which will be called again
                iconPosition='right'
                disabled={!itemData.active}
                onPress={() => setVisibleAlert(true, {
                    detailId: itemData.id,
                    detailName: itemData.name
                })}
            />

            {/* Once the button has been clicked, an overlay will appear stating that the subscription has been added */}
            <View>
                <Overlay isVisible={visibleAlert}>
                    <Ionicons className="pb-4" name="close-outline" size={25} onPress={() => setVisibleAlert(false, {detailId: itemData.id})} />
                    <Text>{itemData.name} has been addded to your subscriptions.</Text>
                </Overlay>
            </View>
        </ListItem>
    );
}