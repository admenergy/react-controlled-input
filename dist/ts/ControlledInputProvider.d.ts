import React from "react";
export interface InputConfigType {
    type: string;
    name: string;
    component: React.ComponentType<any>;
}
export interface InputConfigCollectionType {
    [key: string]: InputConfigType;
}
export interface ControlledInputProviderPropTypes {
    children: React.ReactNode;
    inputs: InputConfigCollectionType;
}
export declare function useControlledInputProvider(): InputConfigCollectionType;
export declare function ControlledInputProvider({ children, inputs, }: ControlledInputProviderPropTypes): import("react/jsx-runtime").JSX.Element;
