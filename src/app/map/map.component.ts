import { Component,AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { icon, Marker } from 'leaflet';
import { ItemService } from '../item.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
}); 
Marker.prototype.options.icon = iconDefault;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  title = 'SFU Lost and Found';
  lat = []
  long = []
  locationCount = []

  count = {}
  private map;
  
  constructor(private ps:ItemService,private http: HttpClient) { }

  ngOnInit():void{
  }
  ngAfterViewInit(): void { 
    this.map = L.map('mapid').setView([49.2, -123], 11);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2hwMjAxOCIsImEiOiJjbGI4emp5YWYwb2NzM3BwaHU4Nnpuanh2In0.qrCbyuciw4-26zk3OOpLQw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(this.map);

    this.http.get<Object>('https://272.selfip.net/apps/yuxQ4phPHC/collections/final/documents/')
  .subscribe((data:any)=>{
  
    for(let i = 0; i<data.length;i++){
        this.locationCount.push(data[i].data.loc)

    }
    
    
    this.locationCount.forEach(element => {
      this.count[element] = (this.count[element] || 0) + 1;

    });
    console.log(this.count,"haha")

    for(let i = 0; i<data.length;i++){
      var temp = []
      {
        if(temp.indexOf(data[i].data.loc)==-1){
          temp.push(data[i].data.loc)
          var str = "<b>"+data[i].data.loc+"</b><br />" +this.count[data[i].data.loc] +" cases reported."
        L.marker([data[i].data.lat, data[i].data.long]).addTo(this.map)
        .bindPopup(str)

        }
        
        
         
        }
      }
    
  })
  







  }
  


  
}

