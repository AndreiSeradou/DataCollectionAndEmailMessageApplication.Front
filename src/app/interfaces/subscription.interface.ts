import { DeclarationListEmitMode } from "@angular/compiler";

export interface ISubscriptions
{
    id: number;
    name:string;
    description:string;
    cronExpression:string;
    apiParams:string;
    lastRunTime:string;
    dateStart:string;
    apiName:string;
    userName:string;
}
