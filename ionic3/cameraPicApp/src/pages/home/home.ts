import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  myPhoto: any;

  constructor(public navCtrl: NavController,
    public camera: Camera) {

  }

  takePhoto(): void {

    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    }

    this.camera.getPicture(options)
      .then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.myPhoto = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
      // Handle error
    });

  }

  getImage(): void {

    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: true
    }

    this.camera.getPicture(options)
      .then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.myPhoto = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
      // Handle error
    });

  }

  cropImage(): void {
    console.log("CROP");

    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true
    }

    this.camera.getPicture(options)
      .then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.myPhoto = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
      // Handle error
    });

  }

}
