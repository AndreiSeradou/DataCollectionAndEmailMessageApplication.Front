export class User
{
    public fullName:string="";
    public email:string="";
    public userName:string="";
    public numberOfUsesApis:number = 0;
    public numberOfRunningJobs :number = 0;

    constructor(fullName:string,email:string,userName:string, numberOfUsesApis:number,numberOfRunningJobs: number)
    {
        this.fullName=fullName;
        this.email=email;
        this.userName=userName;
        this.numberOfRunningJobs = numberOfRunningJobs;
        this.numberOfUsesApis = numberOfUsesApis;
    }

    
}