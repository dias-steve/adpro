// check if exist in the cart
export const existingCartItem =  ({
    prevCartItems,
    nextCartItem
}) => {
    // on vérifie si le document ID match avec un de notre panier
    return prevCartItems.find(
        cartItem => cartItem.productId === nextCartItem.productId
    );
    //add check variations
}

export const handleAddToCart = ({
    prevCartItems, // liste des produits déjà dans notre panier
    nextCartItem // produit à ajouter
}) => {

    const quantityIncrement = 1;
    // test si le produit existe déjà dans notre panier
    const cartItemExists = existingCartItem({ prevCartItems, nextCartItem});

    if(cartItemExists) {
        return prevCartItems.map(cartItem => 
                // si le document ID = aux ID du nouveau produit alors on incrémente 
                cartItem.productId == nextCartItem.productId
                    ?{
                        ...cartItem,
                        quantity: cartItem.quantity + quantityIncrement // on incrémenete la quantité du cart Item et on le retourne
                    } : cartItem // sinon on change pas et on return le cartItem
                    
            );
    }
    // si c'est bien un produit qui n'est pas déjà dans notre panier 
    return [
        ...prevCartItems,
        {
            ...nextCartItem,
            quantity: quantityIncrement
        }
    ];
};