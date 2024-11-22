"use server";

import { Transaction } from "../models/transactions";

const listTransactionsUrl = "https://api.atlar.com/financial-data/v2/transactions"
const transactionTag = "transaction"
const username = "AvahI5yjCWUV43vu67Ka"
const password = "oRpiDBaluISG0aSGhu8a_5_WQ3x0oNb9Ggr51G--TgJ7wSQb5k9LxkpLE3BMWAhf20ei"

export const listTransactionsAction = async () => {
    try{
        const response = await fetch(listTransactionsUrl, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            },
        });
        if(!response.ok) {
            throw new Error("HTTP response error")
        }
        return (await response.json()) as Transaction[];
    }
    catch (error) {
        console.debug(error);
    }
};