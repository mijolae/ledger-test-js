import TransportNodeHid from "@ledgerhq/hw-transport-node-hid";
import TerraApp, { ERROR_CODE } from "@terra-money/ledger-terra-js";
import { cli } from "cli-ux";

// path required for Terra Address
const path = [44, 330, 0, 0, 0];

async function example() {
  // initialize a connection to ledger Terra App
  const transport = await TransportNodeHid.open("");
  const appTerra = new TerraApp(transport);
  await appTerra.initialize();

  // GetVersion returns the Terra App Version, whether the device is locked or not, and if it is on Test Mode
  const response = await appTerra.getVersion();
  cli.log(`App Version ${response.major}.${response.minor}.${response.patch}`);
  cli.log(`Device Locked: ${response.device_locked}`);
  cli.log(`Test mode: ${response.test_mode}`);

  // Now it is possible to access all commands in the app.
  // GetAddressAndPublicKey returns the public Terra address of the ledger
  const result = await appTerra.getAddressAndPubKey(path, "terra");
  if (result.return_code !== ERROR_CODE.NoError) {
    cli.log(`Error [${result.return_code}] ${result.error_message}`);
    return;
  }

  return result;
}

example().then(
  (result) => {
    cli.log("Terra Address: ", result.bech32_address);
  },
  (e) => {
    cli.error(e);
  }
);
