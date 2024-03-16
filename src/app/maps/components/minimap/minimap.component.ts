import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-minimap',
  templateUrl: './minimap.component.html',
  styleUrl: './minimap.component.css'
})
export class MinimapComponent {

  @Input() lnglat?: [number, number];
  @ViewChild('map')divMap?:ElementRef


  ngAfterViewInit(){
    if( !this.divMap?.nativeElement ) throw "Map Div not Found";
    if( !this.lnglat ) throw "LngLat can't be null";

    const map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lnglat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false,
    });

    new Marker()
      .setLngLat( this.lnglat )
      .addTo( map )

  }

}
