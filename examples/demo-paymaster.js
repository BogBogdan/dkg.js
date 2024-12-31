import PaymasterOperationsManager from '../managers/paymaster-operations-manager.js';
import BaseServiceManager from '../services/base-service-manager.js';

const config = {
    nodeApiUrl: 'https://example.com/api',  
    blockchain: {
        network: 'Base',                      
        name: 'Base',                         
        hubContract: '0xYourDeployedContractAddressHere', 
        rpc: 'https://base.rpc.url.here',      
        publicKey: '0xYourBasePublicKeyHere',  
        privateKey: '0xYourBasePrivateKeyHere'  
    },
};

(async () => {
    try {
       
        const baseServiceManager = new BaseServiceManager(config);
        const services = baseServiceManager.getServices();

        const paymasterManager = new PaymasterOperationsManager({
            blockchainService: services.blockchainService,
            inputService: services.inputService,
            validationService: services.validationService
        });

        const deployedAddress = await paymasterManager.deployPaymasterContract({ blockchain: 'Ethereum' });
        console.log('Deployed Address:', deployedAddress);

        await paymasterManager.addAllowedAddress('0x1dD2C730a2BcD26d6aEf7DCCF171FC2AB1384d14', { blockchain: 'Ethereum' });
        console.log('Added allowed address.');

        await paymasterManager.removeAllowedAddress('0x1dD2C730a2BcD26d6aEf7DCCF171FC2AB1384d14', { blockchain: 'Ethereum' });
        console.log('Removed allowed address.');

        await paymasterManager.fundPaymaster(BigInt(1000000), { blockchain: 'Ethereum' });
        console.log('Funded Paymaster.');

        await paymasterManager.withdraw('0x1dD2C730a2BcD26d6aEf7DCCF171FC2AB1384d14', BigInt(500000), { blockchain: 'Ethereum' });
        console.log('Withdrawal complete.');

        await paymasterManager.coverCost(BigInt(200000), { blockchain: 'Ethereum' });
        console.log('Covered cost.');

    } catch (error) {
        console.error('Error during tests:', error);
    }
})();
