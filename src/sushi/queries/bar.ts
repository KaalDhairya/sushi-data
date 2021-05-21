import ws from 'isomorphic-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws'; 

import { request, gql } from 'graphql-request';

import { graphAPIEndpoints, graphWSEndpoints, barAddress } from '../../constants';
import { timestampToBlock } from '../../utils';

import type {
    Arg1,
    Awaited,
} from './../../../types'

import {
    User,
    Bar
} from '../../../types/subgraphs/bar';



export async function info({block = undefined, timestamp = undefined}: Arg1 = {}) {
    block = block ? block : timestamp ? (await timestampToBlock(timestamp)) : undefined;
    const blockString = block ? `block: { number: ${block} }` : "";

    const result = await request(graphAPIEndpoints.bar,
        gql`{
                bar(id: "${barAddress}", ${blockString}) {
                    ${info_properties.toString()}
                }
            }`
    );

    return info_callback(result.bar);
}



export function observeInfo() {
    const query = gql`
        subscription {
            bar(id: "${barAddress}") {
                ${info_properties.toString()}
            }
    }`;

    const client = new SubscriptionClient(graphWSEndpoints.bar, { reconnect: true, }, ws,);
    const observable = client.request({ query });

    return {
        subscribe({next, error, complete}: {
            next(data: Awaited<ReturnType<typeof info>>): any;
            error?(error: any): any;
            complete?: (() => void) | undefined;
        }) {
            return observable.subscribe({
                next(results) {
                    next(info_callback(results?.data?.bar));
                },
                error,
                complete
            });
        }
    };
}



export async function user({block = undefined, timestamp = undefined, address}: Arg1 & {address: string}) {
    if(!address) { throw new Error("shib-data: User address undefined"); }

    block = block ? block : timestamp ? (await timestampToBlock(timestamp)) : undefined;
    const blockString = block ? `block: { number: ${block} }` : "";

    const result = await request(graphAPIEndpoints.bar,
        gql`{
                user(id: "${address.toLowerCase()}", ${blockString}) {
                    ${user_properties.toString()}
                }
            }`
    );

    return user_callback(result.user);
}

export default {
    info,
    observeInfo,
    user
}



const info_properties = [
    'decimals',
    'name',
    'shib',
    'symbol',
    'totalSupply',
    'ratio',
    'xShibMinted',
    'xShibBurned',
    'shibStaked',
    'shibStakedUSD',
    'shibHarvested',
    'shibHarvestedUSD',
    'xShibAge',
    'xShibAgeDestroyed',
    'updatedAt'
];

function info_callback(results: Bar) {
    return ({
        decimals: Number(results.decimals),
        name: String(results.name),
        shib: String(results.shib),
        symbol: String(results.symbol),
        totalSupply: Number(results.totalSupply),
        ratio: Number(results.ratio),
        xShibMinted: Number(results.xShibMinted),
        xShibBurned: Number(results.xShibBurned),
        shibStaked: Number(results.totalSupply) * Number(results.ratio),
        shibStakedUSD: Number(results.shibStakedUSD),
        shibHarvested: Number(results.shibHarvested),
        shibHarvestedUSD: Number(results.shibHarvestedUSD),
        xShibAge: Number(results.xShibAge),
        xShibAgeDestroyed: Number(results.xShibAgeDestroyed),
        updatedAt: Number(results.updatedAt)
    })
};



const user_properties = [
    'xShib',
    'xShibIn',
    'xShibOut',
    'xShibMinted',
    'xShibBurned',
    'xShibOffset',
    'xShibAge',
    'xShibAgeDestroyed',
    'shibStaked',
    'shibStakedUSD',
    'shibHarvested',
    'shibHarvestedUSD',
    'shibIn',
    'shibOut',
    'usdOut',
    'usdIn',
    'updatedAt',
    'shibOffset',
    'usdOffset'
];

function user_callback(results: User) {
    return ({
        xShib: Number(results.xShib),
        xShibIn: Number(results.xShibIn),
        xShibOut: Number(results.xShibOut),
        xShibMinted: Number(results.xShibMinted),
        xShibBurned: Number(results.xShibBurned),
        xShibOffset: Number(results.xShibOffset),
        xShibAge: Number(results.xShibAge),
        xShibAgeDestroyed: Number(results.xShibAgeDestroyed),
        shibStaked: Number(results.shibStaked),
        shibStakedUSD: Number(results.shibStakedUSD),
        shibHarvested: Number(results.shibHarvested),
        shibHarvestedUSD: Number(results.shibHarvestedUSD),
        shibIn: Number(results.shibIn),
        shibOut: Number(results.shibOut),
        usdOut: Number(results.usdOut),
        usdIn: Number(results.usdIn),
        updatedAt: Number(results.updatedAt),
        shibOffset: Number(results.shibOffset),
        usdOffset: Number(results.usdOffset)
    })
};