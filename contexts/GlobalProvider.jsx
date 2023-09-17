import { CartProvider } from './Context'

export function GlobalProvider({ children }) {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    )
}

