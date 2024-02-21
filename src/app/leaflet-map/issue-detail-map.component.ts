import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { LeafletMapComponent } from './leaflet-map.directive';

@Component({
  selector: 'app-issue-detail-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class IssueDetailMapComponent extends LeafletMapComponent implements AfterViewInit {

  @Input() id = "issue-detail-map";

  @Input() latitude = 51.505;
  @Input() longtitude = -0.09;
  @Input() height = "200px";

  @Output() markerEvent = new EventEmitter<Array<number>>();

  ngAfterViewInit() {
    super.initMap(this.id, this.latitude, this.longtitude, this.markerEvent);
  }

}
