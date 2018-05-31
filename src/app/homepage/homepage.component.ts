import { Component, OnInit } from '@angular/core';
import { DummyService } from '../core/dummy.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  text: string = "Screenshot";
  constructor(private dummyService: DummyService) { }

  ngOnInit() {
  }

  getData() {
    this.text = this.dummyService.getData();
  }
}
