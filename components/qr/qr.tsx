"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const QRCodeGenerator = () => {
  const [merchantName, setMerchantName] = useState("");
  const [upiId, setUpiId] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const generateQRCode = async () => {
    if (!merchantName || !upiId) {
      setError("Please enter both merchant name and UPI ID");
      return;
    }
    setError("");
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-qrcode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ merchantName, upiId }),
      });
      const data = await response.json();
      if (response.ok) {
        setQrCode(data.qrCode);
      } else {
        setError(data.error || "Failed to generate QR code");
      }
    } catch (error) {
      console.error("Error generating QR code:", error);
      setError("An unexpected error occurred");
    }
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Merchant Name"
        value={merchantName}
        onChange={(e) => setMerchantName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="UPI ID"
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
      />
      <Button onClick={generateQRCode} disabled={isLoading}>
        {isLoading ? "Generating..." : "Generate QR Code"}
      </Button>
      {error && <p className="text-destructive">{error}</p>}
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
