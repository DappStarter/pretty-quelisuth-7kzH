require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name reward stereo pulse harvest option fringe spell'; 
let testAccounts = [
"0x3619d85d935008394ec62e1ce1cd3004846c4b507a92030a130c8a0cf11d9af7",
"0x38cc6dcf7e91f159e6e42b64c0188535ca7548353e212184db9b3ec43dfc0a61",
"0x88137e491f193381808aef106777e47e6bce1ed1a389dfcef4e829b710b7e588",
"0x05c158aff34851364aec6153fc96a05ff796a32ebe9ecacbbb63e8092632dff1",
"0x933ce0a8e433c54f41e2ce06217957b0a7eb02949877ba3921dbb764523623ab",
"0xa126ac8fdc134ccf262fa55224e4b5d8b2eeeae3a7bd4372e8a86e72a589fbfd",
"0x03fc9374ff247401064d028208402f392ead7f85f499cdf3644589a57bd674f6",
"0xc3076fd975cc5c8b4ef7b06dc2750930449c1c07900be6a84733666b5fca89f4",
"0x10edbd3be6699554a39c8da727d1b96d7dcb8fc29130d293fe037dea484ff342",
"0xc3786a0fad290a50e9546fd09b50ddbc0e80ad4ef282b9617267d654a79b2e31"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

