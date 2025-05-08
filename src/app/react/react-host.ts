import { Component, AfterViewInit, OnDestroy } from "@angular/core";
import ReactWrapper from "./wraper-react";

@Component({
  selector: "app-react-host",
  template: `<div id="react-root"></div>`,
  standalone:true
})
export class ReactHostComponent implements AfterViewInit, OnDestroy {
  ngAfterViewInit(): void {
    ReactWrapper.mount("react-root");
  }

  ngOnDestroy(): void {
    ReactWrapper.unmount("react-root");
  }
}
