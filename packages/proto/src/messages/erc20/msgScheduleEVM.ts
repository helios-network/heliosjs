import * as chronos from '../../proto/helios/chronos/v1/tx'

/**
 * Creates a MsgScheduleEVMCall message
 * @param {string} ownerAddress - Owner address
 * @param {string} contractAddress - Contract address
 * @param {string} abiJson - ABI JSON string
 * @param {string} methodName - Method name to call
 * @param {string[]} params - Function parameters
 * @param {number} frequency - Block frequency
 * @param {number} expirationBlock - Expiration block (0 for no expiration)
 * @param {number} gasLimit - Gas limit for EVM call
 * @returns {Object} The message object with path
 */
export function createMsgScheduleEVMCall(
  ownerAddress: string,
  contractAddress: string,
  abiJson: string,
  methodName: string,
  params: string[],
  frequency: number,
  expirationBlock: number,
  gasLimit: number,
) {
  const msg = new chronos.helios.chronos.v1.MsgScheduleEVMCall({
    owner_address: ownerAddress,
    contract_address: contractAddress,
    abi_json: abiJson,
    method_name: methodName,
    params,
    frequency,
    expiration_block: expirationBlock,
    gas_limit: gasLimit,
    sender: ownerAddress  // Add this field to match the protobuf signer option
  })
  return {
    message: msg,
    path: 'helios.chronos.v1.MsgScheduleEVMCall',
  }
}
