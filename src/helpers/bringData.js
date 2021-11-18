import { stock } from "../data/stock"

export const bringData = () => {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {
            if (true){
                resolve(stock);
            }
        }, 2000)
    })
}