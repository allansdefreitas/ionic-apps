import { File } from '@ionic-native/file';
import { Component } from '@angular/core';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { NavController, ToastController } from 'ionic-angular';
@Component({
selector: 'page-home',
templateUrl: 'home.html'
})
export class HomePage {
constructor(public navCtrl: NavController, public file: File, public toastCtrl: ToastController) {
}

makePdf() {
let self = this;
pdfmake.vfs = pdfFonts.pdfMake.vfs;

var docDefinition = {
content: [
{
columns: [
{

text: 'data:image/jpeg;base64,your_image_here' ,

},
[
{ text: 'BITCOIN', style: 'header' },
{ text: 'Cryptocurrency Payment System', style: 'sub_header' },
{ text: 'WEBSITE: https://bitcoin.org/', style: 'url' },
]
]
}
],
styles: {
header: {
bold: true,
fontSize: 20,
alignment: 'right'
},
sub_header: {
fontSize: 18,
alignment: 'right'
},
url: {
fontSize: 16,
alignment: 'right'
}
},
pageSize: 'A4',
pageOrientation: 'portrait'
};
pdfmake.createPdf(docDefinition).getBuffer(function (buffer) {
let utf8 = new Uint8Array(buffer);
let binaryArray = utf8.buffer;
self.saveToDevice(binaryArray,"Bitcoin.pdf")
});
}
saveToDevice(data:any,savefile:any){
let self = this;
self.file.writeFile(self.file.externalDataDirectory, savefile, data, {replace:false});
const toast = self.toastCtrl.create({
message: 'File saved to your device',
duration: 3000,
position: 'top'
});
toast.present();
}
}
