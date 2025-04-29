import React from "react";

export interface DetailsWrapperProps{
    title?: string;
    loading?: boolean;
    children?: any;
    style?:object;
    icon?:React.ReactNode;
    name?:string
}