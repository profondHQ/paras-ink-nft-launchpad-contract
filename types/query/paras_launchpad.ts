/* This file is auto-generated */

import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import { queryJSON, queryOkJSON, handleReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/paras_launchpad';
import type * as ReturnTypes from '../types-returns/paras_launchpad';
import type BN from 'bn.js';
//@ts-ignore
import { ReturnNumber } from '@727-ventures/typechain-types';
import { getTypeDescription } from './../shared/utils';


export default class Methods {
	private __nativeContract: ContractPromise;
	private __apiPromise: ApiPromise;
	private __callerAddress: string;

	constructor(
		nativeContract: ContractPromise,
		nativeApi: ApiPromise,
		callerAddress: string,
	) {
		this.__nativeContract = nativeContract;
		this.__callerAddress = callerAddress;
		this.__apiPromise = nativeApi;
	}

	/**
	* setCode
	*
	* @param { Array<(number | string | BN)> } codeHash,
	* @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"setCode"(
		codeHash: Array<(number | string | BN)>,
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "setCode", [codeHash], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'paras_launchpad')); });
	}

	/**
	* approve
	*
	* @param { ArgumentTypes.AccountId } operator,
	* @param { ArgumentTypes.Id | null } id,
	* @param { boolean } approved,
	* @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"approve"(
		operator: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id | null,
		approved: boolean,
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34::approve", [operator, id, approved], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'paras_launchpad')); });
	}

	/**
	* transfer
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { ArgumentTypes.Id } id,
	* @param { Array<(number | string | BN)> } data,
	* @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"transfer"(
		to: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id,
		data: Array<(number | string | BN)>,
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34::transfer", [to, id, data], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'paras_launchpad')); });
	}

	/**
	* totalSupply
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"totalSupply"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34::totalSupply", [], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'paras_launchpad')); });
	}

	/**
	* ownerOf
	*
	* @param { ArgumentTypes.Id } id,
	* @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
	*/
	"ownerOf"(
		id: ArgumentTypes.Id,
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<ReturnTypes.AccountId | null, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34::ownerOf", [id], __options, (result) => { return handleReturnType(result, getTypeDescription(20, 'paras_launchpad')); });
	}

	/**
	* collectionId
	*
	* @returns { Result<ReturnTypes.Id, ReturnTypes.LangError> }
	*/
	"collectionId"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<ReturnTypes.Id, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34::collectionId", [], __options, (result) => { return handleReturnType(result, getTypeDescription(22, 'paras_launchpad')); });
	}

	/**
	* balanceOf
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @returns { Result<number, ReturnTypes.LangError> }
	*/
	"balanceOf"(
		owner: ArgumentTypes.AccountId,
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34::balanceOf", [owner], __options, (result) => { return handleReturnType(result, getTypeDescription(23, 'paras_launchpad')); });
	}

	/**
	* allowance
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @param { ArgumentTypes.AccountId } operator,
	* @param { ArgumentTypes.Id | null } id,
	* @returns { Result<boolean, ReturnTypes.LangError> }
	*/
	"allowance"(
		owner: ArgumentTypes.AccountId,
		operator: ArgumentTypes.AccountId,
		id: ArgumentTypes.Id | null,
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34::allowance", [owner, operator, id], __options, (result) => { return handleReturnType(result, getTypeDescription(24, 'paras_launchpad')); });
	}

	/**
	* tokenByIndex
	*
	* @param { (string | number | BN) } index,
	* @returns { Result<Result<ReturnTypes.Id, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"tokenByIndex"(
		index: (string | number | BN),
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<ReturnTypes.Id, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34Enumerable::tokenByIndex", [index], __options, (result) => { return handleReturnType(result, getTypeDescription(25, 'paras_launchpad')); });
	}

	/**
	* ownersTokenByIndex
	*
	* @param { ArgumentTypes.AccountId } owner,
	* @param { (string | number | BN) } index,
	* @returns { Result<Result<ReturnTypes.Id, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"ownersTokenByIndex"(
		owner: ArgumentTypes.AccountId,
		index: (string | number | BN),
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<ReturnTypes.Id, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34Enumerable::ownersTokenByIndex", [owner, index], __options, (result) => { return handleReturnType(result, getTypeDescription(25, 'paras_launchpad')); });
	}

	/**
	* getAttribute
	*
	* @param { ArgumentTypes.Id } id,
	* @param { Array<(number | string | BN)> } key,
	* @returns { Result<Array<number> | null, ReturnTypes.LangError> }
	*/
	"getAttribute"(
		id: ArgumentTypes.Id,
		key: Array<(number | string | BN)>,
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Array<number> | null, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34Metadata::getAttribute", [id, key], __options, (result) => { return handleReturnType(result, getTypeDescription(27, 'paras_launchpad')); });
	}

	/**
	* owner
	*
	* @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
	*/
	"owner"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<ReturnTypes.AccountId, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "ownable::owner", [], __options, (result) => { return handleReturnType(result, getTypeDescription(29, 'paras_launchpad')); });
	}

	/**
	* renounceOwnership
	*
	* @returns { Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError> }
	*/
	"renounceOwnership"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "ownable::renounceOwnership", [], __options, (result) => { return handleReturnType(result, getTypeDescription(30, 'paras_launchpad')); });
	}

	/**
	* transferOwnership
	*
	* @param { ArgumentTypes.AccountId } newOwner,
	* @returns { Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError> }
	*/
	"transferOwnership"(
		newOwner: ArgumentTypes.AccountId,
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "ownable::transferOwnership", [newOwner], __options, (result) => { return handleReturnType(result, getTypeDescription(30, 'paras_launchpad')); });
	}

	/**
	* setMintingStatus
	*
	* @param { (number | string | BN) | null } mintingStatusIndex,
	* @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"setMintingStatus"(
		mintingStatusIndex: (number | string | BN) | null,
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::setMintingStatus", [mintingStatusIndex], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'paras_launchpad')); });
	}

	/**
	* getLaunchpadFee
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getLaunchpadFee"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getLaunchpadFee", [], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'paras_launchpad')); });
	}

	/**
	* getAvailableToWithdrawProject
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getAvailableToWithdrawProject"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getAvailableToWithdrawProject", [], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'paras_launchpad')); });
	}

	/**
	* getMintingStatus
	*
	* @returns { Result<Array<number>, ReturnTypes.LangError> }
	*/
	"getMintingStatus"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Array<number>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getMintingStatus", [], __options, (result) => { return handleReturnType(result, getTypeDescription(34, 'paras_launchpad')); });
	}

	/**
	* getPublicSaleEndAt
	*
	* @returns { Result<number | null, ReturnTypes.LangError> }
	*/
	"getPublicSaleEndAt"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<number | null, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getPublicSaleEndAt", [], __options, (result) => { return handleReturnType(result, getTypeDescription(35, 'paras_launchpad')); });
	}

	/**
	* price
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"price"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::price", [], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'paras_launchpad')); });
	}

	/**
	* withdrawProject
	*
	* @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"withdrawProject"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::withdrawProject", [], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'paras_launchpad')); });
	}

	/**
	* getLaunchpadTreasuryAddress
	*
	* @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
	*/
	"getLaunchpadTreasuryAddress"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<ReturnTypes.AccountId, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getLaunchpadTreasuryAddress", [], __options, (result) => { return handleReturnType(result, getTypeDescription(29, 'paras_launchpad')); });
	}

	/**
	* getProjectTreasuryAddress
	*
	* @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
	*/
	"getProjectTreasuryAddress"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<ReturnTypes.AccountId, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getProjectTreasuryAddress", [], __options, (result) => { return handleReturnType(result, getTypeDescription(29, 'paras_launchpad')); });
	}

	/**
	* addAccountToPresale
	*
	* @param { ArgumentTypes.AccountId } accountId,
	* @param { (number | string | BN) } mintAmount,
	* @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"addAccountToPresale"(
		accountId: ArgumentTypes.AccountId,
		mintAmount: (number | string | BN),
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::addAccountToPresale", [accountId, mintAmount], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'paras_launchpad')); });
	}

	/**
	* setMaxMintAmount
	*
	* @param { (number | string | BN) } maxAmount,
	* @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"setMaxMintAmount"(
		maxAmount: (number | string | BN),
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::setMaxMintAmount", [maxAmount], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'paras_launchpad')); });
	}

	/**
	* presalePrice
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"presalePrice"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::presalePrice", [], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'paras_launchpad')); });
	}

	/**
	* addAccountToPrepresaleBatch
	*
	* @param { Array<[ArgumentTypes.AccountId, (number | string | BN)]> } accountIdMintAmounts,
	* @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"addAccountToPrepresaleBatch"(
		accountIdMintAmounts: Array<[ArgumentTypes.AccountId, (number | string | BN)]>,
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::addAccountToPrepresaleBatch", [accountIdMintAmounts], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'paras_launchpad')); });
	}

	/**
	* mintNext
	*
	* @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"mintNext"(
		__options?: GasLimitAndRequiredValue,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::mintNext", [], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'paras_launchpad')); });
	}

	/**
	* getAvailableToWithdrawLaunchpad
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"getAvailableToWithdrawLaunchpad"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getAvailableToWithdrawLaunchpad", [], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'paras_launchpad')); });
	}

	/**
	* withdrawLaunchpad
	*
	* @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"withdrawLaunchpad"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::withdrawLaunchpad", [], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'paras_launchpad')); });
	}

	/**
	* prepresalePrice
	*
	* @returns { Result<ReturnNumber, ReturnTypes.LangError> }
	*/
	"prepresalePrice"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::prepresalePrice", [], __options, (result) => { return handleReturnType(result, getTypeDescription(19, 'paras_launchpad')); });
	}

	/**
	* getPublicSaleStartAt
	*
	* @returns { Result<number, ReturnTypes.LangError> }
	*/
	"getPublicSaleStartAt"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getPublicSaleStartAt", [], __options, (result) => { return handleReturnType(result, getTypeDescription(38, 'paras_launchpad')); });
	}

	/**
	* getMaxMintAmount
	*
	* @returns { Result<number, ReturnTypes.LangError> }
	*/
	"getMaxMintAmount"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getMaxMintAmount", [], __options, (result) => { return handleReturnType(result, getTypeDescription(38, 'paras_launchpad')); });
	}

	/**
	* maxSupply
	*
	* @returns { Result<number, ReturnTypes.LangError> }
	*/
	"maxSupply"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::maxSupply", [], __options, (result) => { return handleReturnType(result, getTypeDescription(38, 'paras_launchpad')); });
	}

	/**
	* addAccountToPrepresale
	*
	* @param { ArgumentTypes.AccountId } accountId,
	* @param { (number | string | BN) } mintAmount,
	* @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"addAccountToPrepresale"(
		accountId: ArgumentTypes.AccountId,
		mintAmount: (number | string | BN),
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::addAccountToPrepresale", [accountId, mintAmount], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'paras_launchpad')); });
	}

	/**
	* addAccountToPresaleBatch
	*
	* @param { Array<[ArgumentTypes.AccountId, (number | string | BN)]> } accountIdMintAmounts,
	* @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"addAccountToPresaleBatch"(
		accountIdMintAmounts: Array<[ArgumentTypes.AccountId, (number | string | BN)]>,
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::addAccountToPresaleBatch", [accountIdMintAmounts], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'paras_launchpad')); });
	}

	/**
	* getPrepresaleStartAt
	*
	* @returns { Result<number, ReturnTypes.LangError> }
	*/
	"getPrepresaleStartAt"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getPrepresaleStartAt", [], __options, (result) => { return handleReturnType(result, getTypeDescription(38, 'paras_launchpad')); });
	}

	/**
	* getPresaleStartAt
	*
	* @returns { Result<number, ReturnTypes.LangError> }
	*/
	"getPresaleStartAt"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getPresaleStartAt", [], __options, (result) => { return handleReturnType(result, getTypeDescription(38, 'paras_launchpad')); });
	}

	/**
	* getAccountPrepresaleMintingAmount
	*
	* @param { ArgumentTypes.AccountId } accountId,
	* @returns { Result<number | null, ReturnTypes.LangError> }
	*/
	"getAccountPrepresaleMintingAmount"(
		accountId: ArgumentTypes.AccountId,
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<number | null, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getAccountPrepresaleMintingAmount", [accountId], __options, (result) => { return handleReturnType(result, getTypeDescription(35, 'paras_launchpad')); });
	}

	/**
	* mint
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } mintAmount,
	* @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"mint"(
		to: ArgumentTypes.AccountId,
		mintAmount: (number | string | BN),
		__options?: GasLimitAndRequiredValue,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::mint", [to, mintAmount], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'paras_launchpad')); });
	}

	/**
	* mintProject
	*
	* @param { ArgumentTypes.AccountId } to,
	* @param { (number | string | BN) } mintAmount,
	* @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"mintProject"(
		to: ArgumentTypes.AccountId,
		mintAmount: (number | string | BN),
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::mintProject", [to, mintAmount], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'paras_launchpad')); });
	}

	/**
	* getAccountPresaleMintingAmount
	*
	* @param { ArgumentTypes.AccountId } accountId,
	* @returns { Result<number | null, ReturnTypes.LangError> }
	*/
	"getAccountPresaleMintingAmount"(
		accountId: ArgumentTypes.AccountId,
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<number | null, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "launchpad::getAccountPresaleMintingAmount", [accountId], __options, (result) => { return handleReturnType(result, getTypeDescription(35, 'paras_launchpad')); });
	}

	/**
	* setMultipleAttributes
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { Array<[string, string]> } metadata,
	* @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"setMultipleAttributes"(
		tokenId: ArgumentTypes.Id,
		metadata: Array<[string, string]>,
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34Traits::setMultipleAttributes", [tokenId, metadata], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'paras_launchpad')); });
	}

	/**
	* getAttributeCount
	*
	* @returns { Result<number, ReturnTypes.LangError> }
	*/
	"getAttributeCount"(
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34Traits::getAttributeCount", [], __options, (result) => { return handleReturnType(result, getTypeDescription(23, 'paras_launchpad')); });
	}

	/**
	* setBaseUri
	*
	* @param { string } uri,
	* @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
	*/
	"setBaseUri"(
		uri: string,
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34Traits::setBaseUri", [uri], __options, (result) => { return handleReturnType(result, getTypeDescription(13, 'paras_launchpad')); });
	}

	/**
	* getAttributes
	*
	* @param { ArgumentTypes.Id } tokenId,
	* @param { Array<string> } attributes,
	* @returns { Result<Array<string>, ReturnTypes.LangError> }
	*/
	"getAttributes"(
		tokenId: ArgumentTypes.Id,
		attributes: Array<string>,
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<Array<string>, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34Traits::getAttributes", [tokenId, attributes], __options, (result) => { return handleReturnType(result, getTypeDescription(43, 'paras_launchpad')); });
	}

	/**
	* getAttributeName
	*
	* @param { (number | string | BN) } index,
	* @returns { Result<string, ReturnTypes.LangError> }
	*/
	"getAttributeName"(
		index: (number | string | BN),
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<string, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34Traits::getAttributeName", [index], __options, (result) => { return handleReturnType(result, getTypeDescription(44, 'paras_launchpad')); });
	}

	/**
	* tokenUri
	*
	* @param { (number | string | BN) } tokenId,
	* @returns { Result<string, ReturnTypes.LangError> }
	*/
	"tokenUri"(
		tokenId: (number | string | BN),
		__options?: GasLimit,
	): Promise<QueryReturnType<Result<string, ReturnTypes.LangError>>> {
		return queryOkJSON(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34Traits::tokenUri", [tokenId], __options, (result) => { return handleReturnType(result, getTypeDescription(44, 'paras_launchpad')); });
	}

}