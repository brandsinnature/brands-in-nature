"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "../ui/button";
import { ImArrowRight2 } from "react-icons/im";

export default function HomeCarousel() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
            className="mx-auto w-full max-w-5xl"
        >
            <CarouselContent>
                {Array.from({ length: 8 }).map((_, index) => (
                    <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                    >
                        <div className="p-1">
                            <Card className="p-0">
                                <CardHeader className="p-0">
                                    <div className="relative h-60">
                                        <Image
                                            src={
                                                "https://picsum.photos/300/384"
                                            }
                                            alt="image"
                                            className="rounded-t-lg"
                                            fill
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-3 p-6">
                                    <p className="font-voska text-2xl leading-none">
                                        Winner of Global Startup Award
                                    </p>
                                    <p className="text-muted-foreground text-sm">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                    <div className="text-right">
                                        <Button
                                            variant={"link"}
                                            className="p-0"
                                        >
                                            Read More{" "}
                                            <ImArrowRight2 className="ms-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
