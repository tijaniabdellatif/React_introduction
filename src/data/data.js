
const timestamp = Date.now();
const date = new Date(timestamp);
const dataString = date.toLocaleString('fr-FR',{
weekday:'short',
day:'numeric',
year:'numeric',
month:'long'
});


export const dataBook = [

    {
            id:1,
            title:"Marxism",
            author:"Mark",
            date:dataString,
            price : 120,
            authorImg : 'https://picsum.photos/32/32/?random',
            urlImg : 'https://images-na.ssl-images-amazon.com/images/I/51gGgVnODsL._SX322_BO1,204,203,200_.jpg'
    },
    {
        id:2,
        title:"Title 2",
        author:"Jean",
        price:150,
        date:dataString,
        authorImg : 'https://picsum.photos/32/32/?random',
        urlImg : 'https://images-na.ssl-images-amazon.com/images/I/51gGgVnODsL._SX322_BO1,204,203,200_.jpg'

    },
    {

        id:3,
        title:"Title 3",
        author:"Janne",
        price : 150,
        date:dataString,
        authorImg : 'https://picsum.photos/32/32/?random',
        urlImg : 'https://images-na.ssl-images-amazon.com/images/I/51gGgVnODsL._SX322_BO1,204,203,200_.jpg'

    },
    
];