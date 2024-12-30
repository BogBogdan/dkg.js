import { ethers  } from 'ethers';
import { resolveUAL  } from '../services/utilities.js';
import { INCENTIVE_TYPE  } from '../constants.js';

export default class PaymasterOperationsManager {
   
    constructor(services) {
        this.blockchainService = services.blockchainService;
        this.inputService = services.inputService;
        this.nodeApiService = services.nodeApiService;
        this.validationService = services.validationService;
    }

    /**
 * Sets allowance to a given quantity of tokens.
 * @async
 * @param {BigInt} tokenAmount - The amount of tokens (Wei) to set the allowance.
 * @param {Object} [options={}] - Additional options for increasing allowance - currently only blockchain option expected.
 * @param {string} recipient - The address of the recipient (used for operations like withdrawal or funding).
 * @param {string} hubAddress - The address of the recipient (used for operations like withdrawal or funding).
 * @returns {Object} Object containing hash of blockchain transaction and status.
 */

    async deployPaymasterContract(options, hubAddress) {
        try {

            const blockchain = this.inputService.getBlockchain(options);

            if(this.validationService.validateBlockchain(blockchain) && this.validationService.validateAddress(hubAddress))
            {
                await this.blockchainService.deployPaymasterContractFunction(blockchain, hubAddress);
            }

        } catch (error) {
            console.error("Error deploying Paymaster contract:", error);
        }
    }

    async addAllowedAddress(options) {
        try {

            const blockchain = this.inputService.getBlockchain(options);
            const public_address = await this.blockchainService.getPublicKey(blockchain);

            if(this.validationService.validateBlockchain(blockchain) && this.validationService.validateAddress(public_address))
            {
                await this.blockchainService.addAllowedAddressFunction(blockchain, public_address);
            }
           
        } catch (error) {
            console.error("Error adding allowed address:", error);
        }
    }

    async removeAllowedAddress(options) {
        try {

            const blockchain = this.inputService.getBlockchain(options);
            const public_address = await this.blockchainService.getPublicKey(blockchain);

            if(this.validationService.validateBlockchain(blockchain) && this.validationService.validateAddress(public_address))
            {
                await this.blockchainService.removeAllowedAddressFunction(blockchain, public_address);
            }

        } catch (error) {
            console.error("Error removing allowed address:", error);
        }
    }


    async fundPaymaster(options, tokenAmount) {
        try {

            const blockchain = this.inputService.getBlockchain(options);

            if(this.validationService.validateBlockchain(blockchain) && this.validationService.validateTokenAmount(tokenAmount))
            {
                await this.blockchainService.fundFunction(blockchain, tokenAmount);
            }

        } catch (error) {
            console.error("Error funding paymaster:", error);
        }
    }

    async withdraw(options, recipient, tokenAmount) {
        try {

            const blockchain = this.inputService.getBlockchain(options);

            if(this.validationService.validateBlockchain(blockchain) && this.validationService.validateTokenAmount(tokenAmount) &&  this.validationService.validateAddress(recipient))
            {
                await this.blockchainService.withdrawFunction(blockchain, recipient, tokenAmount);
            }
            
        } catch (error) {
            console.error("Error withdrawing:", error);
        }
    }

    async coverCost(options, tokenAmount) {
        try {
            
            const blockchain = this.inputService.getBlockchain(options);

            if(this.validationService.validateBlockchain(blockchain) && this.validationService.validateTokenAmount(tokenAmount))
            {
                await this.blockchainService.coverCostFunction(blockchain, tokenAmount);
            }

        } catch (error) {
            console.error("Error covering cost:", error);
        }
    }
}