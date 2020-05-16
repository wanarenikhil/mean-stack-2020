import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { ActivatedRoute } from '@angular/router';
import { PagerService } from '../services/pager.service';

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

  //pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private as: AlbumsService, private route: ActivatedRoute, private pagerService: PagerService) {
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
      .subscribe(response => { this.albums = response, this.setPage(1) },
        error => this.message = error);
  }

  getAllAlbums() {
    this.as.getAllAlbums()
      .subscribe(response => { this.albums = response, this.setPage(1) },
        error => this.message = error);
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.albums.length, page);

    // get current page of items
    this.pagedItems = this.albums.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

} 
