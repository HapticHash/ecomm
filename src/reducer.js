export const initialState = {
    basket: [
        {
            id:"002",
            title:"USB C Hub 14in1 MacBook Pro Adapter 4K HDMI/VGA/ RJ45 Gigabit Ethernet/ 3.5mm Audio/ 100W PD/USB C Data Port/ 6 USB Ports/SD/TF Card Reader for MacBook/Pro/Air/ChromeBook/Samsung Galaxy and More",
            price:56.99,
            rating:4,
            image:"https://images-na.ssl-images-amazon.com/images/I/61XSU6Mo2AL._AC_SX679_.jpg",
    }
],
    user: null,
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return { 
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            console.log("hello")
            let newBasket = [...state.basket]

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
                )

            if (index >= 0) {
                newBasket.splice(index, 1)
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as its not there`
                )
            }
            return { 
                ...state, 
                basket: newBasket,
            }
        default:
            return state;
    }
}

export default reducer;