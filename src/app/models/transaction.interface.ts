export interface Transaction {
    transactionId?: string,
    spendOrIncome: boolean,
    category?: string,
    title: string,
    price: number,
    date: Date
    userId: string
}