import React from "react";
import { Metadata } from "next";
import Container from "@/components/ui/container";
import QRCodeGenerator from "@/components/qr/qr";

export const metadata: Metadata = {
  title: "QR Code Generator",
  description: "Generate QR codes for text or URLs",
};

export default function QRPage() {
  return (
    <Container className="py-10" childClassName="space-y-10">
      <h1 className="font-voska text-4xl lg:text-6xl">
        QR Code <span className="font-voska-outline">Generator</span>
      </h1>
      <p className="text-muted-foreground">
        Enter text or a URL to generate a QR code.
      </p>
      <QRCodeGenerator />
    </Container>
  );
}
