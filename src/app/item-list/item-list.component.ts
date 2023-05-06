import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router'
@Component({
  selector: 'item-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  item:any[]
  query: string = ""
  nameCount:any
  locCount :any
  timeCount:any


  constructor(private ps: ItemService,private router: Router) {

    this.nameCount = 1
    this.locCount =1
    this.timeCount =1
   }


   onItemDelete(evt){
     console.log(`parent comp: item ${evt["ind"]} has been deleted`)
     const del_item = evt["ind"]
     
     this.item = this.ps.delete(del_item)
     
   }
 
   sortbyName(){
     console.log("click")
    
     if(this.nameCount %2==1){
      this.item.sort((a, b) => b.name.localeCompare(a.name))
     this.nameCount+=1
     }
    else{
      this.item.sort((a, b) => a.name.localeCompare(b.name))
      this.nameCount+=1
    
    }
   }
   sortbyTime(){
    console.log("click")
    
    if(this.timeCount %2==1){
     this.item.sort((r1, r2) => (r1.time > r2.time) ? 1 : (r1.time < r2.time) ? -1 : 0)
    this.timeCount+=1
    }
   else{
    this.item.sort((r1, r2) => (r1.time > r2.time) ? -1 : (r1.time < r2.time) ? 1 : 0)
     this.timeCount+=1
   
   }
   }
   sortbyLoc(){
    console.log("click")
    
    if(this.locCount %2==1){
      this.item.sort((r1, r2) => (r1.loc > r2.loc) ? 1 : (r1.loc < r2.loc) ? -1 : 0)
    this.locCount+=1
    }
   else{
    this.item.sort((r1, r2) => (r1.loc > r2.loc) ? -1 : (r1.loc < r2.loc) ? 1 : 0)
     this.locCount+=1
   
   }
   }
   //runs after constructor (intiallization)
  ngOnInit(): void {
    this.item = this.ps.get() 
    this.nameCount = 1
    this.locCount =1
    this.timeCount =1
   
  }

}
