import Container from "@/components/ui/container";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import styles from "./styles.module.css";
import { Metadata } from "next";
import { caveat } from "@/lib/font";

export const metadata: Metadata = {
    title: "Why We Exist",
    description: "Brands In Nature",
};

export default function WhyWeExist() {
    return (
        <div className="relative">
            <div className="-top-20 -z-10 absolute bg-[url('/why-we-exist-bkg-image.jpg')] bg-cover bg-no-repeat bg-center w-full h-[calc(100vh-68px)]"></div>

            <div className="pt-40 h-[calc(100vh-68px)] text-center text-white">
                <p className="text-sm uppercase">Our vision</p>
                <h1 className="mx-auto max-w-3xl font-voska text-8xl">
                    A WORLD <span className="font-voska-outline">FREE</span>{" "}
                    FROM TRASH
                </h1>
            </div>

            <Container className="py-0" childClassName="space-y-20">
                <div className="grid grid-cols-3">
                    <p className="col-span-2 font-voska text-7xl">
                        <span className="text-primary">4%</span> of all global
                        CO2 emissions come from{" "}
                        <span className="font-voska-outline">plastic.</span>
                    </p>

                    <p
                        className={`${caveat.className} text-2xl mt-auto leading-none text-right`}
                    >
                        …with a tripling threat by 2060 as packaging waste is
                        booming.
                    </p>
                </div>

                <div className="flex justify-around items-center bg-[url('/image-from-rawpixel.webp')] bg-cover bg-no-repeat bg-center p-32 text-destructive">
                    <div className="text-center">
                        <p className="font-voska text-8xl">41%</p>
                        <p className="max-w-60 font-bold">
                            Don&apos;t know what can be recycled.
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="font-voska text-8xl">62%</p>
                        <p className="max-w-60 font-bold">
                            Don&apos;t know what can be recycled.
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="font-voska text-8xl">80%</p>
                        <p className="max-w-60 font-bold">
                            Don&apos;t know the impact of recycling.
                        </p>
                    </div>
                </div>

                <div className="gap-10 grid grid-cols-2">
                    <div className="space-y-6 max-w-lg">
                        <p className="font-voska text-7xl">
                            ...which leads to catastrophic consequences.
                        </p>
                        <p className="text-muted-foreground">
                            Global warming is happening now, and package waste
                            is a big part of the problem.
                        </p>
                    </div>

                    <Accordion
                        type="single"
                        collapsible
                        className="my-auto w-full"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Humanitarian crisis
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                13 million people die every year because of
                                environmental factors. Health crisis, poverty &
                                food scarcity is growing.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                Suffering planet
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                Since 1982, a tripling in temperature rise has
                                been driven by increased droughts, storms,
                                wildfires, severe rainfall, a 2-meter sea level
                                rise projection, and the annual melting of 419
                                billion tonnes of ice.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                6th mass extinction
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                Losing species at a rate of 1,000 times greater
                                than recorded in human history.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </Container>

            <Container className="bg-[url('/milk-cartons.png')] bg-contain bg-no-repeat bg-center py-20 text-center">
                <div className="relative -z-10 space-y-10 bg-[#cceede] p-24 rounded-3xl">
                    <p className="text-xsl">
                        Say hello to... <b>BIN!</b>
                    </p>
                    <p className="font-voska text-[#285f3c] text-7xl">
                        &quot;Join the BIN movement and let&apos;s ensure that{" "}
                        <span className="font-voska-outline">every piece</span>{" "}
                        of material finds its purpose.&quot;
                    </p>

                    <div className="flex justify-center items-center gap-2">
                        <Image
                            src="/yogesh.jpeg"
                            alt="Yogesh"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <p className="font-medium">Yogesh Bansal, CEO of BIN</p>
                    </div>
                </div>
            </Container>

            <Container>
                <div className="gap-8 grid grid-cols-3">
                    <div className="relative mx-auto w-80">
                        <Image
                            src="/recycle.png"
                            alt="Get rewarded"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="space-y-8 col-span-2">
                        <div className="space-y-1">
                            <p className="font-medium text-green-600 text-sm uppercase">
                                Our mission
                            </p>
                            <p className="font-voska text-5xl">
                                Every
                                <span className="font-voska-outline">
                                    thing
                                </span>{" "}
                                has a value
                            </p>
                        </div>
                        <p className="max-w-xl text-muted-foreground text-pretty">
                            Transforming the way we work towards a circular
                            economy is more than a goal; it&apos;s a movement.
                            To build a resilient ecosystem, we need
                            collaboration from everyone. Producers are already
                            making waves by shifting towards reusable and
                            recyclable products. Waste management is stepping up
                            to transform waste into valuable new resources. This
                            progress is fantastic and deserves a huge kudos!
                        </p>
                        <p className="max-w-xl text-muted-foreground text-pretty">
                            But here&apos;s the deal: none of these efforts
                            matter unless we, the consumers, step up and do our
                            part. The real magic happens when we sort our waste
                            into dedicated bins. This is where BIN&apos;s
                            passion ignites—to revolutionize consumer sorting
                            behavior through gamification, incentives, and
                            education.
                        </p>
                        <p className="max-w-xl text-muted-foreground text-pretty">
                            The circular economy becomes a reality when all key
                            players join forces. So, download BIN and turn your
                            waste sorting into a fun, rewarding journey. Or join
                            us and support your consumers in this growing
                            movement for a circular tomorrow. Together, we can
                            make recycling not just a habit, but a lifestyle.
                        </p>
                    </div>
                </div>
            </Container>

            <Container
                className="border-muted-foreground bg-foreground border-b"
                childClassName="space-y-8"
            >
                <p className="font-voska text-5xl text-white">
                    What we stand for
                </p>

                <div className="gap-8 grid grid-cols-2">
                    <p className={styles.badge1}>
                        <span className="text-warning ps-6">
                            Know More, Waste Less:
                        </span>{" "}
                        We&apos;re all about getting the word out. Learn about
                        sorting, recycling and the real-deal impact of just
                        tossing things away. Knowledge is power!
                    </p>
                    <p className={styles.badge2}>
                        <span className="text-warning ps-6">
                            Info at Your Fingertips:
                        </span>{" "}
                        Who&apos;s got the time to play detective on where to
                        recycle a can? Our app&apos;s got you covered—it tells
                        you where to sort your stuff, based on where you&apos;re
                        at. Easy, peasy.
                    </p>
                    <p className={styles.badge3}>
                        <span className="text-warning ps-6">
                            Goodies for Good Deeds:
                        </span>{" "}
                        Yeah, you read right. We&apos;ll toss some goodies your
                        way—cash, coupons, or a heartwarming charity
                        donation—every time you sort right. Let&apos;s make
                        doing good feel good, shall we?
                    </p>
                    <p className={styles.badge4}>
                        <span className="text-warning ps-6">
                            Here, There, Everywhere:
                        </span>{" "}
                        We&apos;re all about harmonizing with the local rhythm
                        and recycling regulations wherever we set foot. Every
                        local effort resonates globally in our quest for a
                        waste-less world. Here&apos;s to small local steps that
                        leap across borders, making increased recycling rates
                        less of a dream and more of a reality.
                    </p>
                </div>
            </Container>
        </div>
    );
}
