export type MasterChef = {
    id?: string,
    bonusMultiplier?: string,
    bonusEndBlock?: string,
    devaddr?: string,
    migrator?: string,
    owner?: string,
    startBlock?: string,
    shib?: string,
    shibPerBlock?: string,
    totalAllocPoint?: string,
    pools?: Pool[],
    poolCount?: string,
    slpBalance?: string,
    slpAge?: string,
    slpAgeRemoved?: string,
    slpDeposited?: string,
    slpWithdrawn?: string,
    history?: History[],
    updatedAt?: string
}


export type History = {
    id?: string,
    owner?: MasterChef,
    slpBalance?: string,
    slpAge?: string,
    slpAgeRemoved?: string,
    slpDeposited?: string,
    slpWithdrawn?: string,
    timestamp?: string,
    block?: string
}


export type Pool = {
    id?: string,
    owner?: MasterChef,
    pair?: string,
    allocPoint?: string,
    lastRewardBlock?: string,
    accShibPerShare?: string,
    balance?: string,
    users?: User[],
    userCount?: string,
    slpBalance?: string,
    slpAge?: string,
    slpAgeRemoved?: string,
    slpDeposited?: string,
    slpWithdrawn?: string,
    timestamp?: string,
    block?: string,
    updatedAt?: string,
    entryUSD?: string,
    exitUSD?: string,
    shibHarvested?: string,
    shibHarvestedUSD?: string
}


export type PoolHistory = {
    id?: string,
    pool?: Pool,
    slpBalance?: string,
    slpAge?: string,
    slpAgeRemoved?: string,
    slpDeposited?: string,
    slpWithdrawn?: string,
    userCount?: string,
    timestamp?: string,
    block?: string,
    entryUSD?: string,
    exitUSD?: string,
    shibHarvested?: string,
    shibHarvestedUSD?: string
}


export type User = {
    id?: string,
    address?: string,
    pool?: Pool,
    amount?: string,
    rewardDebt?: string,
    entryUSD?: string,
    exitUSD?: string,
    shibHarvested?: string,
    shibHarvestedUSD?: string,
    timestamp?: string,
    block?: string
}