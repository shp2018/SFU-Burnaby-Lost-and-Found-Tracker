import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class itemComponent implements OnInit {
  secret = 'OINK!!';
  @Input() item
  @Output() delete = new EventEmitter()

  constructor(private router:Router,private http: HttpClient,) { }

  
  onDelete(evt:any,ind:string){
    let password = prompt("Are you sure you want to delete this item?","Enter Password");
    if (password =="OINK!!") {
      console.log(evt)
      console.log(ind)
      evt["ind"] = ind
      this.delete.emit(evt)
   
    }
    else if(password != null){
      alert("Incorrect Password")
    }
  

  }
  onInfo(evt:any,ind:string){
   
    var popInfo = document.getElementById("popinfo")
    var link = 'https://272.selfip.net/apps/yuxQ4phPHC/collections/final/documents/'+ind+"/"
    this.http.get<Object>(link)  
    .subscribe((data:any)=>{
      var text = "Item ID: " + data.data.pid +"<br></br>"+
                  "Item type: "+ data.data.breed +"<br></br>"+
                  "Coor: "+ data.data.lat +" "+ data.data.long+"<br></br>"+
                  "Notes: "+ data.data.notes +"<br></br>"
      
                  popInfo.innerHTML = text
    })
    
    document.getElementById("myForm").style.visibility = "visible"
  }

 closeForm(evt:any,ind:string) {
   console.log("comes")
    location.reload()
  }

  onChangeStatus(evt:any,ind:string){

    var statusStr = 'RETREIVED'
    
    var link = 'https://272.selfip.net/apps/yuxQ4phPHC/collections/final/documents/'+ind+"/"
    this.http.get<Object>(link)  
    .subscribe((data:any)=>{
      if(data.data.status ==statusStr){
        let password = prompt("Are you sure you want to change status to "+statusStr+"?","Enter Password");
        if (password =="OINK!!") {
          statusStr = 'READY FOR PICKUP'
          this.http.put<Object>(link,
            {
              "key":ind,
              "data":{
                "name":data.data.name,
                "pnumber":data.data.pnumber,
                "time":data.data.time,
                "status":statusStr,
                "breed":data.data.breed,
                "long":data.data.long,
                "lat":data.data.lat,
                "notes":data.data.notes,
                "pid":data.data.pid,
                "loc":data.data.loc
              }
    
            }
            ).subscribe((data:any)=>{
              console.log("here",data.data)
              location.reload();
            })
        }
        else if(password != null){
          alert("Incorrect Password")
        }
      

      }
      else{
        let password = prompt("Are you sure you want to change status to "+statusStr+"?","Enter Password");
        if (password =="OINK!!") {
          statusStr = 'RETREIVED'
          this.http.put<Object>(link,
            {
              "key":ind,
              "data":{
                "name":data.data.name,
                "pnumber":data.data.pnumber,
                "time":data.data.time,
                "status":statusStr,
                "breed":data.data.breed,
                "long":data.data.long,
                "lat":data.data.lat,
                "notes":data.data.notes,
                "pid":data.data.pid,
                "loc":data.data.loc
              }
    
            }
            ).subscribe((data:any)=>{
              console.log("here",data.data)
              location.reload();
            })
        }
        else if(password != null){
          alert("Incorrect Password")
        }
        
      }
  
    })
 
   
  }


  ngOnInit(): void {
  
  }

}
