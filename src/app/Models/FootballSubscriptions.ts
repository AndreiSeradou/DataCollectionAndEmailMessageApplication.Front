export class FootballSubscriptions
{
    public id: number;
    public name:string="";
    public description:string="";
    public cronParams:string="";
    public lastRunTime:string="";    
    public userName:string="";


    constructor(fullName:string,description:string,userName:string, cronParams:string, lastRunTime:string, id:number)
    {
        this.name=fullName;
        this.description=description;
        this.userName=userName;
        this.cronParams = cronParams;
        this.lastRunTime = lastRunTime;
        this.id = id;
    }
}