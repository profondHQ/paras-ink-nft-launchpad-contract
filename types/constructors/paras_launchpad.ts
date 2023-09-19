import {CodePromise} from "@polkadot/api-contract";
import type {KeyringPair} from "@polkadot/keyring/types";
import Files from "fs";
import type {ApiPromise} from "@polkadot/api";
import {_genValidGasLimitAndValue, _signAndSend, SignAndSendSuccessResponse} from "@727-ventures/typechain-types";
import type {ConstructorOptions} from "@727-ventures/typechain-types";
import type {WeightV2} from "@polkadot/types/interfaces";
import type * as ArgumentTypes from '../types-arguments/paras_launchpad';
import type BN from 'bn.js';

export default class Constructors {
	readonly nativeAPI: ApiPromise;
	readonly signer: KeyringPair;

	constructor(
		nativeAPI: ApiPromise,
		signer: KeyringPair,
	) {
		this.nativeAPI = nativeAPI;
		this.signer = signer;
	}

	/**
	* new
	*
	* @param { Array<(number | string | BN)> } name,
	* @param { Array<(number | string | BN)> } symbol,
	* @param { Array<(number | string | BN)> } baseUri,
	* @param { (number | string | BN) } maxSupply,
	* @param { (string | number | BN) } prepresalePricePerMint,
	* @param { (string | number | BN) } presalePricePerMint,
	* @param { (string | number | BN) } pricePerMint,
	* @param { (number | string | BN) } prepresaleStartAt,
	* @param { (number | string | BN) } presaleStartAt,
	* @param { (number | string | BN) } publicSaleStartAt,
	* @param { (number | string | BN) | null } publicSaleEndAt,
	* @param { (string | number | BN) } launchpadFee,
	* @param { ArgumentTypes.AccountId } projectTreasury,
	* @param { ArgumentTypes.AccountId } launchpadTreasury,
	*/
   	async "new" (
		name: Array<(number | string | BN)>,
		symbol: Array<(number | string | BN)>,
		baseUri: Array<(number | string | BN)>,
		maxSupply: (number | string | BN),
		prepresalePricePerMint: (string | number | BN),
		presalePricePerMint: (string | number | BN),
		pricePerMint: (string | number | BN),
		prepresaleStartAt: (number | string | BN),
		presaleStartAt: (number | string | BN),
		publicSaleStartAt: (number | string | BN),
		publicSaleEndAt: (number | string | BN) | null,
		launchpadFee: (string | number | BN),
		projectTreasury: ArgumentTypes.AccountId,
		launchpadTreasury: ArgumentTypes.AccountId,
		__options ? : ConstructorOptions,
   	) {
   		const __contract = JSON.parse(Files.readFileSync("./artifacts/paras_launchpad.contract").toString());
		const code = new CodePromise(this.nativeAPI, __contract, __contract.source.wasm);
		const gasLimit = (await _genValidGasLimitAndValue(this.nativeAPI, __options)).gasLimit as WeightV2;

		const storageDepositLimit = __options?.storageDepositLimit;
			const tx = code.tx["new"]!({ gasLimit, storageDepositLimit, value: __options?.value }, name, symbol, baseUri, maxSupply, prepresalePricePerMint, presalePricePerMint, pricePerMint, prepresaleStartAt, presaleStartAt, publicSaleStartAt, publicSaleEndAt, launchpadFee, projectTreasury, launchpadTreasury);
			let response;

			try {
				response = await _signAndSend(this.nativeAPI.registry, tx, this.signer, (event: any) => event);
			}
			catch (error) {
				console.log(error);
			}

		return {
			result: response as SignAndSendSuccessResponse,
			// @ts-ignore
			address: (response as SignAndSendSuccessResponse)!.result!.contract.address.toString(),
		};
	}
}