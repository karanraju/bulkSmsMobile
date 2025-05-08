import React from "react";

export interface customButtonProps{
    title?:string,
    onPress?:()=>void,
    style?:object,
    titleStyle?:object,
    icon?:React.ReactNode,
    showRightArrow?:boolean
} 