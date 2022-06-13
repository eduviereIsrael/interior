  const PRODUCTS = [
    {
        name: 'Table Sets',
        id: 1,
        price: 350,
        description: "This beautiful dining table set includes Dining table and Four beautifully crafted chairs. A great addition to spice up your decor. This Dining set can be used at restaurants or in homes. They are durable and made out of high-quality materials that transform into a classy and unique design. Add a touch of class to your living space and enjoy untold comfort in a beautiful ambiance. Quality is what we stand for.",
        image: 'assets/images/tablesets.png'
    },
    {
        name: 'Wall Chair',
        id: 2,
        price: 329,
        description: "with classic design, the very best for your home decor and comfort. It's a strong and stylish Dining table which gives you more rest of mind cause it doesn't easily breaks or expires. Dining Table standard quality has everything to  offer in definition of a home, boldness of any Home uniqueness .",
        image: 'assets/images/wallchair.png'
    },
    {
        name: 'Cushion Chair',
        id: 3,
        price: 199,
        description: "This Cervical neck stretcher is made of dense and soft foam, provides sturdy, lightweight, and comfortable base, gives you great comfort with the just-right firmness and softness The gentle stretching action with multi point which targets tender areas in the neck, lower head, providing stretcher and to release stressors on your body.",
        image: 'assets/images/cushionchair.png'
    },
];

export function getproduct(id) {
    return PRODUCTS.find(
      (product) => product.id === id
    );
}

export default PRODUCTS;