# NFT project using PSP34

This is an example nft project using ink! smart contract. The project is generated with Openbrush wizard for PSP34 with added PayableMinted trait.

### 🏗️ How to use - Contracts

##### Requirements

This contract was build and tested with rust with nightly-2023-03-13 toolchain and cargo-contract version 2.2.1.

```
cargo +nightly-2023-03-13 install --force --locked cargo-contract@2.2.1
```

##### Build and deploy

Build the contract with

```
yarn compile
```

Then deploy contract using https://contracts-ui.substrate.io/

##### 💫 Run integration test

First start your local node (https://github.com/paritytech/substrate-contracts-node). And then:

```sh
yarn
yarn compile
yarn test
```
