"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function aggregateRecords(records) {
    const aggregated = new Map();
    for (const { date, income, expenses, profit } of records) {
        if (!aggregated.has(date)) {
            aggregated.set(date, { date, income: 0, expenses: 0, profit: 0 });
        }
        const record = aggregated.get(date);
        record.income += income;
        record.expenses += expenses;
        record.profit += profit;
    }
    return Array.from(aggregated.values());
}
exports.default = aggregateRecords;
