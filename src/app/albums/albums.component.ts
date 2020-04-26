import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  title = "Albums Table";
  albums: any;
  message = "";
  userId = 0;

  constructor(private as: AlbumsService, private route: ActivatedRoute) {
    console.log("===== AlbumsComponent created ======");
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.queryParams.userId;
    if (this.userId)
      this.getAlbumsByUserId();
    else
      this.getAllAlbums();
    console.log("===== AlbumsComponent initialized ======");
  }

  ngOnDestroy(): void {
    console.log("===== AlbumsComponent destroyed ======");
  }

  getAlbumsByUserId() {
    this.as.getAlbumsByUserId(this.userId)
      .subscribe(response => this.albums = response,
        error => this.message = error);
  }

  getAllAlbums() {
    this.as.getAllAlbums()
      .subscribe(response => this.albums = response,
        error => this.message = error);
  }

} 
