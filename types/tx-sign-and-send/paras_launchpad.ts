/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import { txSignAndSend } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/paras_launchpad';
import type BN from 'bn.js';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";


export default class Methods {
	private __nativeContract : ContractPromise;
	private __keyringPair : KeyringPair;
	private __apiPromise: ApiPromise;

	constructor(
		apiPromise: ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
	}

	/**
	* setCode
	*
	* @param { Array<(number | string | BN)> } codeHash,
	*/
	"setCode" (
		codeHash: Array<(number | string | BN)>,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "setCode", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [codeHash], __options);
	}

	/**
	* approve
	*
	* @param { ArgumentTypes.AccountId } operator,
	* @param { ArgumentTypes.Id | null } id,
	* @param { boolean } approved,
	*/
	"approve" (
		operator: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id | null,
		approved: boolean,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::approve", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [operator, id, approved], __options);
	}

	/**
	* transfer
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { ArgumentTypes.Id } id,
	* @param { Array<(number | string | BN)> } data,
	*/
	"transfer" (
		to: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id,
		data: Array<(number | string | BN)>,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::transfer", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [to, id, data], __options);
	}

	/**
	* totalSupply
	*
	*/
	"totalSupply" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::totalSupply", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* ownerOf
	*
	* @param { ArgumentTypes.Id } id,
	*/
	"ownerOf" (
		id: ArgumentTypes.Id,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::ownerOf", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [id], __options);
	}

	/**
	* collectionId
	*
	*/
	"collectionId" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::collectionId", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* balanceOf
	*
	* @param { ArgumentTypes.AccountId } owner,
	*/
	"balanceOf" (
		owner: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::balanceOf", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [owner], __options);
	}

	/**
	* allowance
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @param { ArgumentTypes.AccountId } operator,
	* @param { ArgumentTypes.Id | null } id,
	*/
	"allowance" (
		owner: ArgumentTypes.AccountId,
		operator: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id | null,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::allowance", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [owner, operator, id], __options);
	}

	/**
	* tokenByIndex
	*
	* @param { (string | number | BN) } index,
	*/
	"tokenByIndex" (
		index: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Enumerable::tokenByIndex", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [index], __options);
	}

	/**
	* ownersTokenByIndex
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @param { (string | number | BN) } index,
	*/
	"ownersTokenByIndex" (
		owner: ArgumentTypes.AccountId,
		index: (string | number | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Enumerable::ownersTokenByIndex", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [owner, index], __options);
	}

	/**
	* getAttribute
	*
	* @param { ArgumentTypes.Id } id,
	* @param { Array<(number | string | BN)> } key,
	*/
	"getAttribute" (
		id: ArgumentTypes.Id,
		key: Array<(number | string | BN)>,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Metadata::getAttribute", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [id, key], __options);
	}

	/**
	* owner
	*
	*/
	"owner" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::owner", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* renounceOwnership
	*
	*/
	"renounceOwnership" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::renounceOwnership", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* transferOwnership
	*
	* @param { ArgumentTypes.AccountId } newOwner,
	*/
	"transferOwnership" (
		newOwner: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::transferOwnership", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [newOwner], __options);
	}

	/**
	* setMintingStatus
	*
	* @param { (number | string | BN) | null } mintingStatusIndex,
	*/
	"setMintingStatus" (
		mintingStatusIndex: (number | string | BN) | null,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::setMintingStatus", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [mintingStatusIndex], __options);
	}

	/**
	* getLaunchpadFee
	*
	*/
	"getLaunchpadFee" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::getLaunchpadFee", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* getAvailableToWithdrawProject
	*
	*/
	"getAvailableToWithdrawProject" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::getAvailableToWithdrawProject", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* getMintingStatus
	*
	*/
	"getMintingStatus" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::getMintingStatus", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* getPublicSaleEndAt
	*
	*/
	"getPublicSaleEndAt" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::getPublicSaleEndAt", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* price
	*
	*/
	"price" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::price", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* withdrawProject
	*
	*/
	"withdrawProject" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::withdrawProject", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* getLaunchpadTreasuryAddress
	*
	*/
	"getLaunchpadTreasuryAddress" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::getLaunchpadTreasuryAddress", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* getProjectTreasuryAddress
	*
	*/
	"getProjectTreasuryAddress" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::getProjectTreasuryAddress", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* addAccountToPresale
	*
	* @param { ArgumentTypes.AccountId } accountId,
	* @param { (number | string | BN) } mintAmount,
	*/
	"addAccountToPresale" (
		accountId: ArgumentTypes.AccountId,
		mintAmount: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::addAccountToPresale", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [accountId, mintAmount], __options);
	}

	/**
	* setMaxMintAmount
	*
	* @param { (number | string | BN) } maxAmount,
	*/
	"setMaxMintAmount" (
		maxAmount: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::setMaxMintAmount", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [maxAmount], __options);
	}

	/**
	* presalePrice
	*
	*/
	"presalePrice" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::presalePrice", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* addAccountToPrepresaleBatch
	*
	* @param { Array<[ArgumentTypes.AccountId, (number | string | BN)]> } accountIdMintAmounts,
	*/
	"addAccountToPrepresaleBatch" (
		accountIdMintAmounts: Array<[ArgumentTypes.AccountId, (number | string | BN)]>,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::addAccountToPrepresaleBatch", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [accountIdMintAmounts], __options);
	}

	/**
	* mintNext
	*
	*/
	"mintNext" (
		__options ? : GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::mintNext", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* getAvailableToWithdrawLaunchpad
	*
	*/
	"getAvailableToWithdrawLaunchpad" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::getAvailableToWithdrawLaunchpad", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* withdrawLaunchpad
	*
	*/
	"withdrawLaunchpad" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::withdrawLaunchpad", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* prepresalePrice
	*
	*/
	"prepresalePrice" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::prepresalePrice", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* getPublicSaleStartAt
	*
	*/
	"getPublicSaleStartAt" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::getPublicSaleStartAt", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* getMaxMintAmount
	*
	*/
	"getMaxMintAmount" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::getMaxMintAmount", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* maxSupply
	*
	*/
	"maxSupply" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::maxSupply", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* addAccountToPrepresale
	*
	* @param { ArgumentTypes.AccountId } accountId,
	* @param { (number | string | BN) } mintAmount,
	*/
	"addAccountToPrepresale" (
		accountId: ArgumentTypes.AccountId,
		mintAmount: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::addAccountToPrepresale", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [accountId, mintAmount], __options);
	}

	/**
	* addAccountToPresaleBatch
	*
	* @param { Array<[ArgumentTypes.AccountId, (number | string | BN)]> } accountIdMintAmounts,
	*/
	"addAccountToPresaleBatch" (
		accountIdMintAmounts: Array<[ArgumentTypes.AccountId, (number | string | BN)]>,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::addAccountToPresaleBatch", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [accountIdMintAmounts], __options);
	}

	/**
	* getPrepresaleStartAt
	*
	*/
	"getPrepresaleStartAt" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::getPrepresaleStartAt", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* getPresaleStartAt
	*
	*/
	"getPresaleStartAt" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::getPresaleStartAt", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* getAccountPrepresaleMintingAmount
	*
	* @param { ArgumentTypes.AccountId } accountId,
	*/
	"getAccountPrepresaleMintingAmount" (
		accountId: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::getAccountPrepresaleMintingAmount", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [accountId], __options);
	}

	/**
	* mint
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } mintAmount,
	*/
	"mint" (
		to: ArgumentTypes.AccountId,
		mintAmount: (number | string | BN),
		__options ? : GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::mint", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [to, mintAmount], __options);
	}

	/**
	* mintProject
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } mintAmount,
	*/
	"mintProject" (
		to: ArgumentTypes.AccountId,
		mintAmount: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::mintProject", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [to, mintAmount], __options);
	}

	/**
	* getAccountPresaleMintingAmount
	*
	* @param { ArgumentTypes.AccountId } accountId,
	*/
	"getAccountPresaleMintingAmount" (
		accountId: ArgumentTypes.AccountId,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::getAccountPresaleMintingAmount", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [accountId], __options);
	}

	/**
	* setMultipleAttributes
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { Array<[string, string]> } metadata,
	*/
	"setMultipleAttributes" (
		tokenId: ArgumentTypes.Id,
		metadata: Array<[string, string]>,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Traits::setMultipleAttributes", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [tokenId, metadata], __options);
	}

	/**
	* getAttributeCount
	*
	*/
	"getAttributeCount" (
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Traits::getAttributeCount", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* setBaseUri
	*
	* @param { string } uri,
	*/
	"setBaseUri" (
		uri: string,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Traits::setBaseUri", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [uri], __options);
	}

	/**
	* getAttributes
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { Array<string> } attributes,
	*/
	"getAttributes" (
		tokenId: ArgumentTypes.Id,
		attributes: Array<string>,
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Traits::getAttributes", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [tokenId, attributes], __options);
	}

	/**
	* getAttributeName
	*
	* @param { (number | string | BN) } index,
	*/
	"getAttributeName" (
		index: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Traits::getAttributeName", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [index], __options);
	}

	/**
	* tokenUri
	*
	* @param { (number | string | BN) } tokenId,
	*/
	"tokenUri" (
		tokenId: (number | string | BN),
		__options ? : GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Traits::tokenUri", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [tokenId], __options);
	}

}