
class GoodsItem {
    constructor(title = 'default title', price = 0, img = 'img/no-image.jpg') {
        this.title = title;
        this.price = price;
        this.img = img;
    }
    render() {
        return `
        <div class="goods-item">
        <img class="img" src="${this.img}" alt="${this.title}">
        <h3 class="productTitle">${this.title}</h3>
        <p class="productPrice">${this.price}</p>
        <button class="addButton">Добавить</button>
        </div>`;
    }
}


//const goodsItem = new GoodsItem('coat', 300)

class GoodsList {
    constructor() {
        this.goods = [];
        this.fetchGoods();
        this.render();
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150, img: "images/shirt.jpg" },
            { title: 'Socks', price: 50, img: "images/2.jpg" },
            { title: 'Jacket', price: 350, img: "images/3.jpg" },
        ];
    }
    render() {
        const goodsItems = this.goods.map(({ title, price, img }) => {
            const goodsItem = new GoodsItem(title, price, img);
            return goodsItem.render()
        });
        document.querySelector('.goods-list').insertAdjacentHTML('beforeend', goodsItems.join(''));
    }
    CalcAllProducts() {
        let totalPrice = 0;
        this.goods.forEach((_good) => {
            if (_good.price !== undefined) {
                totalPrice += _good.price
            }
            console.log(totalPrice)
        })
    }

}
onload = () => {
    const goodsList = new GoodsList();
    goodsList.CalcAllProducts()
}

class BasketItem { //класс для элементов корзины
    constructor(title = 'default title', price = 0, img = 'img/no-image.jpg') {
        this.title = title;
        this.price = price;
        this.img = img;
    }
}

class Basket { //класс для самой корзины
    constructor() { }
    addToBasket() { } //метод для добавления товаров в корзину
    deleteFromBasket() { } //метод для удаления товаров из корзины
    addNumber() { } //увеличения числа товаров в самой корзине
}
