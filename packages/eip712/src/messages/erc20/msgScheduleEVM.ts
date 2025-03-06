/**
 * MSG_SCHEDULE_EVM_CALL_TYPES contains the EIP712 type definitions for MsgScheduleEVMCall
 */
export const MSG_SCHEDULE_EVM_CALL_TYPES = {
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
  }

  /**
   * Creates a MsgScheduleEVMCall EIP712-compatible message
   * @param {string} ownerAddress - Owner address
   * @param {string} contractAddress - Contract address
   * @param {string} abiJson - ABI JSON string
   * @param {string} methodName - Method name to call
   * @param {Array<string>} params - Function parameters
   * @param {number} frequency - Block frequency
   * @param {number} expirationBlock - Expiration block (0 for no expiration)
   * @param {number} gasLimit - Gas limit for EVM call
   * @returns {Object} The EIP712 message object
   */
  export function createMsgScheduleEVMCall(
    ownerAddress,
    contractAddress,
    abiJson,
    methodName,
    params,
    frequency,
    expirationBlock,
    gasLimit,
  ) {
    return {
      type: 'helios/chronos/MsgScheduleEVMCall',
      value: {
        owner_address: ownerAddress,
        contract_address: contractAddress,
        abi_json: abiJson,
        method_name: methodName,
        params: params,
        frequency: frequency,
        expiration_block: expirationBlock,
        gas_limit: gasLimit,
      },
    }
  }
