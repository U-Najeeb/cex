'use client'

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { SUPPORTED_TOKENS, TokenDetails } from '@/lib/tokens'
import React, { useState } from 'react'

export default function Swap() {
    const [baseAsset, setBaseAsset] = useState(SUPPORTED_TOKENS[0])
    const [qouteAsset, setQouteAsset] = useState(SUPPORTED_TOKENS[1])

    return (
        <div>
            <SwapInputRow onSelect={(asset) => {
                setBaseAsset(asset)
            }} />
        </div>
    )
}

function SwapInputRow({ onSelect }: {
    onSelect: (asset: TokenDetails) => void
}) {
    return <div>
        <AsserSelector />
    </div>
}

function AsserSelector() {
    return <div>
        <Select >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {SUPPORTED_TOKENS.map(token => <SelectItem key={token.name} value={token.name} >
                        {token.name}
                    </SelectItem>)}
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
}

