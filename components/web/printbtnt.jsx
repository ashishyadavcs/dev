import Script from "next/script";
const Printbtn = ({style, classname,title,uid,filename='newpdf'}) => {
    function convertHTMLtoPDF() {
        const { jsPDF } = window.jspdf;
        if (typeof jsPDF == "undefined") return;

        let doc = new jsPDF("1", "mm", [window.innerHeight * 2, window.innerWidth * 2]);
        let pdfjs = document.querySelector(`#${uid}`);

        doc.html(pdfjs, {
            callback: function (doc) {
                doc.save(`${filename}.pdf`);
            },
            x: 12,
            y: 12,
        });
    }
    return (
        <>
            <Script strategy="lazyOnload" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></Script>
            <Script strategy="lazyOnload" src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></Script>
            <button style={style} onClick={convertHTMLtoPDF} className={classname}>{title}</button>
        </>
    );
};

export default Printbtn;
Printbtn
