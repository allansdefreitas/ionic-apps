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

  var dd = {
    content: [
      {
        text: 'Auditoria App',
        style: 'tituloStyle'
        },

      {
          style: 'perguntasStyle',

        text: [
          {text: '\nAuditoria: '},
          {text: 'AUD.28721662', style: 'respostasStyle', italics: true},

          {text: '\nSetor: '},
          {text: 'Alimentos', style: 'respostasStyle'},

          {text: '\nAuditores: '},
          {text: 'Allan, Júnior e Micah', style: 'respostasStyle'},

          {text: '\nPeríodo: '},
          {text: '20/02/2019 a 22/02/2019\n\n', style: 'respostasStyle'},

        ]
      },


      /* PERGUNTA #######################################################################*/
      {

            style: 'perguntasStyle',

        text: [

          {
              text: 'Art. 1: A empresa possui uma equipe capacitada para o levantamento de requisitos legais aplicáveis? ',
                style: 'artigoTextoStyle',
          },

          {text: '\n\nResposta: '},
          {text: 'Conforme', style: 'respostasStyle'},

          {text: '\n\nObs.: '},
          {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis venenatis velit, sit amet elementum mi venenatis vitae. Cras tempor nisl id nunc porttitor semper. Etiam nec velit urna. Vestibulum convallis auctor posuere. Curabitur sollicitudin placerat eleifend. Suspendisse potenti. Duis posuere et sem nec facilisis.',
              style: 'respostasStyle'},

          {text: '\n\nAnexos: '},
          {text: 'LoremIpsum.docx', style: 'respostasStyle'},

          {text: '\n\nImagens: '},
          {text: 'Colocar aqui\n\n', style: 'respostasStyle'},

        ]
      },

        /* PERGUNTA #######################################################################*/
      {

            style: 'perguntasStyle',

        text: [

          {
              text: 'Art. 2: A empresa possui uma equipe capacitada para o levantamento de requisitos legais aplicáveis? ',
                style: 'artigoTextoStyle',
          },

          {text: '\n\nResposta: '},
          {text: 'Não conforme', style: 'respostasStyle'},

          {text: '\n\nObs.: '},
          {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis venenatis velit, sit amet elementum mi venenatis vitae. Cras tempor nisl id nunc porttitor semper. Etiam nec velit urna. Vestibulum convallis auctor posuere. Curabitur sollicitudin placerat eleifend. Suspendisse potenti. Duis posuere et sem nec facilisis.',
              style: 'respostasStyle'},

          {text: '\n\nAnexos: '},
          {text: 'LoremIpsum.docx', style: 'respostasStyle'},

          {text: '\n\nImagens: '},
          {text: 'Colocar aqui\n\n', style: 'respostasStyle'},

        ]
      },




    ],


    styles: {
      tituloStyle: {
        fontSize: 22,
        bold: true
      },

        perguntasStyle: {
            bold: true,
          fontSize: 14

      },
      respostasStyle: {
          fontSize: 13,
          bold: false

      },

      artigoTextoStyle: {
        fontSize: 15,
        bold: true
      }

    }

    }



      pdfmake.createPdf(dd).getBuffer(function (buffer) {
        let utf8 = new Uint8Array(buffer);
        let binaryArray = utf8.buffer;
        self.saveToDevice(binaryArray,"TESTE.22pdf828828.pdf");

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
