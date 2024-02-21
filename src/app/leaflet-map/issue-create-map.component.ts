import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { LeafletMapComponent } from './leaflet-map.directive';

@Component({
  selector: 'app-issue-create-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class IssueCreateMapComponent extends LeafletMapComponent implements AfterViewInit {

  @Input() id = "issue-create-map";

  @Input() latitude = 51.505;
  @Input() longtitude = -0.09;
  @Input() height = "200px";

  @Output() markerEvent = new EventEmitter<Array<number>>();

  ngAfterViewInit() {
    super.initMap(this.id, this.latitude, this.longtitude, this.markerEvent);
  }

}
