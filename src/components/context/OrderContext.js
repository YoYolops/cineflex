import { useState, createContext, useEffect } from 'react';

const OrderContext = createContext({});

export function OrderProvider({ children }) {
    const [ selectedSeats, setSelectedSeats ] = useState([]);
    const [ orderData, setOrderData ] = useState(null);

    useEffect(() => {
        orderData
            ? window.location.pathname = "/sucess"
            : void(0)
    }, [orderData])

    function addSelectedSeat(seat) {
        const newSeats = [...selectedSeats, seat];
        console.log(newSeats)
        setSelectedSeats(newSeats);
    }

    function removeSelectedSeat(seat) {
        const newSeats = [...selectedSeats]
        const indexRemocao = newSeats.indexOf(seat);
        newSeats.splice(indexRemocao, 1);
        console.log(newSeats)
        setSelectedSeats(newSeats);
    }

    function confirmOrder(order) {
        setOrderData(order)
    }

    return (
        <OrderContext.Provider value={{
            selectedSeats,
            addSelectedSeat,
            removeSelectedSeat,
            confirmOrder
        }}>
            { children }
        </OrderContext.Provider>
    )
}

export default OrderContext;