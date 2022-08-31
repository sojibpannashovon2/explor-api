const tumi = { id: 1, name: 'Md Arifur Rahman', address: 'Dhaka' }
console.log(tumi);

const jonson = JSON.stringify(tumi);
// console.log(jonson);

const shop = {
    shopOnwer: 'Md Arifur Rahman',

    address: {
        street: 'munsurabad',
        house: '1/2, road-10',
        country: 'Bangladesh'
    },

    product: ['tv', 'motor-cycle', 'oven', 'ratna'],
    revenue: 450000,
    isOpen: true,
    isClose: false
}


console.log(shop);

const jonson2 = JSON.stringify(shop);
console.log(jonson2);

const backTObject = JSON.parse(jonson2);
console.log(backTObject);
