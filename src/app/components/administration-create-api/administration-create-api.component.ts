import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IApi } from 'src/app/interfaces/api.interface';
import { ApiService } from 'src/app/services/apis/api.service';

@Component({
  selector: 'app-administration-create-api',
  templateUrl: './administration-create-api.component.html',
  styleUrls: ['./administration-create-api.component.scss']
})
export class AdministrationCreateApiComponent implements OnInit {
  constructor(private formBuilder:FormBuilder, private apiService:ApiService) { }

  public createSubForm=this.formBuilder.group({
    name:['',[Validators.required]],
    url:['',[Validators.required]],
    apiKey:['',[Validators.required]],
    apiHost:['',[Validators.required]],
    apiKeyHeader:['',[Validators.required]],
    apiHostHeader:['',[Validators.required]],
  })

  ngOnInit(): void {
  }

  onSubmit(){
    const name=this.createSubForm.controls["name"].value;
    const url=this.createSubForm.controls["url"].value;
    const apiKey=this.createSubForm.controls["apiKey"].value;
    const apiHost=this.createSubForm.controls["apiHost"].value;
    const apiKeyHeader=this.createSubForm.controls["apiKeyHeader"].value;
    const apiHostHeader=this.createSubForm.controls["apiHostHeader"].value;

    let api : IApi = {
      id:0,
      name:name,
      url:url,
      apiKey:apiKey,
      apiHost:apiHost,
      apiKeyHeader:apiKeyHeader,
      apiHostHeader:apiHostHeader
    }

    this.apiService.Create(api).subscribe(data => {

      if (data) {
        alert("Successfully create");
        console.log(data);
        location.reload();
      }
      else
      {
        alert("Error create");
      }
      })
      }

}
