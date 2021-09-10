const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const createProductList = (products, prices) => products.map((product, index) => ({
  product: product,
  price: prices[index]
}));

const lista = createProductList(products, prices);
console.log(lista)
