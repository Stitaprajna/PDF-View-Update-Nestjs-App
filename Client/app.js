import axios from "axios";

const loadURL = axios.get("http://localhost:3000/auth/Load-PDF-File");
console.log(loadURL.data);

var pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js';

var pdfDoc = null;
var scale = 1; //Set Scale for zooming PDF.
var resolution = 1; //Set Resolution to Adjust PDF clarity.




function LoadPdfFromUrl () {
    //Read PDF from URL.
    const loadURL = axios.get("http://localhost:3000/auth/Load-PDF-File");
    pdfjsLib.getDocument(loadURL).promise.then(function (pdfDoc_) {
        pdfDoc = pdfDoc_.data;

        //Reference the Container DIV.
        var pdf_container = document.getElementById("pdf_container");
        pdf_container.style.display = "block";

        //Loop and render all pages.
        for (var i = 1; i <= pdfDoc.numPages; i++) {
            RenderPage(pdf_container, i);
        }
    });
    };



    // Save PDF from URL
    function SaveURL (savePDF) {
        const saveURL = axios.post("http://localhost:3000/auth/Save-PDF-File",savePDF)
        .then ((Response) => {
            console.log(Response);
        },(error) => {console.log(error);})

    }



    function RenderPage(pdf_container, num) {
        pdfDoc.getPage(num).then(function (page) {
            //Create Canvas element and append to the Container DIV.
            var canvas = document.createElement('canvas');
            canvas.id = 'pdf-' + num;
            ctx = canvas.getContext('2d');
            pdf_container.appendChild(canvas);
 
            //Create and add empty DIV to add SPACE between pages.
            var spacer = document.createElement("div");
            spacer.style.height = "20px";
            pdf_container.appendChild(spacer);
 
            //Set the Canvas dimensions using ViewPort and Scale.
            var viewport = page.getViewport({ scale: scale });
            canvas.height = resolution * viewport.height;
            canvas.width = resolution * viewport.width;
 
            //Render the PDF page.
            var renderContext = {
                canvasContext: ctx,
                viewport: viewport,
                transform: [resolution, 0, 0, resolution, 0, 0]
            };
 
            page.render(renderContext);
        });
    };

