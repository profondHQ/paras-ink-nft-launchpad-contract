/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryOkJSON, queryJSON, handleReturnType } from '@727-ventures/typechain-types';
import { txSignAndSend } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/paras_launchpad';
import type * as ReturnTypes from '../types-returns/paras_launchpad';
import type BN from 'bn.js';
//@ts-ignore
import {ReturnNumber} from '@727-ventures/typechain-types';
import {getTypeDescription} from './../shared/utils';
// @ts-ignore
import type {EventRecord} from "@polkadot/api/submittable";
import {decodeEvents} from "../shared/utils";


export default class Methods {
	private __nativeContract : ContractPromise;
	private __keyringPair : KeyringPair;
	private __callerAddress : string;
	private __apiPromise: ApiPromise;

	constructor(
		apiPromise : ApiPromise,
		nativeContract : ContractPromise,
		keyringPair : KeyringPair,
	) {
		this.__apiPromise = apiPromise;
		this.__nativeContract = nativeContract;
		this.__keyringPair = keyringPair;
		this.__callerAddress = keyringPair.address;
	}

	/**
	* setCode
	*
	* @param { Array<(number | string | BN)> } codeHash,
	* @returns { void }
	*/
	"setCode" (
		codeHash: Array<(number | string | BN)>,
		__options: GasLimit,
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
	* @returns { void }
	*/
	"approve" (
		operator: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id | null,
		approved: boolean,
		__options: GasLimit,
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
	* @returns { void }
	*/
	"transfer" (
		to: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id,
		data: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::transfer", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [to, id, data], __options);
	}

	/**
	* totalSupply
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"totalSupply" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34::totalSupply", [], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'paras_launchpad')); });
	}

	/**
	* ownerOf
	*
	* @param { ArgumentTypes.Id } id,
	* @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
	*/
	"ownerOf" (
		id: ArgumentTypes.Id,
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34::ownerOf", [id], __options, (result) => { return handleReturnType(result, getTypeDescription(20, 'paras_launchpad')); });
	}

	/**
	* collectionId
	*
	* @returns { Result<ReturnTypes.Id, ReturnTypes.LangError> }
	*/
	"collectionId" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.Id, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34::collectionId", [], __options, (result) => { return handleReturnType(result, getTypeDescription(22, 'paras_launchpad')); });
	}

	/**
	* balanceOf
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @returns { Result<number, ReturnTypes.LangError> }
	*/
	"balanceOf" (
		owner: ArgumentTypes.AccountId,
		__options: GasLimit,
	): Promise< QueryReturnType< Result<number, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34::balanceOf", [owner], __options, (result) => { return handleReturnType(result, getTypeDescription(23, 'paras_launchpad')); });
	}

	/**
	* allowance
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @param { ArgumentTypes.AccountId } operator,
	* @param { ArgumentTypes.Id | null } id,
	* @returns { Result<boolean, ReturnTypes.LangError> }
	*/
	"allowance" (
		owner: ArgumentTypes.AccountId,
		operator: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id | null,
		__options: GasLimit,
	): Promise< QueryReturnType< Result<boolean, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34::allowance", [owner, operator, id], __options, (result) => { return handleReturnType(result, getTypeDescription(24, 'paras_launchpad')); });
	}

	/**
	* tokenByIndex
	*
	* @param { (string | number | BN) } index,
	* @returns { Result<Result<ReturnTypes.Id, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"tokenByIndex" (
		index: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Result<ReturnTypes.Id, ReturnTypes.PSP34Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34Enumerable::tokenByIndex", [index], __options, (result) => { return handleReturnType(result, getTypeDescription(25, 'paras_launchpad')); });
	}

	/**
	* ownersTokenByIndex
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @param { (string | number | BN) } index,
	* @returns { Result<Result<ReturnTypes.Id, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"ownersTokenByIndex" (
		owner: ArgumentTypes.AccountId,
		index: (string | number | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Result<ReturnTypes.Id, ReturnTypes.PSP34Error>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34Enumerable::ownersTokenByIndex", [owner, index], __options, (result) => { return handleReturnType(result, getTypeDescription(25, 'paras_launchpad')); });
	}

	/**
	* getAttribute
	*
	* @param { ArgumentTypes.Id } id,
	* @param { Array<(number | string | BN)> } key,
	* @returns { Result<Array<number> | null, ReturnTypes.LangError> }
	*/
	"getAttribute" (
		id: ArgumentTypes.Id,
		key: Array<(number | string | BN)>,
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Array<number> | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34Metadata::getAttribute", [id, key], __options, (result) => { return handleReturnType(result, getTypeDescription(27, 'paras_launchpad')); });
	}

	/**
	* owner
	*
	* @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
	*/
	"owner" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "ownable::owner", [], __options, (result) => { return handleReturnType(result, getTypeDescription(29, 'paras_launchpad')); });
	}

	/**
	* renounceOwnership
	*
	* @returns { void }
	*/
	"renounceOwnership" (
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::renounceOwnership", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* transferOwnership
	*
	* @param { ArgumentTypes.AccountId } newOwner,
	* @returns { void }
	*/
	"transferOwnership" (
		newOwner: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::transferOwnership", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [newOwner], __options);
	}

	/**
	* setMintingStatus
	*
	* @param { (number | string | BN) | null } mintingStatusIndex,
	* @returns { void }
	*/
	"setMintingStatus" (
		mintingStatusIndex: (number | string | BN) | null,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::setMintingStatus", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [mintingStatusIndex], __options);
	}

	/**
	* getLaunchpadFee
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getLaunchpadFee" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getLaunchpadFee", [], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'paras_launchpad')); });
	}

	/**
	* getAvailableToWithdrawProject
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getAvailableToWithdrawProject" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getAvailableToWithdrawProject", [], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'paras_launchpad')); });
	}

	/**
	* getMintingStatus
	*
	* @returns { Result<Array<number>, ReturnTypes.LangError> }
	*/
	"getMintingStatus" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Array<number>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getMintingStatus", [], __options, (result) => { return handleReturnType(result, getTypeDescription(34, 'paras_launchpad')); });
	}

	/**
	* getPublicSaleEndAt
	*
	* @returns { Result<number | null, ReturnTypes.LangError> }
	*/
	"getPublicSaleEndAt" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<number | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getPublicSaleEndAt", [], __options, (result) => { return handleReturnType(result, getTypeDescription(35, 'paras_launchpad')); });
	}

	/**
	* price
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"price" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::price", [], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'paras_launchpad')); });
	}

	/**
	* withdrawProject
	*
	* @returns { void }
	*/
	"withdrawProject" (
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::withdrawProject", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* getLaunchpadTreasuryAddress
	*
	* @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
	*/
	"getLaunchpadTreasuryAddress" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getLaunchpadTreasuryAddress", [], __options, (result) => { return handleReturnType(result, getTypeDescription(29, 'paras_launchpad')); });
	}

	/**
	* getProjectTreasuryAddress
	*
	* @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
	*/
	"getProjectTreasuryAddress" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnTypes.AccountId, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getProjectTreasuryAddress", [], __options, (result) => { return handleReturnType(result, getTypeDescription(29, 'paras_launchpad')); });
	}

	/**
	* addAccountToPresale
	*
	* @param { ArgumentTypes.AccountId } accountId,
	* @param { (number | string | BN) } mintAmount,
	* @returns { void }
	*/
	"addAccountToPresale" (
		accountId: ArgumentTypes.AccountId,
		mintAmount: (number | string | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::addAccountToPresale", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [accountId, mintAmount], __options);
	}

	/**
	* setMaxMintAmount
	*
	* @param { (number | string | BN) } maxAmount,
	* @returns { void }
	*/
	"setMaxMintAmount" (
		maxAmount: (number | string | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::setMaxMintAmount", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [maxAmount], __options);
	}

	/**
	* presalePrice
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"presalePrice" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::presalePrice", [], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'paras_launchpad')); });
	}

	/**
	* addAccountToPrepresaleBatch
	*
	* @param { Array<[ArgumentTypes.AccountId, (number | string | BN)]> } accountIdMintAmounts,
	* @returns { void }
	*/
	"addAccountToPrepresaleBatch" (
		accountIdMintAmounts: Array<[ArgumentTypes.AccountId, (number | string | BN)]>,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::addAccountToPrepresaleBatch", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [accountIdMintAmounts], __options);
	}

	/**
	* mintNext
	*
	* @returns { void }
	*/
	"mintNext" (
		__options: GasLimitAndRequiredValue,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::mintNext", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* getAvailableToWithdrawLaunchpad
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getAvailableToWithdrawLaunchpad" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getAvailableToWithdrawLaunchpad", [], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'paras_launchpad')); });
	}

	/**
	* withdrawLaunchpad
	*
	* @returns { void }
	*/
	"withdrawLaunchpad" (
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::withdrawLaunchpad", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* prepresalePrice
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"prepresalePrice" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<ReturnNumber, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::prepresalePrice", [], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'paras_launchpad')); });
	}

	/**
	* getPublicSaleStartAt
	*
	* @returns { Result<number, ReturnTypes.LangError> }
	*/
	"getPublicSaleStartAt" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<number, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getPublicSaleStartAt", [], __options, (result) => { return handleReturnType(result, getTypeDescription(38, 'paras_launchpad')); });
	}

	/**
	* getMaxMintAmount
	*
	* @returns { void }
	*/
	"getMaxMintAmount" (
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::getMaxMintAmount", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [], __options);
	}

	/**
	* maxSupply
	*
	* @returns { Result<number, ReturnTypes.LangError> }
	*/
	"maxSupply" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<number, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::maxSupply", [], __options, (result) => { return handleReturnType(result, getTypeDescription(38, 'paras_launchpad')); });
	}

	/**
	* addAccountToPrepresale
	*
	* @param { ArgumentTypes.AccountId } accountId,
	* @param { (number | string | BN) } mintAmount,
	* @returns { void }
	*/
	"addAccountToPrepresale" (
		accountId: ArgumentTypes.AccountId,
		mintAmount: (number | string | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::addAccountToPrepresale", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [accountId, mintAmount], __options);
	}

	/**
	* addAccountToPresaleBatch
	*
	* @param { Array<[ArgumentTypes.AccountId, (number | string | BN)]> } accountIdMintAmounts,
	* @returns { void }
	*/
	"addAccountToPresaleBatch" (
		accountIdMintAmounts: Array<[ArgumentTypes.AccountId, (number | string | BN)]>,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::addAccountToPresaleBatch", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [accountIdMintAmounts], __options);
	}

	/**
	* getPrepresaleStartAt
	*
	* @returns { Result<number, ReturnTypes.LangError> }
	*/
	"getPrepresaleStartAt" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<number, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getPrepresaleStartAt", [], __options, (result) => { return handleReturnType(result, getTypeDescription(38, 'paras_launchpad')); });
	}

	/**
	* getPresaleStartAt
	*
	* @returns { Result<number, ReturnTypes.LangError> }
	*/
	"getPresaleStartAt" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<number, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getPresaleStartAt", [], __options, (result) => { return handleReturnType(result, getTypeDescription(38, 'paras_launchpad')); });
	}

	/**
	* getAccountPrepresaleMintingAmount
	*
	* @param { ArgumentTypes.AccountId } accountId,
	* @returns { Result<number | null, ReturnTypes.LangError> }
	*/
	"getAccountPrepresaleMintingAmount" (
		accountId: ArgumentTypes.AccountId,
		__options: GasLimit,
	): Promise< QueryReturnType< Result<number | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getAccountPrepresaleMintingAmount", [accountId], __options, (result) => { return handleReturnType(result, getTypeDescription(35, 'paras_launchpad')); });
	}

	/**
	* mint
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } mintAmount,
	* @returns { void }
	*/
	"mint" (
		to: ArgumentTypes.AccountId,
		mintAmount: (number | string | BN),
		__options: GasLimitAndRequiredValue,
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
	* @returns { void }
	*/
	"mintProject" (
		to: ArgumentTypes.AccountId,
		mintAmount: (number | string | BN),
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "launchpad::mintProject", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [to, mintAmount], __options);
	}

	/**
	* getAccountPresaleMintingAmount
	*
	* @param { ArgumentTypes.AccountId } accountId,
	* @returns { Result<number | null, ReturnTypes.LangError> }
	*/
	"getAccountPresaleMintingAmount" (
		accountId: ArgumentTypes.AccountId,
		__options: GasLimit,
	): Promise< QueryReturnType< Result<number | null, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getAccountPresaleMintingAmount", [accountId], __options, (result) => { return handleReturnType(result, getTypeDescription(35, 'paras_launchpad')); });
	}

	/**
	* setMultipleAttributes
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { Array<[string, string]> } metadata,
	* @returns { void }
	*/
	"setMultipleAttributes" (
		tokenId: ArgumentTypes.Id,
		metadata: Array<[string, string]>,
		__options: GasLimit,
	){
		return txSignAndSend( this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Traits::setMultipleAttributes", (events: EventRecord) => {
			return decodeEvents(events, this.__nativeContract, "paras_launchpad");
		}, [tokenId, metadata], __options);
	}

	/**
	* getAttributeCount
	*
	* @returns { Result<number, ReturnTypes.LangError> }
	*/
	"getAttributeCount" (
		__options: GasLimit,
	): Promise< QueryReturnType< Result<number, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34Traits::getAttributeCount", [], __options, (result) => { return handleReturnType(result, getTypeDescription(23, 'paras_launchpad')); });
	}

	/**
	* setBaseUri
	*
	* @param { string } uri,
	* @returns { void }
	*/
	"setBaseUri" (
		uri: string,
		__options: GasLimit,
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
	* @returns { Result<Array<string>, ReturnTypes.LangError> }
	*/
	"getAttributes" (
		tokenId: ArgumentTypes.Id,
		attributes: Array<string>,
		__options: GasLimit,
	): Promise< QueryReturnType< Result<Array<string>, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34Traits::getAttributes", [tokenId, attributes], __options, (result) => { return handleReturnType(result, getTypeDescription(43, 'paras_launchpad')); });
	}

	/**
	* getAttributeName
	*
	* @param { (number | string | BN) } index,
	* @returns { Result<string, ReturnTypes.LangError> }
	*/
	"getAttributeName" (
		index: (number | string | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<string, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34Traits::getAttributeName", [index], __options, (result) => { return handleReturnType(result, getTypeDescription(44, 'paras_launchpad')); });
	}

	/**
	* tokenUri
	*
	* @param { (number | string | BN) } tokenId,
	* @returns { Result<string, ReturnTypes.LangError> }
	*/
	"tokenUri" (
		tokenId: (number | string | BN),
		__options: GasLimit,
	): Promise< QueryReturnType< Result<string, ReturnTypes.LangError> > >{
		return queryOkJSON( this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34Traits::tokenUri", [tokenId], __options, (result) => { return handleReturnType(result, getTypeDescription(44, 'paras_launchpad')); });
	}

}