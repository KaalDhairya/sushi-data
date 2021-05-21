export const graphAPIEndpoints = {
    topdog: 'https://api.thegraph.com/subgraphs/name/shibswap/master-chef',
    bar: 'https://api.thegraph.com/subgraphs/name/shibswap/shib-bar',
    timelock: 'https://api.thegraph.com/subgraphs/name/shibswap/shib-timelock',
    maker: 'https://api.thegraph.com/subgraphs/name/shibswap/shib-maker',
    exchange: {
        1: 'https://api.thegraph.com/subgraphs/name/shibswap/exchange',
        137: 'https://api.thegraph.com/subgraphs/name/shibswap/matic-exchange'
    },
    exchange_v1: 'https://api.thegraph.com/subgraphs/name/jiro-ono/shibswap-v1-exchange',
    blocklytics: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
    lockup: 'https://api.thegraph.com/subgraphs/name/matthewlilley/lockup',
    bentobox: 'https://api.thegraph.com/subgraphs/name/jiro-ono/bento',
    vesting: 'https://api.thegraph.com/subgraphs/name/lufycz/shibclaimedvesting'
};

export const graphWSEndpoints = {
    bar: 'wss://api.thegraph.com/subgraphs/name/shibswap/shib-bar',
    exchange: {
        1: 'wss://api.thegraph.com/subgraphs/name/shibswap/exchange',
        137: 'wss://api.thegraph.com/subgraphs/name/shibswap/matic-exchange'
    },
    blocklytics: 'wss://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks'
};

export const barAddress = "0x8798249c2e607446efb7ad49ec89dd1865ff4272";
export const makerAddress = "0xe11fc0b43ab98eb91e9836129d1ee7c3bc95df50";
export const chefAddress = "0xc2edad668740f1aa35e4d8f227fb8e17dca888cd";
export const shibAddress = "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2";
export const factoryAddress = "0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac";

export const TWENTY_FOUR_HOURS = 86400;