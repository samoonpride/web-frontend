import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { Map, Marker, map, marker, tileLayer } from "leaflet";
import { Location } from "src/app/interfaces/Location";
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent implements AfterViewInit {

  @Input() latitude = environment.defaultMapPosition.lat;
  @Input() longtitude = environment.defaultMapPosition.lng;
  @Input() height = "200px";

  @Output() markerEvent = new EventEmitter<Location>();

  public static map?: Map;
  public static marker?: Marker;

  isDataAvailable: boolean = false;
  id: string = "map";

  ngAfterViewInit() {
    this.initMap(this.id, this.latitude, this.longtitude);
  }

  private initMap(id: string, latitude: number, longtitude: number) {
    this.latitude = latitude;
    this.longtitude = longtitude;

    try {
      LeafletMapComponent.map = map(id, {
        center: [this.latitude, this.longtitude],
        zoom: 17
      });
    } catch (e) {
      return;
    }

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(LeafletMapComponent.map);

    setInterval(() => {
      LeafletMapComponent.map?.invalidateSize();
    }, 1000);

    LeafletMapComponent.marker = marker([latitude, longtitude]);
    this.markerEvent.emit({
      lat: latitude,
      lng: longtitude
    });
    LeafletMapComponent.marker.addTo(LeafletMapComponent.map);

    LeafletMapComponent.map.addEventListener('click', (e) => {
      this.latitude = e.latlng.lat;
      this.longtitude = e.latlng.lng;
      LeafletMapComponent.marker?.setLatLng(e.latlng);
      this.markerEvent.emit({
        lat: e.latlng.lat,
        lng: e.latlng.lng
      });
    });
  }

  locationChange() {
    LeafletMapComponent.marker?.setLatLng([this.latitude, this.longtitude]);
    this.markerEvent.emit({
      lat: this.latitude,
      lng: this.longtitude
    });
  }

}
