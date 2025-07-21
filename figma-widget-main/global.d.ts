
declare global {
    namespace Dom {
        type Headers = any
    }
    
}

declare namespace JSX {
    type Element = { foo: boolean };
}

export default global
