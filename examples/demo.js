import jsonld from 'jsonld';
import DKG from '../index.js';
import { sleepForMilliseconds } from '../services/utilities.js';

const ENVIRONMENT = 'testnet';
const OT_NODE_HOSTNAME = 'https://v6-pegasus-node-01.origin-trail.network';
const OT_NODE_PORT = '8900';
const PUBLIC_KEY = '0x2061ffCc5d7fdbb8AD001042f9d1890CEa7F4C1c';
const PRIVATE_KEY = '7648b942aee556c4c9b2dd1438fd539218b2f0c88a1dfbbea16b0bc242cf9ac1';

// const ENVIRONMENT = 'development';
// const OT_NODE_HOSTNAME = 'http://localhost';
// const OT_NODE_PORT = '8900';
// const PUBLIC_KEY = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
// const PRIVATE_KEY = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';

const DkgClient = new DKG({
    environment: ENVIRONMENT,
    endpoint: OT_NODE_HOSTNAME,
    port: OT_NODE_PORT,
    blockchain: {
        name: 'otp:20430', // otp:20430 gnosis:10200, base:84532
        // name: 'hardhat1',
        publicKey: PUBLIC_KEY,
        privateKey: PRIVATE_KEY,
    },
    maxNumberOfRetries: 30,
    frequency: 2,
    contentType: 'all',
    nodeApiVersion: '/v0',
});

function divider() {
    console.log('==================================================');
    console.log('==================================================');
    console.log('==================================================');
}

(async () => {
    // const content = {
    //     private: ``,
    // };

    // const privatePart = [];

    // for (let i = 0; i < 1000; i++) {
    //     privatePart.push(`<uuid:${i}> <http://schema.org/company> "OT" .`);
    // }

    // content.private = privatePart.join('\n');

    const content = {
        private: {
            '@context': 'https://www.schema.org',
            '@id': 'urn:eu-pp:safety-test:3oRIwPtUOJapwNSAGZTzCOWR9bEo',
            '@type': 'ProductSafetyTest',
            testType: 'Functional Safety Test',
            testResults: 'Fail',
            relatedProduct: [
                {
                    '@id': 'urn:epc:id:sgtin:59G1yu8uivSRKLLu',
                    name: '59G1yu8uivSRKLLu',
                },
                {
                    '@id': 'urn:epc:id:sgtin:gd0iuk9Qe5RYlsHN',
                    name: 'gd0iuk9Qe5RYlsHN',
                },
                {
                    '@id': 'urn:epc:id:sgtin:pvVRfkfY0gKMfBHz',
                    name: 'pvVRfkfY0gKMfBHz',
                },
                {
                    '@id': 'urn:epc:id:sgtin:rVtBcdSqyqvVF2bP',
                    name: 'rVtBcdSqyqvVF2bP',
                },
                {
                    '@id': 'urn:epc:id:sgtin:tnMDDuu11bwjp8nV',
                    name: 'tnMDDuu11bwjp8nV',
                },
                {
                    '@id': 'urn:epc:id:sgtin:YcVPtQL0Ktdj0ZKl',
                    name: 'YcVPtQL0Ktdj0ZKl',
                },
                {
                    '@id': 'urn:epc:id:sgtin:zuxTzg2kVly9TwxQ',
                    name: 'zuxTzg2kVly9TwxQ',
                },
                {
                    '@id': 'urn:epc:id:sgtin:rGbV2mmiDybgF0IJ',
                    name: 'rGbV2mmiDybgF0IJ',
                },
                {
                    '@id': 'urn:epc:id:sgtin:RaQSQS2vQxsaH01v',
                    name: 'RaQSQS2vQxsaH01v',
                },
                {
                    '@id': 'urn:epc:id:sgtin:ZBY3xgdISZH3DRjV',
                    name: 'ZBY3xgdISZH3DRjV',
                },
                {
                    '@id': 'urn:epc:id:sgtin:Br3j6aefXfYEESwX',
                    name: 'Br3j6aefXfYEESwX',
                },
                {
                    '@id': 'urn:epc:id:sgtin:DUEfI8KEQB3riF06',
                    name: 'DUEfI8KEQB3riF06',
                },
                {
                    '@id': 'urn:epc:id:sgtin:fijH3qr3FQcGwcmH',
                    name: 'fijH3qr3FQcGwcmH',
                },
                {
                    '@id': 'urn:epc:id:sgtin:Qslio4FlYrjOcS4l',
                    name: 'Qslio4FlYrjOcS4l',
                },
                {
                    '@id': 'urn:epc:id:sgtin:yQsgeKviVbVEe6h8',
                    name: 'yQsgeKviVbVEe6h8',
                },
                {
                    '@id': 'urn:epc:id:sgtin:ah1cr0X0Ud0MEIg6',
                    name: 'ah1cr0X0Ud0MEIg6',
                },
                {
                    '@id': 'urn:epc:id:sgtin:UySXp8PQQxgwgVYB',
                    name: 'UySXp8PQQxgwgVYB',
                },
                {
                    '@id': 'urn:epc:id:sgtin:aFrRqD5uHNofyJ6q',
                    name: 'aFrRqD5uHNofyJ6q',
                },
                {
                    '@id': 'urn:epc:id:sgtin:rXPwAeFaW54ITxis',
                    name: 'rXPwAeFaW54ITxis',
                },
                {
                    '@id': 'urn:epc:id:sgtin:NgDPJFUjCvqQOaID',
                    name: 'NgDPJFUjCvqQOaID',
                },
                {
                    '@id': 'urn:epc:id:sgtin:YcJG2jpnvdAe2ea9',
                    name: 'YcJG2jpnvdAe2ea9',
                },
                {
                    '@id': 'urn:epc:id:sgtin:xqaQBwZ15Co5fVOb',
                    name: 'xqaQBwZ15Co5fVOb',
                },
                {
                    '@id': 'urn:epc:id:sgtin:jTOc6h3kvD0uXpMv',
                    name: 'jTOc6h3kvD0uXpMv',
                },
                {
                    '@id': 'urn:epc:id:sgtin:znpWPI8T293v8YSX',
                    name: 'znpWPI8T293v8YSX',
                },
                {
                    '@id': 'urn:epc:id:sgtin:x17KUXWvwjTx89hi',
                    name: 'x17KUXWvwjTx89hi',
                },
                {
                    '@id': 'urn:epc:id:sgtin:CHFJdiYuU03c8mKw',
                    name: 'CHFJdiYuU03c8mKw',
                },
                {
                    '@id': 'urn:epc:id:sgtin:yAj9KUoe8zBEOE36',
                    name: 'yAj9KUoe8zBEOE36',
                },
                {
                    '@id': 'urn:epc:id:sgtin:fcQ8OB2VxAQfImFZ',
                    name: 'fcQ8OB2VxAQfImFZ',
                },
                {
                    '@id': 'urn:epc:id:sgtin:J70mnfdqgijLzICs',
                    name: 'J70mnfdqgijLzICs',
                },
                {
                    '@id': 'urn:epc:id:sgtin:V7OHPrTEnneoCqHq',
                    name: 'V7OHPrTEnneoCqHq',
                },
                {
                    '@id': 'urn:epc:id:sgtin:WgOoobcv5eJy7jEI',
                    name: 'WgOoobcv5eJy7jEI',
                },
                {
                    '@id': 'urn:epc:id:sgtin:RzurFXWgXqAfaiN7',
                    name: 'RzurFXWgXqAfaiN7',
                },
                {
                    '@id': 'urn:epc:id:sgtin:XHbFUe9JXEbJGJRw',
                    name: 'XHbFUe9JXEbJGJRw',
                },
                {
                    '@id': 'urn:epc:id:sgtin:wCjBqNueRSSAeicG',
                    name: 'wCjBqNueRSSAeicG',
                },
                {
                    '@id': 'urn:epc:id:sgtin:Jt2yuFYC0qhiEdTP',
                    name: 'Jt2yuFYC0qhiEdTP',
                },
                {
                    '@id': 'urn:epc:id:sgtin:b9dqdyc6eLmD8ZGG',
                    name: 'b9dqdyc6eLmD8ZGG',
                },
                {
                    '@id': 'urn:epc:id:sgtin:TD84r9Ei4sIvEOMM',
                    name: 'TD84r9Ei4sIvEOMM',
                },
                {
                    '@id': 'urn:epc:id:sgtin:OSe2b1z19LwoFi7S',
                    name: 'OSe2b1z19LwoFi7S',
                },
                {
                    '@id': 'urn:epc:id:sgtin:ISbkhQBittKdHvbb',
                    name: 'ISbkhQBittKdHvbb',
                },
                {
                    '@id': 'urn:epc:id:sgtin:ocCMASAu8cGyhQIf',
                    name: 'ocCMASAu8cGyhQIf',
                },
                {
                    '@id': 'urn:epc:id:sgtin:bRgxqRlzz6vudcRz',
                    name: 'bRgxqRlzz6vudcRz',
                },
                {
                    '@id': 'urn:epc:id:sgtin:VA11ZKZYUpNvDlnW',
                    name: 'VA11ZKZYUpNvDlnW',
                },
                {
                    '@id': 'urn:epc:id:sgtin:2qILRPnu8EoUNEtG',
                    name: '2qILRPnu8EoUNEtG',
                },
                {
                    '@id': 'urn:epc:id:sgtin:qfsQ3vuk6fpiNHUM',
                    name: 'qfsQ3vuk6fpiNHUM',
                },
                {
                    '@id': 'urn:epc:id:sgtin:V9cqTXmunjMt069q',
                    name: 'V9cqTXmunjMt069q',
                },
                {
                    '@id': 'urn:epc:id:sgtin:lENFJckgUrAY4wIX',
                    name: 'lENFJckgUrAY4wIX',
                },
                {
                    '@id': 'urn:epc:id:sgtin:Y0uWs5P3dQAQEScO',
                    name: 'Y0uWs5P3dQAQEScO',
                },
                {
                    '@id': 'urn:epc:id:sgtin:tGfoiYCTpZXUi0KL',
                    name: 'tGfoiYCTpZXUi0KL',
                },
                {
                    '@id': 'urn:epc:id:sgtin:67REHR2Gn3otCf8a',
                    name: '67REHR2Gn3otCf8a',
                },
                {
                    '@id': 'urn:epc:id:sgtin:Svl6joNmXCdaYyOR',
                    name: 'Svl6joNmXCdaYyOR',
                },
                {
                    '@id': 'urn:epc:id:sgtin:HeNkgGNSyfTBHA7r',
                    name: 'HeNkgGNSyfTBHA7r',
                },
                {
                    '@id': 'urn:epc:id:sgtin:ZLtJad25e8fXZ0tW',
                    name: 'ZLtJad25e8fXZ0tW',
                },
                {
                    '@id': 'urn:epc:id:sgtin:pnBSQuYpEEd3fn6N',
                    name: 'pnBSQuYpEEd3fn6N',
                },
                {
                    '@id': 'urn:epc:id:sgtin:7AuGaaaPNEXJwyug',
                    name: '7AuGaaaPNEXJwyug',
                },
                {
                    '@id': 'urn:epc:id:sgtin:50KW4jDYzXmSuqWa',
                    name: '50KW4jDYzXmSuqWa',
                },
                {
                    '@id': 'urn:epc:id:sgtin:dVqTor2IzEHutNJT',
                    name: 'dVqTor2IzEHutNJT',
                },
                {
                    '@id': 'urn:epc:id:sgtin:nsrqwDcuucL5AwbS',
                    name: 'nsrqwDcuucL5AwbS',
                },
                {
                    '@id': 'urn:epc:id:sgtin:LDz8Y4Rpnc7W9Thi',
                    name: 'LDz8Y4Rpnc7W9Thi',
                },
                {
                    '@id': 'urn:epc:id:sgtin:yG04iAWnAWX5cUDZ',
                    name: 'yG04iAWnAWX5cUDZ',
                },
                {
                    '@id': 'urn:epc:id:sgtin:mmUoRGiHd7oEt4RW',
                    name: 'mmUoRGiHd7oEt4RW',
                },
                {
                    '@id': 'urn:epc:id:sgtin:7vvaInDnGYicy8xO',
                    name: '7vvaInDnGYicy8xO',
                },
                {
                    '@id': 'urn:epc:id:sgtin:oeWIiKqA39fK16GN',
                    name: 'oeWIiKqA39fK16GN',
                },
                {
                    '@id': 'urn:epc:id:sgtin:RaLErwHZItSFEuED',
                    name: 'RaLErwHZItSFEuED',
                },
                {
                    '@id': 'urn:epc:id:sgtin:wMHmjfWDuLDe2tx8',
                    name: 'wMHmjfWDuLDe2tx8',
                },
                {
                    '@id': 'urn:epc:id:sgtin:egzs1LV5qwXYpN8P',
                    name: 'egzs1LV5qwXYpN8P',
                },
                {
                    '@id': 'urn:epc:id:sgtin:GehLcBN7oHo747hR',
                    name: 'GehLcBN7oHo747hR',
                },
                {
                    '@id': 'urn:epc:id:sgtin:Clv4qAqK6JmT0Vww',
                    name: 'Clv4qAqK6JmT0Vww',
                },
                {
                    '@id': 'urn:epc:id:sgtin:EWMDIdfRUDLApa3X',
                    name: 'EWMDIdfRUDLApa3X',
                },
                {
                    '@id': 'urn:epc:id:sgtin:tsTp4rRMzg3FAoki',
                    name: 'tsTp4rRMzg3FAoki',
                },
                {
                    '@id': 'urn:epc:id:sgtin:4H0QO3OQf1RLKwBw',
                    name: '4H0QO3OQf1RLKwBw',
                },
                {
                    '@id': 'urn:epc:id:sgtin:12jrO5e56XaSRP6E',
                    name: '12jrO5e56XaSRP6E',
                },
                {
                    '@id': 'urn:epc:id:sgtin:cR25dq0V4CgtQkgm',
                    name: 'cR25dq0V4CgtQkgm',
                },
                {
                    '@id': 'urn:epc:id:sgtin:ONgoOX1gXOq0NhzA',
                    name: 'ONgoOX1gXOq0NhzA',
                },
                {
                    '@id': 'urn:epc:id:sgtin:rEi3SsbtxavNrOsJ',
                    name: 'rEi3SsbtxavNrOsJ',
                },
                {
                    '@id': 'urn:epc:id:sgtin:8CF4YTXyXOnSNYrL',
                    name: '8CF4YTXyXOnSNYrL',
                },
                {
                    '@id': 'urn:epc:id:sgtin:3jlVZaTi42CaNEzl',
                    name: '3jlVZaTi42CaNEzl',
                },
                {
                    '@id': 'urn:epc:id:sgtin:tTsi80GIJHp21UGp',
                    name: 'tTsi80GIJHp21UGp',
                },
                {
                    '@id': 'urn:epc:id:sgtin:cYtnxiNaJWIXygH2',
                    name: 'cYtnxiNaJWIXygH2',
                },
                {
                    '@id': 'urn:epc:id:sgtin:btHAlsi6ODWZEQSa',
                    name: 'btHAlsi6ODWZEQSa',
                },
                {
                    '@id': 'urn:epc:id:sgtin:jCOToHKAaafT0pe5',
                    name: 'jCOToHKAaafT0pe5',
                },
                {
                    '@id': 'urn:epc:id:sgtin:QIrATAo7RQboYaVN',
                    name: 'QIrATAo7RQboYaVN',
                },
                {
                    '@id': 'urn:epc:id:sgtin:a2Yqe4BlLRtwWZIO',
                    name: 'a2Yqe4BlLRtwWZIO',
                },
                {
                    '@id': 'urn:epc:id:sgtin:2SWiPnE94vXlar2J',
                    name: '2SWiPnE94vXlar2J',
                },
                {
                    '@id': 'urn:epc:id:sgtin:nGMDJ6Ga9aw0ZP1I',
                    name: 'nGMDJ6Ga9aw0ZP1I',
                },
                {
                    '@id': 'urn:epc:id:sgtin:dLf911jgzDG48MA3',
                    name: 'dLf911jgzDG48MA3',
                },
                {
                    '@id': 'urn:epc:id:sgtin:OfNYXNd6HvABXYms',
                    name: 'OfNYXNd6HvABXYms',
                },
                {
                    '@id': 'urn:epc:id:sgtin:xGxv6eOnznl5sHIS',
                    name: 'xGxv6eOnznl5sHIS',
                },
                {
                    '@id': 'urn:epc:id:sgtin:1Jfp48alTv3mEUdd',
                    name: '1Jfp48alTv3mEUdd',
                },
                {
                    '@id': 'urn:epc:id:sgtin:WDu9IZtKHBAWIP4f',
                    name: 'WDu9IZtKHBAWIP4f',
                },
                {
                    '@id': 'urn:epc:id:sgtin:XNGKtKtcZ2FH1hS8',
                    name: 'XNGKtKtcZ2FH1hS8',
                },
                {
                    '@id': 'urn:epc:id:sgtin:nSvsZl1yVHm6P8xT',
                    name: 'nSvsZl1yVHm6P8xT',
                },
                {
                    '@id': 'urn:epc:id:sgtin:nbUblSyS046BCMPy',
                    name: 'nbUblSyS046BCMPy',
                },
                {
                    '@id': 'urn:epc:id:sgtin:qaOrIYiEWdvUaShI',
                    name: 'qaOrIYiEWdvUaShI',
                },
                {
                    '@id': 'urn:epc:id:sgtin:sRqW0pMFlJ3IWzTz',
                    name: 'sRqW0pMFlJ3IWzTz',
                },
                {
                    '@id': 'urn:epc:id:sgtin:KWSWD8qb40PAj1G9',
                    name: 'KWSWD8qb40PAj1G9',
                },
                {
                    '@id': 'urn:epc:id:sgtin:grZWIGDSqKO21iVJ',
                    name: 'grZWIGDSqKO21iVJ',
                },
                {
                    '@id': 'urn:epc:id:sgtin:VtxpsFy3bvnB5xLr',
                    name: 'VtxpsFy3bvnB5xLr',
                },
                {
                    '@id': 'urn:epc:id:sgtin:rtg32rWnG8Ie1xLP',
                    name: 'rtg32rWnG8Ie1xLP',
                },
                {
                    '@id': 'urn:epc:id:sgtin:O5LGx6WJPbOEY8Z3',
                    name: 'O5LGx6WJPbOEY8Z3',
                },
                {
                    '@id': 'urn:epc:id:sgtin:NRrS3aIygaIQpj8j',
                    name: 'NRrS3aIygaIQpj8j',
                },
                {
                    '@id': 'urn:epc:id:sgtin:PuljTjhYYIAJ44St',
                    name: 'PuljTjhYYIAJ44St',
                },
                {
                    '@id': 'urn:epc:id:sgtin:huLfTsdlaRsFoaQp',
                    name: 'huLfTsdlaRsFoaQp',
                },
                {
                    '@id': 'urn:epc:id:sgtin:Xvulxcb8r21Qhg2g',
                    name: 'Xvulxcb8r21Qhg2g',
                },
                {
                    '@id': 'urn:epc:id:sgtin:8k7yOMXYWM3ITJcU',
                    name: '8k7yOMXYWM3ITJcU',
                },
                {
                    '@id': 'urn:epc:id:sgtin:VMOTzcoX7TuHZ499',
                    name: 'VMOTzcoX7TuHZ499',
                },
                {
                    '@id': 'urn:epc:id:sgtin:zaAnN2LPHEBguQiL',
                    name: 'zaAnN2LPHEBguQiL',
                },
                {
                    '@id': 'urn:epc:id:sgtin:aJ4Kl80ee4lsnk0g',
                    name: 'aJ4Kl80ee4lsnk0g',
                },
                {
                    '@id': 'urn:epc:id:sgtin:SpMEtZZpVu41eMFt',
                    name: 'SpMEtZZpVu41eMFt',
                },
                {
                    '@id': 'urn:epc:id:sgtin:5EteYPmEkryy6kLn',
                    name: '5EteYPmEkryy6kLn',
                },
                {
                    '@id': 'urn:epc:id:sgtin:FUXJvAXiLEtu27Q0',
                    name: 'FUXJvAXiLEtu27Q0',
                },
                {
                    '@id': 'urn:epc:id:sgtin:6dIHmAVkuxpNjwjy',
                    name: '6dIHmAVkuxpNjwjy',
                },
                {
                    '@id': 'urn:epc:id:sgtin:T7gkAU4XrFbCXhzA',
                    name: 'T7gkAU4XrFbCXhzA',
                },
                {
                    '@id': 'urn:epc:id:sgtin:HBDqH6veSAhnMpBT',
                    name: 'HBDqH6veSAhnMpBT',
                },
                {
                    '@id': 'urn:epc:id:sgtin:rvBnee6a17UHzwMR',
                    name: 'rvBnee6a17UHzwMR',
                },
                {
                    '@id': 'urn:epc:id:sgtin:5PvwMYjJ4hn44h0m',
                    name: '5PvwMYjJ4hn44h0m',
                },
                {
                    '@id': 'urn:epc:id:sgtin:yQjfQtvhZd0OMaOn',
                    name: 'yQjfQtvhZd0OMaOn',
                },
                {
                    '@id': 'urn:epc:id:sgtin:nNtnX8gI7o9Fa0im',
                    name: 'nNtnX8gI7o9Fa0im',
                },
                {
                    '@id': 'urn:epc:id:sgtin:MTNbm0YSYTrChVgW',
                    name: 'MTNbm0YSYTrChVgW',
                },
                {
                    '@id': 'urn:epc:id:sgtin:YdpdLEBw0fYcwjDA',
                    name: 'YdpdLEBw0fYcwjDA',
                },
                {
                    '@id': 'urn:epc:id:sgtin:KCxvOIy8UaIC7kRw',
                    name: 'KCxvOIy8UaIC7kRw',
                },
                {
                    '@id': 'urn:epc:id:sgtin:xcEHuRWCNq8tcLRp',
                    name: 'xcEHuRWCNq8tcLRp',
                },
                {
                    '@id': 'urn:epc:id:sgtin:68pE0jihcVaC2zAA',
                    name: '68pE0jihcVaC2zAA',
                },
                {
                    '@id': 'urn:epc:id:sgtin:McKrwfcuSAukbq8t',
                    name: 'McKrwfcuSAukbq8t',
                },
                {
                    '@id': 'urn:epc:id:sgtin:EpYQ5LskI7MCSScK',
                    name: 'EpYQ5LskI7MCSScK',
                },
                {
                    '@id': 'urn:epc:id:sgtin:XRcZC8PaSunCSmU0',
                    name: 'XRcZC8PaSunCSmU0',
                },
                {
                    '@id': 'urn:epc:id:sgtin:W7NfrXcchGeVcnWy',
                    name: 'W7NfrXcchGeVcnWy',
                },
            ],
        },
    };

    // divider();

    const nodeInfo = await DkgClient.node.info();
    console.log('======================== NODE INFO RECEIVED');
    console.log(nodeInfo);

    divider();

    // console.time('Publish (1 replication, 3 finalizations)')
    // const result0 = await DkgClient.asset.create(content, {
    //     epochsNum: 2,
    //     tokenAmount: '100',
    //     minimumNumberOfFinalizationConfirmations: 3,
    //     minimumNumberOfNodeReplications: 1,
    // });
    // console.timeEnd('Publish (1 replication, 3 finalizations)')

    // console.log(JSON.stringify(result0));

    // divider();

    // console.time('Publish (1 replication, 1 finalization)');
    // const result1 = await DkgClient.asset.create(content, {
    //     epochsNum: 2,
    //     tokenAmount: '100',
    //     minimumNumberOfFinalizationConfirmations: 1,
    //     minimumNumberOfNodeReplications: 1,
    // });
    // console.timeEnd('Publish (1 replication, 1 finalization)');

    // console.log(JSON.stringify(result1));

    // divider();

    // console.time('Publish (3 replications, 1 finalizations)');
    // const result2 = await DkgClient.asset.create(content, {
    //     epochsNum: 2,
    //     minimumNumberOfFinalizationConfirmations: 1,
    //     minimumNumberOfNodeReplications: 3,
    // });
    // console.timeEnd('Publish (3 replications, 1 finalizations)');

    // console.log(result2);

    // await sleepForMilliseconds(15000);

    console.time('aaaaa');
    const result3 = await DkgClient.asset.get(
        'did:dkg:otp/0x1a061136ed9f5ed69395f18961a0a535ef4b3e5f/243039',
        {
            contentType: 'all',
        },
    );
    console.timeEnd('aaaa');

    console.log(result3);

    // divider();

    // console.time('Publish (5 replications, 5 finalizations)')
    // const result3 = await DkgClient.asset.create(content, {
    //     epochsNum: 2,
    //     minimumNumberOfFinalizationConfirmations: 5,
    //     minimumNumberOfNodeReplications: 5,
    // });
    // console.timeEnd('Publish (5 replications, 5 finalizations)');

    // console.log(JSON.stringify(result3));

    // divider();

    // const createCollectionResult = await DkgClient.graph.create(content, {
    //     epochsNum: 2,
    //     tokenAmount: '100',
    //     minimumNumberOfFinalizationConfirmations: 1,
    // });
    // console.log('======================== ASSET CREATED');
    // console.log(createCollectionResult);

    // divider();

    // const publishFinalityResult = await DkgClient.graph.publishFinality(createAssetResult.UAL);
    // console.log('======================== ASSET FINALITY');
    // console.log(publishFinalityResult);

    // const getOperationResult = await DkgClient.graph.get(createCollectionResult.UAL);
    // console.log('======================== ASSET GET');
    // console.log(getOperationResult);

    // divider();

    // const queryOperationResult = await DkgClient.graph.query(
    //     `PREFIX gs1: <https://gs1.org/voc/>
    //     PREFIX schema: <http://schema.org/>

    //     SELECT ?recipeNameRaw ?baseUal
    //     WHERE {
    //       ?recipe a schema:Recipe ;
    //       GRAPH ?ual {
    //           ?recipe     schema:name ?recipeNameRaw ;
    //       }
    //        FILTER (STRSTARTS(STR(?ual), "did:dkg:base:84532/0x4e8ebfce9a0f4be374709f1ef2791e8ca6371ecb/"))
    //     BIND (REPLACE(STR(?ual), "(did:dkg:base:[^/]+/[^/]+/[^/]+)(/.*)?", "$1") AS ?baseUal)
    //     }`,
    //     'SELECT',
    //     {
    //         graphLocation: 'LOCAL_KG',
    //         graphState: 'CURRENT',
    //     },
    // );
    // console.log('======================== ASSET QUERY');
    // console.log(queryOperationResult);

    // console.time('Publish (3 replications, 1 finalizations)');

    // const queryOperationResult1 = await DkgClient.graph.query(
    //     `CONSTRUCT {  ?s ?p ?o .}WHERE {  GRAPH ?g {    ?s ?p ?o .  }  VALUES ?g {    <did:dkg:gnosis:10200/0xcdd5ce31fe2181490348ef6fd9f782d575776e5b/4/1/public>    <did:dkg:gnosis:10200/0xcdd5ce31fe2181490348ef6fd9f782d575776e5b/4/2/public>     }}`,
    //     'CONSTRUCT',
    // );
    // console.log('======================== ASSET QUERY');
    // console.log(JSON.stringify(queryOperationResult1));

    // divider();

    // console.timeEnd('Publish (3 replications, 1 finalizations)');
    // console.time('aaaa');

    // console.time('Query (3 replications, 1 finalizations)');

    // const queryOperationResult = await DkgClient.graph.query(
    //     `CONSTRUCT {  ?s ?p ?o .} WHERE {  {    GRAPH <did:dkg:gnosis:10200/0xcdd5ce31fe2181490348ef6fd9f782d575776e5b/4/1/public> {      ?s ?p ?o .    }  }  UNION  {    GRAPH <did:dkg:gnosis:10200/0xcdd5ce31fe2181490348ef6fd9f782d575776e5b/4/2/public> {      ?s ?p ?o .    }  } }`,
    //     'CONSTRUCT',
    // );
    // console.log('======================== ASSET QUERY');
    // console.log(JSON.stringify(queryOperationResult));

    // // divider();

    // console.timeEnd('Query (3 replications, 1 finalizations)');
    // console.time('aaaa');
})();
