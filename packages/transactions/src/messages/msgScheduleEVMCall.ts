import {
    createMsgScheduleEVMCall as protoCreateMsgScheduleEVMCall,
    createTransaction,
  } from '@helios-chain-labs/proto'

  import {
    createEIP712,
    generateFee,
    generateMessage,
    generateTypes,
    createMsgScheduleEVMCall,
    MSG_SCHEDULE_EVM_CALL_TYPES,
  } from '@tharsis/eip712'

  import { Chain, Fee, Sender } from './common'

  export interface MessageMsgScheduleEVMCall {
    ownerAddress: string;
    contractAddress: string;
    abiJson: string;
    methodName: string;
    params: string[];
    frequency: number;
    expirationBlock: number;
    gasLimit: number;
  }

  export function createTxMsgScheduleEVMCall(
    chain: Chain,
    sender: Sender,
    fee: Fee,
    memo: string,
    params: MessageMsgScheduleEVMCall,
  ) {
    // EIP712
    const feeObject = generateFee(
      fee.amount,
      fee.denom,
      fee.gas,
      sender.accountAddress,
    )

    // You'll need to define MSG_SCHEDULE_EVM_CALL_TYPES in your @tharsis/eip712 library
    // or use an existing type that matches your message structure
    const types = generateTypes(MSG_SCHEDULE_EVM_CALL_TYPES || {
      MsgValue: [
        { name: 'owner_address', type: 'string' },
        { name: 'contract_address', type: 'string' },
        { name: 'abi_json', type: 'string' },
        { name: 'method_name', type: 'string' },
        { name: 'params', type: 'string[]' },
        { name: 'frequency', type: 'uint256' },
        { name: 'expiration_block', type: 'uint256' },
        { name: 'gas_limit', type: 'uint256' },
      ],
    })

    // You'll need to implement this function in @tharsis/eip712
    // based on your message structure
    const msg = createMsgScheduleEVMCall ? createMsgScheduleEVMCall(
      params.ownerAddress,
      params.contractAddress,
      params.abiJson,
      params.methodName,
      params.params,
      params.frequency,
      params.expirationBlock,
      params.gasLimit,
    ) : {
      type: 'helios/chronos/MsgScheduleEVMCall',
      value: {
        owner_address: params.ownerAddress,
        contract_address: params.contractAddress,
        abi_json: params.abiJson,
        method_name: params.methodName,
        params: params.params,
        frequency: params.frequency,
        expiration_block: params.expirationBlock,
        gas_limit: params.gasLimit,
        sender: params.ownerAddress,
      },
    }

    const messages = generateMessage(
      sender.accountNumber.toString(),
      sender.sequence.toString(),
      chain.cosmosChainId,
      memo,
      feeObject,
      msg,
    )
    const eipToSign = createEIP712(types, chain.chainId, messages)

    // Cosmos
    // You'll need to implement this function in @helios-chain-labs/proto
    const msgCosmos = protoCreateMsgScheduleEVMCall ? protoCreateMsgScheduleEVMCall(
      params.ownerAddress,
      params.contractAddress,
      params.abiJson,
      params.methodName,
      params.params,
      params.frequency,
      params.expirationBlock,
      params.gasLimit,
    ) : {
      typeUrl: '/helios.chronos.v1.MsgScheduleEVMCall',
      value: {
        owner_address: params.ownerAddress,
        contract_address: params.contractAddress,
        abi_json: params.abiJson,
        method_name: params.methodName,
        params: params.params,
        frequency: params.frequency,
        expiration_block: params.expirationBlock,
        gas_limit: params.gasLimit,
      },
    }

    const tx = createTransaction(
      msgCosmos,
      memo,
      fee.amount,
      fee.denom,
      parseInt(fee.gas, 10),
      'ethsecp256',
      sender.pubkey,
      sender.sequence,
      sender.accountNumber,
      chain.cosmosChainId,
    )

    return {
      signDirect: tx.signDirect,
      legacyAmino: tx.legacyAmino,
      eipToSign,
    }
  }
