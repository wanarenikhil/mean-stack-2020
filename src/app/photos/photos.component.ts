import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';
import { ActivatedRoute } from '@angular/router';

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
  
  constructor(private phs: PhotosService, private route: ActivatedRoute) 
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
      response => this.photos = response,
      error => this.message = error
    );
  }

   getAllPhotos() 
   { 
     this.phs.getAllPhotos() 
        .subscribe(response => this.photos = response, 
                    error => this.message = error); 
   } 

}
