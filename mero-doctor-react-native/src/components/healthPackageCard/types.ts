export interface HealthPackageCardProps{
    title?:string,
    discount?:string,
    info?:string,
    tests?:string[],
    totalAmount?:string,
    previousAmount?:string,
    onPress?:()=>void
}