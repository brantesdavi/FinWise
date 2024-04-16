export interface Transaction {
    transactionId?: string,
    spendOrIncome: boolean,
    title: string,    
    price: number,
    date: Date
    createdAd?: Date,


    categoryId?: number,
    userId: string,

    recurrenceUnit?: String,
    quantity?: Number,
    endDate?: Date

}