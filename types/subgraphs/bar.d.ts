export type Bar = {
    id?: string,
    decimals?: string,
    name?: string,
    shib?: string,
    symbol?: string,
    totalSupply?: string,
    ratio?: string,
    xShibMinted?: string,
    xShibBurned?: string,
    shibStaked?: string,
    shibStakedUSD?: string,
    shibHarvested?: string,
    shibHarvestedUSD?: string,
    xShibAge?: string,
    xShibAgeDestroyed?: string,
    users?: User[],
    updatedAt?: string
}


export type User = {
    id?: string,
    bar?: Bar,
    xShib?: string,
    xShibIn?: string,
    xShibOut?: string,
    xShibMinted?: string,
    xShibBurned?: string,
    xShibOffset?: string,
    xShibAge?: string,
    xShibAgeDestroyed?: string,
    shibStaked?: string,
    shibStakedUSD?: string,
    shibHarvested?: string,
    shibHarvestedUSD?: string,
    shibOut?: string,
    shibIn?: string,
    usdOut?: string,
    usdIn?: string,
    updatedAt?: string,
    shibOffset?: string,
    usdOffset?: string
}


export type Timeframe = 'Day';


export type History = {
    id?: string,
    date?: string,
    timeframe?: Timeframe,
    shibStaked?: string,
    shibStakedUSD?: string,
    shibHarvested?: string,
    shibHarvestedUSD?: string,
    xShibAge?: string,
    xShibAgeDestroyed?: string,
    xShibMinted?: string,
    xShibBurned?: string,
    xShibSupply?: string,
    ratio?: string
}