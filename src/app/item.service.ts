import {Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemAddFormComponent } from './item-add-form/item-add-form.component';

@Injectable({
  providedIn: 'root'
})
export class ItemService implements OnInit{
  item:any
  location:any
  lat:any
  long :any
  locationCount:any

  
  constructor(private http: HttpClient) {

    this.item = []
    this.location =[]
    this.lat = []
    this.long =[]
    this.locationCount = []
   }
   ngOnInit(): void {
}

  add(item){
    item.added_on = (new Date()).getTime()
    this.http.post('https://272.selfip.net/apps/yuxQ4phPHC/collections/final/documents/',
    {
      "key":item.pid, 
      "data":
      {
        "name":item.name,
        "pnumber":item.pnumber,
        "time":item.added_on,
        "status":item.status,
        "breed":item.breed,
        "long":item.long,
        "lat":item.lat,
        "notes":item.notes,
        "pid":item.pid,
        "loc":item.loc
      }
  }
    ).subscribe((data:any)=>{
      console.log("here",data.data)
     
    })
  
  }
delete(del_item:string){
  this.item = this.item.filter(p=>p.pid!==del_item)
  var del = 'https://272.selfip.net/apps/yuxQ4phPHC/collections/final/documents/'+del_item+'/'
  this.http.delete<Object>(del).subscribe((data:any)=>{
    console.log("here",data.data)
  })
  console.log(this.item)
  return this.item
}
get(){
  this.http.get<Object>('https://272.selfip.net/apps/yuxQ4phPHC/collections/final/documents/')
  .subscribe((data:any)=>{
    for(let i = 0; i<data.length;i++){
      this.item.push(data[i].data)
    }
    console.log("pls",this.item)
  })
  return this.item
}
pidCheck(val){
 
  var a= []
 
  this.http.get<Object>('https://272.selfip.net/apps/yuxQ4phPHC/collections/final/documents/')
  .subscribe((data:any)=>{
    for(let i = 0; i<data.length;i++){
     
     a.push(data[i].datapid)
     }

    
  })
  console.log(a.includes(val),"lll")
  if (a.includes(val)==true){
    return true
  }

  else{
    return false
  }

  
}

getLocation(){
  this.http.get<Object>('https://272.selfip.net/apps/yuxQ4phPHC/collections/final/documents/')
  .subscribe((data:any)=>{
    this.location.push("")
    for(let i = 0; i<data.length;i++){
      if(this.location.indexOf(data[i].data.loc)==-1){
        this.location.push(data[i].data.loc)

      }
    }
    console.log("locationsss",this.location)
  })
  return this.location

}


getLat(){
  this.http.get<Object>('https://272.selfip.net/apps/yuxQ4phPHC/collections/final/documents/')
  .subscribe((data:any)=>{
    for(let i = 0; i<data.length;i++){
    {
        this.lat.push(data[i].data.lat)
      }
    }
   console.log("latitude",this.lat)
  })
  return this.lat 
  

}
getLong(){
  this.http.get<Object>('https://272.selfip.net/apps/yuxQ4phPHC/collections/final/documents/')
  .subscribe((data:any)=>{
    for(let i = 0; i<data.length;i++){
    {
        this.long.push(data[i].data.long)
      } 
    }
   console.log("longitude",this.long)
  })
  return this.long 
  

}


}
