# LedgerxTerrain Sample Project

This project was focused on creating a connection with a Ledger through a Terra app. With `@ledgerhq/hw-transport-node-hid` and `@terra-money/ledger-terra-js` a connection is able to be established and access all features that will enable signing on a Ledger device for Terra applications.

## How to Run:

1. **Connect Your Ledger Device.**<br/>
   Ensure that you have the Terra app installed. It will be neccessary to confirm your address as well as sign transacations. You can download the Terra app through the Manager on Ledger Live.
2. **Put your Ledger in Developer Mode.**<br/>
   This will be for security purposes. If you are unsure of how to do so, check the Ledger documentation [here](https://developers.ledger.com/docs/live-app/developer-mode/).
3. **Unlock your device and open the Terra app.**
4. **Compile and run the project.**<br/>
   Run the following:

   ```
   npx tsc
   node dist/app.js
   ```

   You should receive an output similar to the following:

   ```
   App Version 1.1.3
   Device Locked: false
   Test mode: false
   Terra Address: {TERRA_ADDRESS_HERE}
   ```
