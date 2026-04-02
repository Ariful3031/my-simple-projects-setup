import { useState } from "react";
import { FaPlus, FaMinus, FaVideo, FaTimes } from "react-icons/fa";
import { PiFilePdfDuotone } from "react-icons/pi";
import { AiOutlineCopy } from "react-icons/ai";
import { toast } from "react-toastify";

export default function CourseAccordion({ contentsData }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedContent, setSelectedContent] = useState(null);

    const [videoModal, setVideoModal] = useState(false);
    const [pdfModal, setPdfModal] = useState(false);
    const [classModal, setClassModal] = useState(false);

    const toggle = (index) => setActiveIndex(activeIndex === index ? null : index);

    // 🎥 YouTube embed URL
    const getEmbedUrl = (url) => {
        if (!url) return "";
        if (url.includes("watch?v=")) return url.replace("watch?v=", "embed/");
        if (url.includes("youtu.be")) return `https://www.youtube.com/embed/${url.split("/").pop()}`;
        return url;
    };

    // 📄 PDF URL (Google Drive + direct)
    const getPdfUrl = (url) => {
        if (!url) return "";
        if (url.includes("drive.google.com")) {
            const match = url.match(/\/d\/(.*?)\//);
            if (match && match[1]) return `https://drive.google.com/file/d/${match[1]}/preview`;
        }
        return url;
    };

    const handleContentClick = (content) => {
        if (!content?.type || !content?.link) return toast.error("Content not available");

        setSelectedContent(content);

        if (content.type === "vedio") setVideoModal(true);
        else if (content.type === "pdf") setPdfModal(true);
        else if (content.type === "live-link") setClassModal(true);
    };

    return (
        <div className="space-y-3">

            {/* MODULES */}
            {contentsData?.map((module, index) => (
                <div key={index} className="border rounded-lg overflow-hidden max-w-4xl ">

                    {/* HEADER */}
                    <div
                        onClick={() => toggle(index)}
                        className="flex justify-between items-center px-4 py-3 cursor-pointer bg-gray-100 hover:bg-gray-200"
                    >
                        <h2 className="font-semibold text-gray-800">{module?.title}</h2>
                        {activeIndex === index ? <FaMinus /> : <FaPlus />}
                    </div>

                    {/* CONTENT LIST */}
                    {activeIndex === index && (
                        <div className="bg-white p-4 space-y-3 border-t">
                            {module?.sub_topics?.map((content, i) => (
                                <div
                                    key={i}
                                    onClick={() => handleContentClick(content)}
                                    className="flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer"
                                >
                                    <div className="flex items-center gap-2">
                                        {content?.type === "vedio" ? <FaVideo className="text-pink-600" /> : content?.type === "pdf" ? <PiFilePdfDuotone className="text-pink-600" /> : <AiOutlineCopy className="text-pink-600" />}
                                        <span>{content?.title}</span>
                                    </div>
                                    {content?.type === "vedio" &&
                                        <span className={`${content?.type === "vedio"} && "text-xs bg-cyan-500 text-white px-2 py-1 rounded"`}>
                                            {content?.type === "vedio" && "BB"}
                                        </span>
                                    }

                                    {/* <span className="text-xs bg-cyan-500 text-white px-2 py-1 rounded">
                                        {content?.type === "vedio" ? "BB" : content?.type === "pdf" ? "pdf" : content?.type === "vedio" ? "Zoom" : "N/A"}
                                    </span> */}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            {/* 🎥 VIDEO MODAL */}

            {videoModal && (
                <div className="fixed inset-0 inset-y-0 bg-black bg-opacity-60 flex items-center justify-center z-50">

                    {/* Wrapper with group */}
                    <div className="relative w-[95%] md:w-[80%] max-w-5xl group">

                        {/* Close Button (Hidden by default) */}
                        <button
                            onClick={() => {
                                setVideoModal(false);
                                setSelectedContent(null);
                            }}
                            className="absolute -top-4 -right-4 
                   bg-white text-black w-10 h-10 rounded-full 
                   flex items-center justify-center 
                   shadow-lg z-50
                   
                   opacity-0 group-hover:opacity-100
                   transition duration-300"
                        >
                            <FaTimes />
                        </button>

                        {/* Modal Container */}
                        <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
                            <div className="relative w-full aspect-video">
                                <iframe
                                    src={`${getEmbedUrl(selectedContent?.link)}?autoplay=1`}
                                    className="absolute inset-0 w-full h-full"
                                    allowFullScreen
                                    allow="autoplay; encrypted-media"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            )}


            {pdfModal && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

                    {/* Wrapper (same as video modal style) */}
                    <div className="relative w-[95%] md:w-[60%] lg:w-[50%] h-full mx-auto group mt-20">

                        {/* Close Button OUTSIDE (PDF corner এ থাকবে) */}
                        <button
                            onClick={() => {
                                setPdfModal(false);
                                setSelectedContent(null);
                            }}
                            className="absolute -top-4 -right-4 
                   bg-white text-black w-10 h-10 rounded-full 
                   flex items-center justify-center 
                   shadow-lg z-50
                   opacity-0 group-hover:opacity-100
                   transition duration-300"
                        >
                            <FaTimes />
                        </button>

                        {/* PDF Container */}
                        <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-2xl">

                            <iframe
                                src={getPdfUrl(selectedContent?.link)}
                                className="w-full h-full border-0"
                                title="PDF Viewer"
                            />

                        </div>
                    </div>
                </div>
            )}

            {/* 🎓 CLASS MODAL */}
            {classModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-xl w-[400px] relative">


                        <button
                            onClick={() => { setClassModal(false); setSelectedContent(null); }}
                            className="absolute top-3 right-3 text-white bg-red-500 hover:bg-red-600 p-2 rounded-full"
                        >
                            <FaTimes />
                        </button>

                        <h2 className="text-xl font-bold mb-4">{selectedContent?.title}</h2>

                        <a
                            href={selectedContent?.link}
                            target="_blank"
                            rel="noreferrer"
                            className="block w-full text-center bg-blue-600 text-white py-2 rounded"
                        >
                            Join Class
                        </a>
                    </div>
                </div>
            )}

        </div>
    );
}




// import { useState } from "react";
// import { FaPlus, FaMinus, FaVideo } from "react-icons/fa";
// import { toast } from "react-toastify";
// import { Document, Page, pdfjs } from "react-pdf";

// // PDF worker
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// export default function CourseAccordion({ contentsData }) {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [selectedContent, setSelectedContent] = useState(null);

//   const [videoModal, setVideoModal] = useState(false);
//   const [pdfModal, setPdfModal] = useState(false);
//   const [classModal, setClassModal] = useState(false);

//   // PDF state
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [scale, setScale] = useState(1.2);

//   const toggle = (index) => setActiveIndex(activeIndex === index ? null : index);

//   // 🎥 YouTube embed URL
//   const getEmbedUrl = (url) => {
//     if (!url) return "";
//     if (url.includes("watch?v=")) return url.replace("watch?v=", "embed/");
//     if (url.includes("youtu.be")) return `https://www.youtube.com/embed/${url.split("/").pop()}`;
//     return url;
//   };

//   // 📄 PDF URL (Drive direct preview)
//   const getPdfUrl = (url) => {
//     if (!url) return "";
//     if (url.includes("drive.google.com")) {
//       const fileId = url.split("/d/")[1]?.split("/")[0];
//       return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : url;
//     }
//     return url;
//   };

//   const handleContentClick = (content) => {
//     if (!content?.type || !content?.link) return toast.error("Content not available");

//     setSelectedContent(content);
//     setPageNumber(1);
//     setScale(1.2);

//     if (content.type === "link") setVideoModal(true);
//     else if (content.type === "pdf") setPdfModal(true);
//     else if (content.type === "classLink") setClassModal(true);
//   };

//   return (
//     <div className="space-y-3">

//       {/* MODULES */}
//       {contentsData?.map((module, index) => (
//         <div key={index} className="border rounded-lg overflow-hidden">
//           {/* HEADER */}
//           <div
//             onClick={() => toggle(index)}
//             className="flex justify-between items-center px-4 py-3 cursor-pointer bg-gray-100 hover:bg-gray-200"
//           >
//             <h2 className="font-semibold text-gray-800">{module?.title}</h2>
//             {activeIndex === index ? <FaMinus /> : <FaPlus />}
//           </div>

//           {/* CONTENT LIST */}
//           {activeIndex === index && (
//             <div className="bg-white p-4 space-y-3 border-t">
//               {module?.sub_topics?.map((content, i) => (
//                 <div
//                   key={i}
//                   onClick={() => handleContentClick(content)}
//                   className="flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer"
//                 >
//                   <div className="flex items-center gap-2">
//                     <FaVideo className="text-pink-600" />
//                     <span>{content?.title}</span>
//                   </div>
//                   <span className="text-xs bg-cyan-500 text-white px-2 py-1 rounded">
//                     {content?.type || "N/A"}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}

//       {/* 🎥 VIDEO MODAL */}
//       {videoModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
//           <div className="bg-white w-[90%] max-w-3xl rounded-xl relative">

//             {/* Close button top-right */}
//             <button
//               onClick={() => { setVideoModal(false); setSelectedContent(null); }}
//               className="absolute top-3 right-3 text-white bg-red-500 px-3 py-1 rounded"
//             >
//               Close
//             </button>

//             <h2 className="text-lg font-semibold mb-3 text-center mt-3">{selectedContent?.title}</h2>
//             <iframe
//               width="100%"
//               height="400"
//               src={getEmbedUrl(selectedContent?.link)}
//               title="YouTube Video"
//               allowFullScreen
//               className="rounded-b-xl"
//             />
//           </div>
//         </div>
//       )}

//       {/* 📄 PDF MODAL */}
//       {pdfModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
//           <div className="bg-white w-[95%] h-[90%] rounded-xl flex flex-col relative overflow-hidden">

//             {/* Close button top-right */}
//             <button
//               onClick={() => { setPdfModal(false); setSelectedContent(null); }}
//               className="absolute top-3 right-3 text-white bg-red-500 px-3 py-1 rounded z-10"
//             >
//               Close
//             </button>

//             <div className="flex justify-between items-center p-2 bg-gray-100 border-b">
//               <h2 className="font-semibold">{selectedContent?.title}</h2>
//             </div>

//             {/* PDF controls */}
//             <div className="flex justify-between items-center p-2 bg-gray-100">
//               <div className="flex gap-2">
//                 <button onClick={() => setScale(s => s - 0.2)} className="px-2 bg-gray-300 rounded">-</button>
//                 <button onClick={() => setScale(s => s + 0.2)} className="px-2 bg-gray-300 rounded">+</button>
//               </div>
//               <div>Page {pageNumber} / {numPages}</div>
//               <div className="flex gap-2">
//                 <button onClick={() => setPageNumber(p => Math.max(p - 1, 1))} className="px-2 bg-gray-300 rounded">Prev</button>
//                 <button onClick={() => setPageNumber(p => Math.min(p + 1, numPages))} className="px-2 bg-gray-300 rounded">Next</button>
//               </div>
//             </div>

//             {/* PDF Viewer */}
//             <div className="flex-1 overflow-auto flex justify-center items-start bg-gray-200 p-2">
//               <Document
//                 file={getPdfUrl(selectedContent?.link)}
//                 onLoadSuccess={({ numPages }) => setNumPages(numPages)}
//               >
//                 <Page pageNumber={pageNumber} scale={scale} />
//               </Document>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* 🎓 CLASS MODAL */}
//       {classModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-xl w-[400px] relative">

//             {/* Close button top-right */}
//             <button
//               onClick={() => { setClassModal(false); setSelectedContent(null); }}
//               className="absolute top-3 right-3 text-white bg-red-500 px-3 py-1 rounded"
//             >
//               Close
//             </button>

//             <h2 className="text-xl font-bold mb-4">{selectedContent?.title}</h2>

//             <a
//               href={selectedContent?.link}
//               target="_blank"
//               rel="noreferrer"
//               className="block w-full text-center bg-blue-600 text-white py-2 rounded"
//             >
//               Join Class
//             </a>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }