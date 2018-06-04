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
    this.dummyService.getData().subscribe(data => {
      console.log("User ID: " + data.id);
      console.log("Content: " + data.content);
      this.text = "User ID: " + data.id + "Content: " + data.content;
    });

  }

}
