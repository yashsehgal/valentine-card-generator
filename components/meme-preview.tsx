"use client";
import { TemplateContext } from "@/context/template-context";
import { cn } from "@/helpers/utils";
import { useContext, useRef } from "react";
import { Button } from "./button";
import html2canvas from 'html2canvas';

export default function CardPreview() {
  const { template } = useContext(TemplateContext);

  const divRef = useRef<HTMLDivElement>(null);

  const downloadDivAsImage = async () => {
    // Get the div element
    const divToDownload = divRef.current;

    if (!divToDownload) {
      console.error('Div reference is null.');
      return;
    }

    try {
      // Use html2canvas to capture the content of the div
      const canvas = await html2canvas(divToDownload);

      // Convert the canvas to a data URL
      const dataUrl = canvas.toDataURL('image/png');

      // Create a download link
      const downloadLink = document.createElement('a');
      downloadLink.href = dataUrl;
      downloadLink.download = template.to ? `valentine-meme-for-${template.to}.png` : 'downloaded_image.png';

      // Append the link to the document and trigger the click event
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // Clean up: remove the link from the document
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error('Error capturing div content:', error);
    }
  };


  return <div className="flex flex-col max-lg:grid items-end gap-6">
    <div className="meme-preview">
      <div className={cn("preview w-[500px] h-[500px] max-lg:w-full shadow-lg rounded-xl relative cursor-default select-none flex flex-col items-center justify-end p-12 text-center")}
        ref={divRef}
        style={{
          backgroundImage: `url('/${template.meme}')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          backgroundSize: 'cover'
        }}
      >
        <div className="meme-content-container flex flex-col item-center gap-4 bottom-4">
          <span className="text-white font-semibold text-5xl">
            {template.message} {template.to}
          </span>
        </div>
      </div>
    </div>
    <Button onClick={downloadDivAsImage}>Save image</Button>
  </div>
}