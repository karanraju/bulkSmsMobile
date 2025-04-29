import React from "react";

export interface ReportDetailsProps{
    title?:string,
    date?:string,
    time?:string,
    icon?:React.ReactNode,
    billNumber?:string
    billStatus?:string
    totalAmount?:string
    timing?:string
}