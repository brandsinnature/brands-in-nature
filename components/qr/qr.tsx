"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const QRCodeGenerator = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateQRCode = async () => {
    if (!input) return;
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-qrcode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input }),
      });
      const data = await response.json();
      setQrCode(data.qrCode);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Enter text or URL"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={generateQRCode} disabled={isLoading}>
        {isLoading ? "Generating..." : "Generate QR Code"}
      </Button>
      {qrCode && (
        <div className="mt-4">
          <Image
            src={qrCode}
            alt="Generated QR Code"
            width={200}
            height={200}
          />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
