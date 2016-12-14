import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-gallery',
  templateUrl: './projects-gallery.component.html',
  styleUrls: ['./projects-gallery.component.css']
})
export class ProjectsGalleryComponent implements OnInit {

  item:string="1";
  position:number=0;

  constructor() { }

  ngOnInit() {
  }

  changeItemPosition(item:string)
  {
    this.item=item;
  }

  positionNumber()
  {
    if(this.position=6)
    {
      return this.position =0;
    }
    else {
      return this.position+1;

    }
  }


}
