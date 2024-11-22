# Transaction tester

Send a transaction to the local node

## Usage

```sh
cd utils
yarn install

# ./link.sh if you want to link you want to work with your current changes
# make sure that you are running yarn run build:watch on the root folder so the packages are up to date
# ./link.sh
```

- Edit the `prepareMessage` function to create the message that you want to test.

```sh
yarn run dev
```

- If success, it will log:

```sh
Success sign transaction
Success sign transaction
```

- If error, it will log the transaction result.

## Requirements

- `heliosd` node running
- `enabled-unsafe-cors` set as `true` (`~/.heliosd/config/app.toml` or `--api.enabled-unsafe-cors true`)
- rest api (`1317`) enabled (`~/.heliosd/config/app.toml` or `--api.enabled true`)
- some coins (`heliosd tx bank send mykey helios14rajuselkxsvqtqv20lamd08t8zxg8qdrlvp8x 100helios --keyring-backend test --fees=20ahelios`)

## Note

Wallet address:

- Hex: 0xa8fB2e433fb1A0c02C0C53FFdDB5e759C4641C0D
- Helios: helios14rajuselkxsvqtqv20lamd08t8zxg8qdrlvp8x
