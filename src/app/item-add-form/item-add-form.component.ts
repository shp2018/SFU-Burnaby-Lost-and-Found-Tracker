import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms'
import { ItemService } from '../item.service';
import{Router} from '@angular/router';
import { itemComponent } from '../item/item.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-add-form',
  templateUrl: './item-add-form.component.html',
  styleUrls: ['./item-add-form.component.css']
})
export class ItemAddFormComponent implements OnInit {
  item:any[]
  form: FormGroup
  locations = []
  
 

  constructor(private ps:ItemService,private router:Router,private fb: FormBuilder,private http: HttpClient) { 
    let formControls = {
      name: new FormControl([

      ]),
      pnumber: new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      status: new FormControl([
      ]),
      pid: new FormControl([
      ]),
      breed: new FormControl([
      ]),
      long: new FormControl([
      ]),
      lat: new FormControl([
      ]),
      notes: new FormControl([
      ]),
      loc: new FormControl([
      ]),
     
    }

    this.form = new FormGroup(formControls)
 
  }
  

  ngOnInit(): void {
   
    this.locations = this.ps.getLocation() 


  }

  onSubmit(values){
    console.log(values,"pla")
    var x = values.pid
    console.log(x)
    
   console.log(this.ps.pidCheck(x),"here")

    if(values.name==''){
      alert("Please enter the name of the reporter!")

    }
    else if(values.pnumber.length<10){
      alert("Invalid Phone number, please enter a valid Phone Number")

    }
    else if(values.status==''){
      alert("Please select status: READY FOR PICKUP")

    }
    else if(values.pid==''){
      alert("Please enter the ID for this item! This is used to keep track of the items")

    }
    else if(values.loc==''){
      alert("Please enter the ID for this item! This is used to keep track of the items")

    }
    else if(values.breed==''){
      alert("Please enter the ID for this item! This is used to keep track of the items")

    }
  
  
    else{
      this.ps.add(values)
    //navigation back to the root(homepage)
    this.router.navigate(['/']);
    }
    
    } 
   
    



  }


