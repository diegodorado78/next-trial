'use client'
import { useRef } from "react"
import { AppStore, makeStore } from "."
import { Provider } from "react-redux"

export function StoreProvider({ children, }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {// Only create the store if it doesn't already exist or it has
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
    }

    return <Provider store={storeRef.current}> {children} </Provider>
}