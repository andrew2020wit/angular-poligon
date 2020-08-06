import { Din2Component } from './din2/din2.component';
import { Din1Component } from './din1/din1.component';
import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-dinamic',
  templateUrl: './dinamic.component.html',
  styleUrls: ['./dinamic.component.scss'],
})
export class DinamicComponent implements OnInit {
  @ViewChild('container1', { read: ViewContainerRef })
  container1: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  insert1() {
    this.container1.clear();

    const din1Component = this.componentFactoryResolver.resolveComponentFactory(
      Din1Component
    );
    const din1ComponentRef = this.container1.createComponent(din1Component);
    (din1ComponentRef.instance as Din1Component).inputObjectValue = {
      title: 'din1ComponentRef',
      number: 5,
    };
  }

  insert2() {
    this.container1.clear();

    const din2Component = this.componentFactoryResolver.resolveComponentFactory(
      Din2Component
    );
    const din2ComponentRef = this.container1.createComponent(din2Component);
    (din2ComponentRef.instance as Din2Component).inputObjectValue = {
      title: 'din2ComponentRef',
      number: 77,
    };
  }
}
