type Transaction = {
    date: string
    amount: number
    status: "success" | "pending" | "failed"
    transactionId: string
}

const statuses: Transaction["status"][] = ["success", "pending", "failed"]

export const transactions: Transaction[] = Array.from({ length: 30 }, (_, i) => {
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
    const randomAmount = Math.floor(Math.random() * 900) + 100 // 100–999 USD
    const day = (i % 28) + 1
    const month = "Oct"
    const year = 2025

    return {
        date: `${day} ${month}, ${year}`,
        amount: randomAmount,
        status: randomStatus,
        transactionId: `TXN-${Math.floor(100000 + Math.random() * 900000)}`,
    }
})
