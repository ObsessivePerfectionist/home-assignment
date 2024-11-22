"use server";

import { Account } from "../models/accounts";

const listAccountsUrl = "https://api.atlar.com/financial-data/v2/accounts"
const accountTag = "account"
const username = "AvahI5yjCWUV43vu67Ka"
const password = "oRpiDBaluISG0aSGhu8a_5_WQ3x0oNb9Ggr51G--TgJ7wSQb5k9LxkpLE3BMWAhf20ei"
const test = "https://api.atlar.com/financial-data/v2/accounts \ -u 'AvahI5yjCWUV43vu67Ka:oRpiDBaluISG0aSGhu8a_5_WQ3x0oNb9Ggr51G--TgJ7wSQb5k9LxkpLE3BMWAhf20ei'"

export const listBalance = async (accountId: string) => {
    try{
        const response = await fetch(listAccountsUrl+`/${accountId}/balances`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            },
        });
        if(!response.ok) {
            throw new Error("HTTP response error")
        }
        const data = await response.json();
        const balance = data.items;
        return balance;
    }
    catch (error) {
        console.debug(error);
    }
};


export const listAccountsAction = async () => {
    try{
        const response = await fetch(listAccountsUrl, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            },
        });
        if(!response.ok) {
            throw new Error("HTTP response error")
        }
        return (await response.json()) as Account[];
    }
    catch (error) {
        console.debug(error);
    }
};