export function getUserSubscriptionData() {
    return UserSubData;
}

export function getUserSubscriptionById(id){

    return UserSubData.find(item => item.id === id);
}


// Subscription List 

export const UserSubData = [
    {
        id: '001',
        name: 'Netflix Family',
        date: 'Jan 2',
        price: '-$19.99',
        renewal_type: '/month',
        img: require('../assets/netflix-32.png')
    }, 
    {
        id: '002',
        name: 'Spotify Premium',
        date: 'Jan 3',
        price: '-$39.99',
        renewal_type: '/month',
        img: require('../assets/spotify-32.png')
    },
    {
        id: '003',
        name: 'Youtube Premium',
        date: 'Jan 2',
        price: '-$19.99',
        renewal_type: '/month',
        img: require('../assets/youtube-32.png')
    }, 
    {
        id: '004',
        name: 'Amazon Prime',
        date: 'Jan 2',
        price: '-$9.99',
        renewal_type: '/month',
        img: require('../assets/amazon-32.png')
    },   
    {
        id: '005',
        name: 'Shopify Plus',
        date: 'Jan 4',
        price: '-$39.99',
        renewal_type: '/month',
        img: require('../assets/shopify-32.png')
    },


];