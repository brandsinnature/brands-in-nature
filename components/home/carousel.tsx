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
import Link from "next/link";

export default function HomeCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2200,
        }),
      ]}
      className="mx-auto w-full max-w-5xl"
    >
      <CarouselContent>
        {/* Carousel Item #1 */}
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="p-0">
              <CardHeader className="p-0">
                <div className="relative h-60">
                  <Image
                    src={
                      "https://drive.google.com/uc?id=185qwNf7JSRvoFH9fYBvZw85UC9ZvpN0K"
                    }
                    alt="Economic Assessment of DRS"
                    fill
                    className="rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-3 p-6">
                <p className="font-voska text-2xl leading-none">
                  Economic Assessment of a Deposit Refund System (DRS)
                </p>
                <p className="text-muted-foreground text-sm">
                  An Instrument for the Implementation of a Plastics Circular
                  Economy
                </p>
                <div className="text-right">
                  <Button variant="link" className="p-0" asChild>
                    <Link
                      href="https://iucn.org/sites/default/files/2022-08/economic_assessment_of_a_deposit_refund_system_drs_an_instrument_for_the_implementation_of_a_plastics_circular_economy.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More <ImArrowRight2 className="ms-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        {/* Carousel Item #2 */}
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="p-0">
              <CardHeader className="p-0">
                <div className="relative h-60">
                  <Image
                    src={
                      "https://drive.google.com/uc?id=1dHbponvYmqf9qSM2IbrFmnGKjcWaTUoQ"
                    }
                    alt="Product Reuse Economics"
                    fill
                    className="rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-3 p-6">
                <p className="font-voska text-2xl leading-none">
                  Product Reuse Economics in Closed-Loop Supply Chain Research
                </p>
                <p className="text-muted-foreground text-sm">
                  Products returned from customers and remaining value
                  recovered/upcycled
                </p>
                <div className="text-right">
                  <Button variant="link" className="p-0" asChild>
                    <Link
                      href="https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=d8097299650a2e243d5fe388f04c3ea2eb3439c3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More <ImArrowRight2 className="ms-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        {/* Carousel Item #3 */}
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="p-0">
              <CardHeader className="p-0">
                <div className="relative h-60">
                  <Image
                    src={
                      "https://drive.google.com/uc?id=1GpXmdkgOJnJpHfIrrz7g5Ss6KcTc3muv"
                    }
                    alt="DRS Facts & Myths"
                    fill
                    className="rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-3 p-6">
                <p className="font-voska text-2xl leading-none">
                  Deposit-Refund System (DRS) FACTS & MYTHS
                </p>
                <p className="text-muted-foreground text-sm">
                  Average collection and recycling rate for packaging waste
                  covered by the DRS in European countries is about 91%.
                </p>
                <div className="text-right">
                  <Button variant="link" className="p-0" asChild>
                    <Link
                      href="https://www2.deloitte.com/content/dam/Deloitte/pl/Documents/Brochures/pl_DRS_Brochure_Deloitte.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More <ImArrowRight2 className="ms-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        {/* Carousel Item #4 */}
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="p-0">
              <CardHeader className="p-0">
                <div className="relative h-60">
                  <Image
                    src={
                      "https://drive.google.com/uc?id=1Irh7U981S1_Ad7nYJoekg6WGp4OToUyx"
                    }
                    alt="No Return, No Refund"
                    fill
                    className="rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-3 p-6">
                <p className="font-voska text-2xl leading-none">
                  "No Return, No Refund"
                </p>
                <p className="text-muted-foreground text-sm">
                  A DRS requires consumers to pay a deposit which is
                  subsequently refunded when consumers return the reusable part
                  of the commodity.
                </p>
                <div className="text-right">
                  <Button variant="link" className="p-0" asChild>
                    <Link
                      href="https://www.lsu.edu/business/economics/files/workingpapers/pap00_18.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More <ImArrowRight2 className="ms-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        {/* Carousel Item #5 */}
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="p-0">
              <CardHeader className="p-0">
                <div className="relative h-60">
                  <Image
                    src={
                      "https://drive.google.com/uc?id=1ebmlotl2PmwIw8yR3SGctGydo9NqaEkv"
                    }
                    alt="Plastic Waste Management Framework"
                    fill
                    className="rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-3 p-6">
                <p className="font-voska text-2xl leading-none">
                  The Plastic Waste Management Framework
                </p>
                <p className="text-muted-foreground text-sm">
                  In 2023, an estimated 70 percent of plastic waste remains
                  uncollected, leaks into the environment, landfills/burnt.
                </p>
                <div className="text-right">
                  <Button variant="link" className="p-0" asChild>
                    <Link
                      href="https://endplasticwaste.org/en/our-stories/plastic-waste-management-framework"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More <ImArrowRight2 className="ms-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        {/* Carousel Item #6 */}
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="p-0">
              <CardHeader className="p-0">
                <div className="relative h-60">
                  <Image
                    src={
                      "https://drive.google.com/uc?id=1VjHVw_YgCl2E1aeKgPZeRZO4x0XXcuPH"
                    }
                    alt="Effectiveness of Deposit-Refund Systems"
                    fill
                    className="rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-3 p-6">
                <p className="font-voska text-2xl leading-none">
                  Effectiveness of deposit-refund systems for household waste in
                  the Netherlands
                </p>
                <p className="text-muted-foreground text-sm">
                  A combination of two instruments
                </p>
                <div className="text-right">
                  <Button variant="link" className="p-0" asChild>
                    <Link
                      href="https://research.vu.nl/ws/portalfiles/portal/104505087/Effectiveness_of_depositrefund_systems_for_household_waste_in_theNetherlands.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More <ImArrowRight2 className="ms-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="lg:flex hidden" />
      <CarouselNext className="lg:flex hidden" />
    </Carousel>
  );
}
