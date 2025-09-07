'use client';

import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const url = 'https://hbku-ug.mywconline.com';

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, url, {
        width: 500,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      }, (error) => {
        if (error) console.error(error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Peer-tutoring Services
        </h1>
        <div className="flex justify-center mb-4">
          <canvas ref={canvasRef}></canvas>
        </div>
        <p className="text-center text-gray-600 mt-4">
          Scan the QR code to access our tutoring services
        </p>
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-blue-600 hover:text-blue-800 underline mt-2"
        >
          {url}
        </a>
      </div>
    </div>
  );
}
