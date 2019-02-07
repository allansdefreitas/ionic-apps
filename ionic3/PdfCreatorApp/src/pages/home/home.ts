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

    // var docDefinition = {
    //   content: [
    //   {
    //     columns: [
    //       { text: 'AuditoriaApp', style: 'header' },
    //       { text: 'Cryptocurrency Payment System', style: 'sub_header' },

    //       [

    //         { text: '', style: 'url' },
    //         { text: 'Número: ' + "Aud.11111", style: 'url' },
    //       ]
    //     ]
    //   }
    //   ],
    //   styles: {
    //     header: {
    //       bold: true,
    //       fontSize: 20,
    //       alignment: 'left'
    //     },
    //       sub_header: {
    //       fontSize: 18,
    //       alignment: 'left'
    //     },
    //     url: {
    //       fontSize: 16,
    //       alignment: 'left'
    //     }
    //   },

    //     pageSize: 'A4',
    //     pageOrientation: 'portrait'
    //   };

// playground requires you to assign document definition to a variable called dd

var dd = {
	content: [
		{
			text: 'AuditoriaApp',
			style: 'header'
		},
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam.\n\n',
		{
			text: 'Subheader 1 - using subheader style',
			style: 'subheader'
		},
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
		{
			text: 'Subheader 2 - using subheader style',
			style: 'subheader'
		},
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
		{
			text: 'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties',
			style: ['quote', 'small']
		}
	],
	styles: {
		header: {
			fontSize: 22,
			bold: true
		},
		subheader: {
			fontSize: 15,
			bold: true
		},
		quote: {
			italics: true
		},
		small: {
			fontSize: 8
		}
	}

}
      pdfmake.createPdf(dd).getBuffer(function (buffer) {
        let utf8 = new Uint8Array(buffer);
        let binaryArray = utf8.buffer;
        self.saveToDevice(binaryArray,"Aud.1111.pdf")
      });
  }


  saveToDevice(data:any,savefile:any){
    let self = this;
    self.file.writeFile(self.file.externalDataDirectory, savefile, data, {replace:true});

    const toast = self.toastCtrl.create({
      message: 'File saved to your device',
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }


}
