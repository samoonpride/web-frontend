import { Directive, EventEmitter } from "@angular/core";
import { Map, Marker, map, marker, tileLayer } from "leaflet";

@Directive({
  standalone: true,
})
export abstract class LeafletMapComponent {

  protected map?: Map;
  protected marker?: Marker;

  protected initMap(id: string, latitude: number, longtitude: number, markerEvent: EventEmitter<Array<number>> ) {
    this.map = map(id, {
      center: [latitude, longtitude],
      zoom: 17
    });

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    setInterval(() => {
      this.map?.invalidateSize();
    }, 1000);

    this.marker = marker([latitude, longtitude]);
    markerEvent.emit([latitude, longtitude]);
    this.marker.addTo(this.map);

    this.map.addEventListener('click', (e) => {
      this.marker?.setLatLng(e.latlng);
      markerEvent.emit([e.latlng.lat, e.latlng.lng]);
    });
  }

}
