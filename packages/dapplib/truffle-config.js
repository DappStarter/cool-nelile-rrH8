require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food town renew pizza million coral light army gift'; 
let testAccounts = [
"0x498bfa142b0381f291c612d4ce2e4a8c1862cccbe07c2a28b26088def5d4d8e0",
"0x0cc8ac4b4cc514cbf41d468b8a92f22948def69e809eb6169a73f70b03edae6c",
"0x32473716c8e87ca96debf312a05d4d583ffbe27cbc69f5e597dcf2176ac445b5",
"0x69eaae73e7a45a596003387baf09204b43f64a857cf29e0f1c1b94f506960bd1",
"0x41e3f583a4f479e13f772d63219473ef76480efb0fb40091efd1352b9578bd78",
"0xac76b57f9fa6c7894a11610a1d8cf9d8c9f7a8ffa1dc59aa324ee3a84a0df21a",
"0xe61e0a367ea922e63552b5e8c53c43a225fd24dd83c2ad4b349cd17e87f29cce",
"0x3b69cb34430e235450b772e797002d5fe9cb075037ca5f5c357ff1027f8ad34c",
"0x727f0ed506cdad6bd32900a92db46a6199e143725803146e61def2d8a48f38ba",
"0xe43f147865c4dbc324525c9a869b503e1d1248f986245cc5b73c472c29f7a31c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

