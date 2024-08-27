import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import Logo from "./logo/logo";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <Container className="bg-foreground py-0">
                <div className="gap-8 grid grid-cols-2">
                    <div className="space-y-8 py-20">
                        <p className="font-voska text-7xl text-white">
                            Join the movement. Get rewarded.
                        </p>
                        <div className="space-y-4">
                            <p className="text-white">Do something good.</p>
                            <Button size={"lg"}>Become Partner</Button>
                        </div>
                    </div>
                    <div className="relative">
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
                    <Logo />
                </div>

                <Separator className="my-10" />

                <div className="flex justify-between items-center text-muted-foreground text-xs">
                    <div className="space-y-1">
                        <p>
                            Copyright © 2024 Fursat Farms Private Limited. All
                            rights reserved.
                        </p>
                        <p>
                            5th Floor, Space Town, Sevoke Road, Siliguri, West
                            Bengal 734005
                        </p>
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
