import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { ActivatedRoute } from '@angular/router';
import { PagerService } from '../services/pager.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit 
{ 

  title = "Photos Table"; 
  photos: any; 
  message = ""; 
  albumId = 0;
  
  //pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private phs: PhotosService, private route: ActivatedRoute, private pagerService: PagerService) 
  { 
    console.log("===== PhotosComponent created ======"); 
  } 

  ngOnInit(): void 
  { 
    this.albumId = this.route.snapshot.queryParams.albumId;
    if(this.albumId)
this.getPhotosByAlbumId();
else
    this.getAllPhotos(); 
    console.log("===== PhotosComponent initialized ======"); 
  } 

  ngOnDestroy(): void 
  { 
    console.log("===== PhotosComponent destroyed ======"); 
  } 

  getPhotosByAlbumId(){
    this.phs.getPhotosByAlbumId(this.albumId).subscribe(
      response => { this.photos = response, this.setPage(1) },
      error => this.message = error
    );
  }

   getAllPhotos() 
   { 
     this.phs.getAllPhotos() 
        .subscribe(response =>{ this.photos = response, this.setPage(1) },
                    error => this.message = error); 
   } 

   setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.photos.length, page);

    // get current page of items
    this.pagedItems = this.photos.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
