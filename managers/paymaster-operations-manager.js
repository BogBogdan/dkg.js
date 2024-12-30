
export default class PaymasterOperationsManager {
   
    constructor(services) {
        this.blockchainService = services.blockchainService;
        this.inputService = services.inputService;
        this.validationService = services.validationService;
    }

    /**
 * @async
 * @param {BigInt} tokenAmount - The amount of tokens (Wei) to set the allowance.
 * @param {Object} [options={}] - Additional options for increasing allowance - currently only blockchain option expected.
 * @param {string} recipient - The address of the recipient (used for operations like withdrawal or funding).
 * @returns {Object} Object containing hash of blockchain transaction and status.
 */

    async deployPaymasterContract(options) {
        try {

            const blockchain = this.inputService.getBlockchain(options);


            if(this.validationService.validateBlockchain(blockchain))
            {
                const paymasterAddress = await this.blockchainService.deployPaymasterContract(blockchain);
                
                return paymasterAddress;
            }

        } catch (error) {
            console.error("Error deploying Paymaster contract:", error);
        }
    }

    async addAllowedAddress(addresToBeWhitelested, options) {
        try {

            const blockchain = this.inputService.getBlockchain(options);

            if(this.validationService.validatePaymasterAdress(blockchain, addresToBeWhitelested))
            {
                await this.blockchainService.addAllowedAddress(blockchain, addresToBeWhitelested);
            }
           
        } catch (error) {
            console.error("Error adding allowed address:", error);
        }
    }

    async removeAllowedAddress(addresToBeWhitelested, options) {
        try {

            const blockchain = this.inputService.getBlockchain(options);
            

            if(this.validationService.validatePaymasterAdress(blockchain, addresToBeWhitelested))
            {
                await this.blockchainService.removeAllowedAddress(blockchain, addresToBeWhitelested);
            }

        } catch (error) {
            console.error("Error removing allowed address:", error);
        }
    }


    async fundPaymaster(tokenAmount, options) {
        try {

            const blockchain = this.inputService.getBlockchain(options);

            if(this.validationService.validatePaymasterToken(blockchain,tokenAmount))
            {
                await this.blockchainService.fund(blockchain, tokenAmount);
            }

        } catch (error) {
            console.error("Error funding paymaster:", error);
        }
    }

    async withdraw(recipient, tokenAmount, options) {
        try {

            const blockchain = this.inputService.getBlockchain(options);

            if(this.validationService.validatePaymasterTokenAdress(blockchain, tokenAmount, recipient))
            {
                await this.blockchainService.withdraw(blockchain, recipient, tokenAmount);
            }
            
        } catch (error) {
            console.error("Error withdrawing:", error);
        }
    }

    async coverCost(tokenAmount, options) {
        try {
            
            const blockchain = this.inputService.getBlockchain(options);

            if(this.validationService.validatePaymasterToken(blockchain, tokenAmount))
            {
                await this.blockchainService.coverCost(blockchain, tokenAmount);
            }

        } catch (error) {
            console.error("Error covering cost:", error);
        }
    }
}