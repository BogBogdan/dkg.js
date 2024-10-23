const jsonld = require('jsonld');
const DKG = require('../index.js');

const ENVIRONMENT = 'testnet';
const OT_NODE_HOSTNAME = 'https://galatea.origin-trail.network';
const OT_NODE_PORT = '8900';
const PUBLIC_KEY = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
const PRIVATE_KEY = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';

const DkgClient = new DKG({
    environment: ENVIRONMENT,
    endpoint: OT_NODE_HOSTNAME,
    port: OT_NODE_PORT,
    blockchain: {
        name: 'base:84532',
        publicKey: PUBLIC_KEY,
        privateKey: PRIVATE_KEY,
    },
    maxNumberOfRetries: 30,
    frequency: 2,
    contentType: 'all',
});

function divider() {
    console.log('==================================================');
    console.log('==================================================');
    console.log('==================================================');
}

(async () => {
    const content = {
        public: {
            '@context': ['https://schema.org'],
            '@id': 'uuid:1',
            company: 'OT',
            user: {
                '@id': 'uuid:user:1',
            },
            city: {
                '@id': 'uuid:belgrade',
            },
        },
        private: {
            '@context': ['https://schema.org'],
            '@graph': [
                {
                    '@id': 'uuid:user:1',
                    name: 'Adam',
                    lastname: 'Smith',
                },
                {
                    '@id': 'uuid:belgrade',
                    title: 'Belgrade',
                    postCode: '11000',
                },
            ],
        },
    };

    divider();

    const nodeInfo = await DkgClient.node.info();
    console.log('======================== NODE INFO RECEIVED');
    console.log(nodeInfo);

    divider();

    const assertions = await DkgClient.assertion.formatGraph(content);
    console.log('======================== ASSERTIONS FORMATTED');
    console.log(JSON.stringify(assertions));

    divider();

    const publicAssertionId = await DkgClient.assertion.getPublicAssertionId(content);
    console.log('======================== PUBLIC ASSERTION ID (MERKLE ROOT) CALCULATED');
    console.log(publicAssertionId);

    divider();

    const publicAssertionSize = await DkgClient.assertion.getSizeInBytes(content);
    console.log('======================== PUBLIC ASSERTION SIZE CALCULATED');
    console.log(publicAssertionSize);

    divider();

    const bidSuggestion = await DkgClient.network.getBidSuggestion(
        publicAssertionId,
        publicAssertionSize,
        { epochsNum: 2 },
    );
    console.log('======================== BID SUGGESTION CALCULATED');
    console.log(bidSuggestion);

    divider();

    const increaseAllowanceResult = await DkgClient.asset.increaseAllowance(bidSuggestion);
    console.log('======================== ALLOWANCE INCREASED');
    console.log(increaseAllowanceResult);

    divider();

    const decreaseAllowanceResult = await DkgClient.asset.decreaseAllowance(bidSuggestion);
    console.log('======================== ALLOWANCE DECREASED');
    console.log(decreaseAllowanceResult);

    divider();

    const setAllowanceResult = await DkgClient.asset.setAllowance(bidSuggestion);
    console.log('======================== ALLOWANCE SET');
    console.log(setAllowanceResult);

    divider();

    const createAssetResult = await DkgClient.asset.create(content, { epochsNum: 2 });
    console.log('======================== ASSET CREATED');
    console.log(createAssetResult);

    // divider();

    // const ownerResult = await DkgClient.asset.getOwner(createAssetResult.UAL);
    // console.log('======================== GET ASSET OWNER');
    // console.log(ownerResult);

    // divider();

    // const getAssetResult = await DkgClient.asset.get(createAssetResult.UAL);
    // console.log('======================== ASSET RESOLVED');
    // console.log(JSON.stringify(getAssetResult, null, 2));

    // divider();

    // const getLatestAssetResult = await DkgClient.asset.get(createAssetResult.UAL);
    // console.log('======================== ASSET LATEST  RESOLVED');
    // console.log(JSON.stringify(getLatestAssetResult, null, 2));

    // divider();

    // let getLatestFinalizedAssetResult = await DkgClient.asset.get(createAssetResult.UAL, {
    //     state: 'LATEST_FINALIZED',
    // });
    // console.log('======================== ASSET LATEST FINALIZED RESOLVED');
    // console.log(JSON.stringify(getLatestFinalizedAssetResult, null, 2));

    // divider();

    // getLatestFinalizedAssetResult = await DkgClient.asset.get(createAssetResult.UAL, {
    //     state: 'LATEST_FINALIZED',
    // });
    // console.log('======================== ASSET LATEST FINALIZED RESOLVED');
    // console.log(JSON.stringify(getLatestFinalizedAssetResult, null, 2));

    // divider();

    // const getFirstStateByIndex = await DkgClient.asset.get(createAssetResult.UAL, {
    //     state: 0,
    // });
    // console.log('======================== ASSET FIRST STATE (GET BY STATE INDEX) RESOLVED');
    // console.log(JSON.stringify(getFirstStateByIndex, null, 2));

    // divider();

    // const getFirstStateByHash = await DkgClient.asset.get(createAssetResult.UAL, {
    //     state: createAssetResult.publicAssertionId,
    // });
    // console.log('======================== ASSET FIRST STATE (GET BY STATE HASH) RESOLVED');
    // console.log(JSON.stringify(getFirstStateByHash, null, 2));

    // divider();

    // let queryResult = await DkgClient.graph.query(
    //     'construct { ?s ?p ?o } where { ?s ?p ?o .}',
    //     'CONSTRUCT',
    // );
    // console.log('======================== QUERY LOCAL CURRENT RESULT');
    // console.log(queryResult);
    // divider();
    // console.log(
    //     JSON.stringify(
    //         await jsonld.fromRDF(queryResult.data, {
    //             algorithm: 'URDNA2015',
    //             format: 'application/n-quads',
    //         }),
    //         null,
    //         2,
    //     ),
    // );

    // divider();

    

    // let queryResult = await DkgClient.graph.query(
    //     'SELECT * WHERE {?s ?p ?o} LIMIT 10',
    //     'SELECT',
    // );
    // console.log('======================== QUERY LOCAL CURRENT RESULT');
    // console.log(queryResult);

    // divider();

    const jsonldData = {
        "@context": [
          "https://ekgf.github.io/dprod/dprod.jsonld",
          {
            "title": "dct:title",
            "description": "dct:description",
            "dataProductOwner": {
              "@id": "dprod:dataProductOwner",
              "@type": "@id"
            },
            "lifecycleStatus": {
              "@id": "dprod:lifecycleStatus",
              "@type": "@id"
            },
            "outputPort": "dprod:outputPort",
            "endpointURL": "dcat:endpointURL",
            "isAccessServiceOf": "dprod:isAccessServiceOf",
            "format": "dct:format",
            "isDistributionOf": "dprod:isDistributionOf",
            "conformsTo": {
              "@id": "dct:conformsTo",
              "@type": "@id"
            }
          }
        ],
        "@id": "https://y.com/products/uk-bonds",
        "@type": "dprod:DataProduct",
        "title": "UK Bonds",
        "description": "UK Bonds is your one-stop-shop for all your bonds!",
        "dataProductOwner": "https://www.linkedin.com/in/tonyseale/",
        "lifecycleStatus": "https://ekgf.github.io/dprod/data/lifecycle-status/Consume",
        "outputPort": {
          "@type": "dcat:DataService",
          "endpointURL": "https://y.com/uk-10-year-bonds",
          "isAccessServiceOf": {
            "@type": "dcat:Distribution",
            "format": "https://www.iana.org/assignments/media-types/application/json",
            "isDistributionOf": {
              "@type": "dcat:Dataset",
              "@id": "https://y.com/products/uk-bonds/datasets/10-year",
              "conformsTo": "https://spec.edmcouncil.org/fibo/ontology/SEC/Debt/Bonds/CallableBond"
            }
          }
        }
      }
      

    const insertResult = await DkgClient.graph.insert(jsonldData);
    console.log('======================== NQUADS');
    console.log(insertResult);

    divider();

    let queryResult = await DkgClient.graph.query(
        'SELECT ?p ?o WHERE {?s <https://ekgf.github.io/dprod/title> "UK Bonds" . ?s ?p ?o . }',
        'SELECT',
    );
    console.log('======================== QUERY LOCAL CURRENT RESULT');
    console.log(queryResult);

    divider();

    // queryResult = await DkgClient.graph.query(
    //     'construct { ?s ?p ?o } where { ?s ?p ?o . <uuid:user:1> ?p ?o }',
    //     'CONSTRUCT',
    //     { graphState: 'HISTORICAL', graphLocation: 'LOCAL_KG' },
    // );
    // console.log('======================== QUERY LOCAL HISTORY RESULT');
    // console.log(
    //     JSON.stringify(
    //         await jsonld.fromRDF(queryResult.data, {
    //             algorithm: 'URDNA2015',
    //             format: 'application/n-quads',
    //         }),
    //         null,
    //         2,
    //     ),
    // );

    // divider();

    // const extendStoringResult = await DkgClient.asset.extendStoringPeriod(createAssetResult.UAL, 2);
    // console.log(`======================== ASSET STORING PERIOD EXTENDED`);
    // console.log(extendStoringResult);

    // divider();

    // const addTokensResult = await DkgClient.asset.addTokens(createAssetResult.UAL, {tokenAmount: 1000});
    // console.log(`======================== ADD TOKENS FOR AN ASSET`);
    // console.log(addTokensResult);

    // divider();

    // const newOwner = '0x2ACa90078563133db78085F66e6B8Cf5531623Ad';
    // const transferResult = await DkgClient.asset.transfer(createAssetResult.UAL, newOwner);
    // console.log(`======================== ASSET TRANSFERRED TO ${newOwner}`);
    // console.log(transferResult);

    // divider();
})();
