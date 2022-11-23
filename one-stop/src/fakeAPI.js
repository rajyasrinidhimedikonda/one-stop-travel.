

class Kit {
    constructor(id, pics, name, price, items){
        this.id = id
        this.pics = pics
        this.name = name
        this.price = price
        this.items = items
    }
}


const popularKits = [
    new Kit(1, ['../images/'], "Japan Travel Kit", '$22.00', ['item 1', 'item 2', 'item 3', 'item 4']),
    new Kit(2, ['../images/'], "New York Kit", '$25.00', ['item 1', 'item 2', 'item 3', 'item 4']),
    new Kit(3, ['../images/'], "Hawaii Kit", '$20.00', ['item 1', 'item 2', 'item 3', 'item 4']),
    new Kit(4, ['../images/'], "London Travel Kit", '$22.00', ['item 1', 'item 2', 'item 3', 'item 4']),
    new Kit(5, ['../images/'], "Miami Travel Kit", '$15.00', ['item 1', 'item 2', 'item 3', 'item 4']),
    new Kit(6, ['../images/'], "LA Travel Kit", '$30.00', ['item 1', 'item 2', 'item 3', 'item 4']),
]

let cart = []



function getCartItems() {
    return cart
}


function addToCart(kit){
    cart.push(kit)
}

function removeFromCart(id){
    cart.forEach(kit => {
        if (kit.id === id) {
            cart.pop(kit)
        }
    });
}

