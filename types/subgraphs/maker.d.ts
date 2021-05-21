export type Maker = {
    id?: string,
    shibServed?: string,
    servers?: Server[],
    servings?: Serving[]
}


export type Server = {
    id?: string,
    maker?: Maker,
    shibServed?: string,
    servings?: Serving[]
}


export type Serving = {
    id?: string,
    maker?: Maker,
    server?: Server,
    tx?: string,
    pair?: string,
    token0?: string,
    token1?: string,
    shibServed?: string,
    block?: string,
    timestamp?: string
}