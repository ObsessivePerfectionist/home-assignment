This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


My own documentation starts here:

Prerequisites: npm install som various packages IDE should highlight them if you don’t already have them.  It runs on localhost:3000 and uses react next with typescript to implement the frontend. All you must do is run it with npm run dev and it should work.
The instructions are straightforward. There is a short homepage with nothing much on it and the sidebar will link you to the relevant tables that would be insightful to a potential user. The button on the topbar will return you to the homepage. There is also an action button on the rows for accounts which I in the beginning wanted to use to show the balance of the account but realized quickly this would not be useful at all considering the potential user would have to go through every account with this button to find out the balance so I kept the button but made a more useful table that shows an account and its balance.
Minimum specs: RTX 4080 intel core i9 DDR4 3200 RAM

The problems I addressed in this code are the following:
"I log in to each bank every morning to verify that we do not have any account with zero or negative balance"
"I go through our transactions and check that there are no big, potentially fraudulent, pay-outs from our accounts during the past days (above ~10k EUR would be considered suspicious)"
"I go through transactions every day and make sure there are no, so called, returned payments"

The problem I did not address:
"I note the account balance for each account into my own excel sheet, then look at the trend of account balances over time to see that we're not trending aggressively downwards"

I was a bit unsure with the “I note the account balance for each account into my own excel sheet, then look at the trend of account balances over time to see that we're not trending aggressively downwards”. Was I supposed to export something to an excel file with the program or just give an overview. So, I decided to skip this one but how I think I would go about it is gone through one account balance in a list and follow the changes and list these in a table first so it is easy to see how we are trending. And then export to an excel-file with a download button maybe?

Also did not really get the conversion suggestion it was supposed to be a short assignment so I figured just listing things neatly in a table would solve some issues quickly, but it still requires the user to look. However, I deem it to be easily done with an elegant but simple table that allows for sorting in descending or ascending order making returned transactions easily noticeable. The same goes for payments that are over a certain amount. Just sort the table with the amount of money transferred. A small thing to add here would be some conversion maybe that displays everything in euros for example, but I also don’t know if that is desirable? Maybe it should be listed in their respective currencies. Flagging them might be something that could be done via highlighting or having them in a separate page/table.

I'm also a bit unsure if one api works correctly or if I used it incorrectly. Specifically it is the one with the balances. I noticed I gained several duplications in my table the first time and I thought this was my fault due to mapping accounts with balances. However I simply tried curling in git bash with a presumed accountId and it gave me several rows of the same information atleast from what I could see. Example here:

```
"items":[{"accountId":"0aa6f179-862d-41b9-8b2e-801a2a4ec504","amount":{"currency":"NOK","value":232890787,"stringValue":"2328907.87"},"id":"934441238aabfa8e3821ed5c4807e86024c9d33be8a798a49885517f1c71adcd","localDate":"2024-11-21","organizationId":"3914f49d-a843-400d-9541-cd5abc2677bb","reportedType":"CLOSE","timestamp":"2024-11-21T22:59:59.999999999Z","type":"BOOKED_ADJUSTED","version":1},{"accountId":"0aa6f179-862d-41b9-8b2e-801a2a4ec504","amount":{"currency":"NOK","value":232890787,"stringValue":"2328907.87"},"id":"800a2ff391909b1d9c7a0f0b918b5a10af0604dcc634d92682ee1d54f651e3ca","localDate":"2024-11-21","organizationId":"3914f49d-a843-400d-9541-cd5abc2677bb","reportedType":"CLOSE","timestamp":"2024-11-21T22:59:59.999999999Z","type":"BOOKED","version":1},{"accountId":"0aa6f179-862d-41b9-8b2e-801a2a4ec504","amount":{"currency":"NOK","value":232890787,"stringValue":"2328907.87"},"id":"17c6608c39c7e52fa1b7528e839255fab03ef0f1cfa9e42d6debb6968db7ea74","localDate":"2024-11-21","organizationId":"3914f49d-a843-400d-9541-cd5abc2677bb","reportedType":"CLOSE","timestamp":"2024-11-21T22:59:59.999999999Z","type":"AVAILABLE","version":1}
```


A bad part security wise is that the program has the username and password coded into the fetch requests directly which is not ideal, but I deemed it to be okay for this short assignment.
As I mentioned during the technical interview, I haven’t written frontend tests before and I’m quite unsure on how to implement correct frontend tests, but I have investigated them on YouTube and forums etc. to gain some more knowledge. I still feel quality tests are one of the hardest things to do when they test more advanced functionality.
I opted to not have comments as we did not have comments explaining functions and things that are happening in the code. I learnt this at my company as we tried to have the code itself explain the functionality which means code should be clearly written and easy to follow through. However, this is something I can change if you usually comment in the code.


