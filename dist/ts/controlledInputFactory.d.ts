import { InputConfigCollectionType } from "@/ControlledInputProvider";
import React from "react";
export declare const baseInputs: InputConfigCollectionType;
export declare function controlledInputFactory(additionalInputs?: InputConfigCollectionType): {
    staticInputs: InputConfigCollectionType;
    ControlledInput: React.MemoExoticComponent<(originalProps: any) => import("react/jsx-runtime").JSX.Element>;
};
