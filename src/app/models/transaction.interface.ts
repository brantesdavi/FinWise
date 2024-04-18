export interface Transaction {
    transactionId?: string,
    spendOrIncome: boolean,
    title: string,    
    price: number,
    date: Date
    createdAd?: Date,


    categoryId?: number,
    userId: string,

    frequencyUnit?: String,
    frequency?: Number,
    endDate?: Date

}