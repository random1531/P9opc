export type Plant = {
    name: string,
    category: string,
    id: string,
    light: number,
    water: number,
    cover: string,
    price: number,
    description: string
}
export type CartItem = {
    name: string,
    price: number,
    amount: number
}

export type paymentDataProps = {
    amount: number,
    success: boolean,
    currency: string,
    status: string,
    timestamp: string,
    transactionId: string,
   
}
export type paymentMethodProps = {
    cardNumber: string,
    expiryDate: string,
    cvv: string,
    cardholderName: string
}

export type paymentResponse = {
    transactionId: string,
    amount: number,
    timestamp: string
}

export type paymentDataCall = {
    amount: number,
    cardNumber: string,
    expiryDate: string,
    cvv: string,
    cardholderName: string,
    
}

export type paymentDataResponse = {
      amount: number,  
     cardNumber: string,
    expiryDate: string,
    cvv: string,
    cardholderName: string,
}