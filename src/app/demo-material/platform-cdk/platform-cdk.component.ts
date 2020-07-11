import { Component, OnInit } from '@angular/core';
import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior,
} from '@angular/cdk/platform';

@Component({
  selector: 'app-platform-cdk',
  templateUrl: './platform-cdk.component.html',
  styleUrls: ['./platform-cdk.component.scss']
})
export class PlatformCdkComponent implements OnInit {

  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();

  constructor(public platform: Platform) { }

  ngOnInit(): void {
  }

}
