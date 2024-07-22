import { StoreProvider } from '@/lib/store/provider'
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <StoreProvider>
                {children}
            </StoreProvider>
        </NextUIProvider>

    )
}