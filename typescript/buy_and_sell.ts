export default function BuyAndSell(prices: number[]): number {
  let index = 0
  let current = index + 1
  let max_profit = 0

  while (index < prices.length) {
    let profit = prices[current] - prices[index]
    if (profit > max_profit) {
      max_profit = profit
    }
    if (current == prices.length ) {
      index++
      current = index
    }
    current++
  }
  return max_profit
}

