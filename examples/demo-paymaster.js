import PaymasterOperationsManager from '../managers/paymaster-operations-manager.js';
import BaseServiceManager from '../services/base-service-manager.js';

const PUBLIC_KEY = '';
const PRIVATE_KEY = '';


const config = {
    //nodeApiUrl: 'https://example.com/api',  
    blockchain: {
        name: 'otp:20430',
        publicKey: PUBLIC_KEY,
        privateKey: PRIVATE_KEY,
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

        await paymasterManager.addAllowedAddress('0x404028D4Bda2B3f2558695A09a9a31dF138Dc5F6', { blockchain: 'Ethereum' });
        console.log('Added allowed address.');

        await paymasterManager.removeAllowedAddress('0x404028D4Bda2B3f2558695A09a9a31dF138Dc5F6', { blockchain: 'Ethereum' });
        console.log('Removed allowed address.');

        await paymasterManager.fundPaymaster(BigInt(1000000), { blockchain: 'Ethereum' });
        console.log('Funded Paymaster.');

        await paymasterManager.withdraw('0x404028D4Bda2B3f2558695A09a9a31dF138Dc5F6', BigInt(500000), { blockchain: 'Ethereum' });
        console.log('Withdrawal complete.');

        await paymasterManager.coverCost(BigInt(200000), { blockchain: 'Ethereum' });
        console.log('Covered cost.');

    } catch (error) {
        console.error('Error during tests:', error);
    }
})();
