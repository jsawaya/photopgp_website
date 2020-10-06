import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'photopgp';
  public deviceInfo = null;
  public deviceType = null;

  constructor(
    private deviceDetectorService: DeviceDetectorService
    ) {
    this.epicFunction(deviceDetectorService);
  }

  epicFunction(deviceDetectorService: DeviceDetectorService): (any) {
    console.log('calling epicFunction');
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
    if (this.deviceDetectorService.isMobile()) { this.deviceType = 'mobile'; }
    else if (this.deviceDetectorService.isTablet()) { this.deviceType = 'tablet'; }
    else if (this.deviceDetectorService.isDesktop()) { this.deviceType = 'desktop'; }
    else { this.deviceType = 'unknown'; }
  }

}
