/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit, GasLimitAndRequiredValue } from '@727-ventures/typechain-types';
import { buildSubmittableExtrinsic } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/paras_launchpad';
import type BN from 'bn.js';
import type { ApiPromise } from '@polkadot/api';



export default class Methods {
	private __nativeContract : ContractPromise;
	private __apiPromise: ApiPromise;

	constructor(
		nativeContract : ContractPromise,
		apiPromise: ApiPromise,
	) {
		this.__nativeContract = nativeContract;
		this.__apiPromise = apiPromise;
	}
	/**
	 * setCode
	 *
	 * @param { Array<(number | string | BN)> } codeHash,
	*/
	"setCode" (
		codeHash: Array<(number | string | BN)>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "setCode", [codeHash], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34::approve", [operator, id, approved], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34::transfer", [to, id, data], __options);
	}

	/**
	 * totalSupply
	 *
	*/
	"totalSupply" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34::totalSupply", [], __options);
	}

	/**
	 * ownerOf
	 *
	 * @param { ArgumentTypes.Id } id,
	*/
	"ownerOf" (
		id: ArgumentTypes.Id,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34::ownerOf", [id], __options);
	}

	/**
	 * collectionId
	 *
	*/
	"collectionId" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34::collectionId", [], __options);
	}

	/**
	 * balanceOf
	 *
	 * @param { ArgumentTypes.AccountId } owner,
	*/
	"balanceOf" (
		owner: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34::balanceOf", [owner], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34::allowance", [owner, operator, id], __options);
	}

	/**
	 * tokenByIndex
	 *
	 * @param { (string | number | BN) } index,
	*/
	"tokenByIndex" (
		index: (string | number | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34Enumerable::tokenByIndex", [index], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34Enumerable::ownersTokenByIndex", [owner, index], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34Metadata::getAttribute", [id, key], __options);
	}

	/**
	 * owner
	 *
	*/
	"owner" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "ownable::owner", [], __options);
	}

	/**
	 * renounceOwnership
	 *
	*/
	"renounceOwnership" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "ownable::renounceOwnership", [], __options);
	}

	/**
	 * transferOwnership
	 *
	 * @param { ArgumentTypes.AccountId } newOwner,
	*/
	"transferOwnership" (
		newOwner: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "ownable::transferOwnership", [newOwner], __options);
	}

	/**
	 * setMintingStatus
	 *
	 * @param { (number | string | BN) | null } mintingStatusIndex,
	*/
	"setMintingStatus" (
		mintingStatusIndex: (number | string | BN) | null,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::setMintingStatus", [mintingStatusIndex], __options);
	}

	/**
	 * getLaunchpadFee
	 *
	*/
	"getLaunchpadFee" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::getLaunchpadFee", [], __options);
	}

	/**
	 * getAvailableToWithdrawProject
	 *
	*/
	"getAvailableToWithdrawProject" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::getAvailableToWithdrawProject", [], __options);
	}

	/**
	 * getMintingStatus
	 *
	*/
	"getMintingStatus" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::getMintingStatus", [], __options);
	}

	/**
	 * getPublicSaleEndAt
	 *
	*/
	"getPublicSaleEndAt" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::getPublicSaleEndAt", [], __options);
	}

	/**
	 * price
	 *
	*/
	"price" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::price", [], __options);
	}

	/**
	 * withdrawProject
	 *
	*/
	"withdrawProject" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::withdrawProject", [], __options);
	}

	/**
	 * getLaunchpadTreasuryAddress
	 *
	*/
	"getLaunchpadTreasuryAddress" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::getLaunchpadTreasuryAddress", [], __options);
	}

	/**
	 * getProjectTreasuryAddress
	 *
	*/
	"getProjectTreasuryAddress" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::getProjectTreasuryAddress", [], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::addAccountToPresale", [accountId, mintAmount], __options);
	}

	/**
	 * setMaxMintAmount
	 *
	 * @param { (number | string | BN) } maxAmount,
	*/
	"setMaxMintAmount" (
		maxAmount: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::setMaxMintAmount", [maxAmount], __options);
	}

	/**
	 * presalePrice
	 *
	*/
	"presalePrice" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::presalePrice", [], __options);
	}

	/**
	 * addAccountToPrepresaleBatch
	 *
	 * @param { Array<[ArgumentTypes.AccountId, (number | string | BN)]> } accountIdMintAmounts,
	*/
	"addAccountToPrepresaleBatch" (
		accountIdMintAmounts: Array<[ArgumentTypes.AccountId, (number | string | BN)]>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::addAccountToPrepresaleBatch", [accountIdMintAmounts], __options);
	}

	/**
	 * mintNext
	 *
	*/
	"mintNext" (
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::mintNext", [], __options);
	}

	/**
	 * getAvailableToWithdrawLaunchpad
	 *
	*/
	"getAvailableToWithdrawLaunchpad" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::getAvailableToWithdrawLaunchpad", [], __options);
	}

	/**
	 * withdrawLaunchpad
	 *
	*/
	"withdrawLaunchpad" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::withdrawLaunchpad", [], __options);
	}

	/**
	 * prepresalePrice
	 *
	*/
	"prepresalePrice" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::prepresalePrice", [], __options);
	}

	/**
	 * getPublicSaleStartAt
	 *
	*/
	"getPublicSaleStartAt" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::getPublicSaleStartAt", [], __options);
	}

	/**
	 * getMaxMintAmount
	 *
	*/
	"getMaxMintAmount" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::getMaxMintAmount", [], __options);
	}

	/**
	 * maxSupply
	 *
	*/
	"maxSupply" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::maxSupply", [], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::addAccountToPrepresale", [accountId, mintAmount], __options);
	}

	/**
	 * addAccountToPresaleBatch
	 *
	 * @param { Array<[ArgumentTypes.AccountId, (number | string | BN)]> } accountIdMintAmounts,
	*/
	"addAccountToPresaleBatch" (
		accountIdMintAmounts: Array<[ArgumentTypes.AccountId, (number | string | BN)]>,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::addAccountToPresaleBatch", [accountIdMintAmounts], __options);
	}

	/**
	 * getPrepresaleStartAt
	 *
	*/
	"getPrepresaleStartAt" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::getPrepresaleStartAt", [], __options);
	}

	/**
	 * getPresaleStartAt
	 *
	*/
	"getPresaleStartAt" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::getPresaleStartAt", [], __options);
	}

	/**
	 * getAccountPrepresaleMintingAmount
	 *
	 * @param { ArgumentTypes.AccountId } accountId,
	*/
	"getAccountPrepresaleMintingAmount" (
		accountId: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::getAccountPrepresaleMintingAmount", [accountId], __options);
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
		__options: GasLimitAndRequiredValue,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::mint", [to, mintAmount], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::mintProject", [to, mintAmount], __options);
	}

	/**
	 * getAccountPresaleMintingAmount
	 *
	 * @param { ArgumentTypes.AccountId } accountId,
	*/
	"getAccountPresaleMintingAmount" (
		accountId: ArgumentTypes.AccountId,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "launchpad::getAccountPresaleMintingAmount", [accountId], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34Traits::setMultipleAttributes", [tokenId, metadata], __options);
	}

	/**
	 * getAttributeCount
	 *
	*/
	"getAttributeCount" (
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34Traits::getAttributeCount", [], __options);
	}

	/**
	 * setBaseUri
	 *
	 * @param { string } uri,
	*/
	"setBaseUri" (
		uri: string,
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34Traits::setBaseUri", [uri], __options);
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
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34Traits::getAttributes", [tokenId, attributes], __options);
	}

	/**
	 * getAttributeName
	 *
	 * @param { (number | string | BN) } index,
	*/
	"getAttributeName" (
		index: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34Traits::getAttributeName", [index], __options);
	}

	/**
	 * tokenUri
	 *
	 * @param { (number | string | BN) } tokenId,
	*/
	"tokenUri" (
		tokenId: (number | string | BN),
		__options: GasLimit,
	){
		return buildSubmittableExtrinsic( this.__apiPromise, this.__nativeContract, "psp34Traits::tokenUri", [tokenId], __options);
	}

}