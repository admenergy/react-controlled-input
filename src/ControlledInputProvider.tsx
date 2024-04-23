import React, { createContext } from "react";

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

const ControlledInputProviderContext = createContext(
  {} as InputConfigCollectionType,
);

export function useControlledInputProvider(): InputConfigCollectionType {
  return React.useContext(ControlledInputProviderContext);
}

export function ControlledInputProvider({
  children,
  inputs,
}: ControlledInputProviderPropTypes) {
  return (
    <ControlledInputProviderContext.Provider value={inputs}>
      {children}
    </ControlledInputProviderContext.Provider>
  );
}
