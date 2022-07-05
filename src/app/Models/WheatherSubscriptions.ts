export class WheatherSubscriptions
{
    public id:number;
    public name:string="";
    public description:string="";
    public cronParams:string="";
    public city:string="";
    public date:string="";
    public lastRunTime:string="";    
    public userName:string="";


    constructor(fullName:string,description:string,userName:string, cronParams:string,city:string, date:string, lastRunTime:string, id:number)
    {
        this.name=fullName;
        this.description=description;
        this.userName=userName;
        this.cronParams = cronParams;
        this.city = city;
        this.date = date;
        this.lastRunTime = lastRunTime;
        this.id = id;
    }  
}