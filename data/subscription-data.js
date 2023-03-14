
export function getSubscriptionData() {
    return SubData;
}

export function getSubscriptionById(id){


    return SubData.find(item => item.id === id);
}


// Subscription List 
// This is the data that is displayed on the search page where a user is able to search for companies

export const SubData = [
    {
        id: '001',
        name: 'Netflix',
        active: true,
        img: require('../assets/netflix-32.png')
    }, 
    {
        id: '002',
        name: 'Spotify',
        active: true,
        img: require('../assets/spotify-32.png')
    },
    {
        id: '003',
        name: 'Twitter',
        active: true,
        img: require('../assets/twitter-32.png')
    }, 
    {
        id: '004',
        name: 'Youtube',
        active: true,
        img: require('../assets/youtube-32.png')
    }, 
    {
        id: '005',
        name: 'Amazon',
        active: true,
        img: require('../assets/amazon-32.png')
    },   
    {
        id: '006',
        name: 'Tinder',
        active: true,
        img: require('../assets/tinder-32.png')
    },
    {
        id: '007',
        name: 'Shopify',
        active: true,
        img: require('../assets/shopify-32.png')
    },
    {
        id: '008',
        name: 'Adobe',
        active: true,
        img: require('../assets/adobe-32.png')
    },    


];