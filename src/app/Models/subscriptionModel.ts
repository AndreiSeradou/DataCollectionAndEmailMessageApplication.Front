export class Subscriptions
{
    public id: number;
    public name:string="";
    public description:string="";
    public cronParams:string="";
    public apiParams:string="";
    public lastRunTime:string="";
    public apiName:string="";    
    public userName:string="";


    constructor(fullName:string,description:string,userName:string, cronParams:string, lastRunTime:string, id:number, apiParams:string,apiName:string)
    {
        this.name=fullName;
        this.description=description;
        this.userName=userName;
        this.cronParams = cronParams;
        this.lastRunTime = lastRunTime;
        this.id = id;
        this.apiParams = apiParams;
        this.apiName = apiName;
    }
}