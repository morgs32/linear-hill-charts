
declare namespace React {

    // Keep in sync with JSX namespace in ./jsx-runtime.d.ts and ./jsx-dev-runtime.d.ts
    namespace JSX {
        type ElementType = GlobalJSXElementType;
        interface Element extends GlobalJSXElement {}
        interface ElementClass extends GlobalJSXElementClass {}
        interface ElementAttributesProperty extends GlobalJSXElementAttributesProperty {}
        interface ElementChildrenAttribute extends GlobalJSXElementChildrenAttribute {}

        type LibraryManagedAttributes<C, P> = GlobalJSXLibraryManagedAttributes<C, P>;

        interface IntrinsicAttributes extends GlobalJSXIntrinsicAttributes {}
        interface IntrinsicClassAttributes<T> extends GlobalJSXIntrinsicClassAttributes<T> {}
        interface IntrinsicElements extends GlobalJSXIntrinsicElements {}
    }
}