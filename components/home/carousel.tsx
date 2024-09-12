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

// Array of carousel items
const carouselItems = [
  // {
  //   title: "Digital Deposit Refund Systems",
  //   description:
  //     "Revolutionizing Waste Management for Our Common Future through a digital DRS",
  //   imageUrl:
  //     "https://drive.google.com/file/d/1DMsFtMkBeXHlAHvj9H3SkkBi1A0xo-g_/view?usp=sharing",
  //   link: "https://mybin.superblog.cloud/digital-deposit-refund-systems-revolutionizing-waste-management-for-a-sustainable-future-cm0zdgyf7000si5morv3tcica/",
  // },
  {
    title: "No Return, No Refund",
    description:
      "A DRS requires consumers to pay a deposit which is refunded upon returning the reusable part of the packaging.",
    imageUrl:
      "https://drive.google.com/uc?id=1Irh7U981S1_Ad7nYJoekg6WGp4OToUyx",
    link: "https://www.lsu.edu/business/economics/files/workingpapers/pap00_18.pdf",
  },
  {
    title: "The Plastic Waste Management Framework",
    description:
      "In 2023, 70% of plastic waste remains uncollected, leaking into the environment or landfills.",
    imageUrl:
      "https://drive.google.com/uc?id=1ebmlotl2PmwIw8yR3SGctGydo9NqaEkv",
    link: "https://endplasticwaste.org/en/our-stories/plastic-waste-management-framework",
  },
  {
    title: "Economic Assessment of a Deposit Refund System (DRS)",
    description:
      "An Instrument for the Implementation of a Plastics Circular Economy",
    imageUrl:
      "https://drive.google.com/uc?id=185qwNf7JSRvoFH9fYBvZw85UC9ZvpN0K",
    link: "https://iucn.org/sites/default/files/2022-08/economic_assessment_of_a_deposit_refund_system_drs_an_instrument_for_the_implementation_of_a_plastics_circular_economy.pdf",
  },
  {
    title: "Product Reuse Economics in Closed-Loop Supply Chain Research",
    description:
      "Products returned from customers and remaining value recovered/upcycled",
    imageUrl:
      "https://drive.google.com/uc?id=1dHbponvYmqf9qSM2IbrFmnGKjcWaTUoQ",
    link: "https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=d8097299650a2e243d5fe388f04c3ea2eb3439c3",
  },
  {
    title: "Deposit-Refund System (DRS) FACTS & MYTHS",
    description:
      "Average collection and recycling rate for packaging waste covered by the DRS in European countries is about 91%.",
    imageUrl:
      "https://drive.google.com/uc?id=1GpXmdkgOJnJpHfIrrz7g5Ss6KcTc3muv",
    link: "https://www2.deloitte.com/content/dam/Deloitte/pl/Documents/Brochures/pl_DRS_Brochure_Deloitte.pdf",
  },
  {
    title:
      "Effectiveness of Deposit-Refund Systems for Household Waste in the Netherlands",
    description: "A combination of two instruments",
    imageUrl:
      "https://drive.google.com/uc?id=1VjHVw_YgCl2E1aeKgPZeRZO4x0XXcuPH",
    link: "https://research.vu.nl/ws/portalfiles/portal/104505087/Effectiveness_of_depositrefund_systems_for_household_waste_in_theNetherlands.pdf",
  },
];

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
        {carouselItems.map((item, index) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
            <div className="p-1">
              <Card className="p-0">
                <CardHeader className="p-0">
                  <div className="relative h-60">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="rounded-t-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 p-6">
                  <p className="font-voska text-2xl leading-none">
                    {item.title}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                  <div className="text-right">
                    <Button variant="link" className="p-0" asChild>
                      <Link
                        href={item.link}
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
        ))}
      </CarouselContent>
      <CarouselPrevious className="lg:flex hidden" />
      <CarouselNext className="lg:flex hidden" />
    </Carousel>
  );
}
