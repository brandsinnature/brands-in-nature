import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import Logo from "./logo/logo";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Container className="bg-foreground py-0">
        <div className="gap-8 grid grid-cols-2">
          <div className="space-y-8 col-span-2 lg:col-span-1 py-20">
            <p className="font-voska text-5xl text-white lg:text-7xl">
              Join the movement. Get rewarded.
            </p>
            <div className="space-y-4">
              <p className="text-sm text-white lg:text-base">
                Do something good.
              </p>
              <div>
                <Link href={"/bin-for-business"}>
                  <Button size={"lg"}>Become Partner</Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:block relative hidden">
            <Image
              src="/CTA-screens.webp"
              alt="Cta"
              fill
              className="object-bottom object-contain"
            ></Image>
          </div>
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-7">
          <div className="col-span-4 lg:col-span-1">
            <Logo />
          </div>
        </div>

        <Separator className="my-10" />

        <div className="block lg:flex justify-between items-center space-y-6 lg:space-y-1 text-muted-foreground text-xs">
          <div className="space-y-1">
            <p>
              Copyright © 2024 Fursat Farms Private Limited. All rights
              reserved.
            </p>
            <p>
              5th Floor, Space Town, Sevoke Road, Siliguri, West Bengal 734005
            </p>

            <Link href="/privacy-policy" className="hover:underline mr-4">
              Privacy Policy
            </Link>
            <span> | </span>
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <div className="space-y-1">
              <p className="uppercase">Our vision</p>
              <p>A world free from trash</p>
            </div>
            <div className="space-y-1">
              <p className="uppercase">OUR MISSION</p>
              <p>Give everything a value</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
