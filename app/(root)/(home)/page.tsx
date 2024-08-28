import HomeCarousel from "@/components/home/carousel";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { WA_ME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { ImArrowRight2 } from "react-icons/im";

export default function Home() {
    return (
        <>
            <Container className="bg-[#f8f2ea]">
                <div className="gap-8 grid grid-cols-3">
                    <div className="space-y-6 col-span-3 lg:col-span-2 pt-10">
                        <h1 className="font-voska text-5xl lg:text-[84px] leading-none">
                            Join the{" "}
                            <span className="font-voska-outline">global</span>
                            <br />
                            recycling movement.
                        </h1>
                        <p className="text-base text-muted-foreground lg:text-lg">
                            Sort your trash: <b>Fun</b> and <b>rewarding</b> for{" "}
                            <b>global impact.</b>
                        </p>
                        <div>
                            <Link href={WA_ME} target="_blank">
                                <Button size={"lg"}>Use BIN</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:block relative hidden col-span-1 min-h-96">
                        <Image
                            src="/hero_img-1.webp"
                            alt="hero image"
                            fill
                            className="mx-auto object-contain"
                        />
                    </div>
                </div>
            </Container>

            <Container className="text-center">
                <div className="space-y-10 lg:space-y-20">
                    <div className="space-y-6">
                        <p className="font-voska text-4xl lg:text-7xl">
                            How the app works.
                        </p>
                        <p className="mx-auto max-w-lg text-muted-foreground text-pretty text-sm lg:text-base">
                            Ready to turn trash into treasure? Discover how easy
                            it is to recycle and get rewarded with our app.
                            Follow these simple steps to start making a positive
                            impact on the planet today.
                        </p>
                    </div>

                    <div className="place-content-center gap-10 lg:gap-4 grid grid-cols-3">
                        <div className="space-y-4 col-span-3 lg:col-span-1">
                            <Image
                                src="/pre-scan-2.png"
                                alt="Scan it"
                                width={163}
                                height={130}
                                className="mx-auto"
                            />
                            <div className="space-y-2">
                                <p className="font-bold">Scan it</p>
                                <p className="mx-auto max-w-80 lg:max-w-60 text-muted-foreground text-sm">
                                    Use our app to scan items with barcodes or
                                    snatch a photo using our image recognition
                                    technology to identify any material.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 col-span-3 lg:col-span-1">
                            <Image
                                src="/carrying-1.png"
                                alt="Scan it"
                                width={163}
                                height={130}
                                className="mx-auto"
                            />
                            <div className="space-y-2">
                                <p className="font-bold">BIN it</p>
                                <p className="mx-auto max-w-80 lg:max-w-60 text-muted-foreground text-sm">
                                    Locate the nearest waste or recycling
                                    location through our app, or register your
                                    own. Dispose any of your items properly.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-4 col-span-3 lg:col-span-1">
                            <Image
                                src="/recycle.png"
                                alt="Get rewarded"
                                width={163}
                                height={130}
                                className="mx-auto"
                            />
                            <div className="space-y-2">
                                <p className="font-bold">Get rewarded</p>
                                <p className="mx-auto max-w-80 lg:max-w-60 text-muted-foreground text-sm">
                                    Complete challenges, join competitions, and
                                    track your environmental impact by
                                    monitoring saved CO2 emissions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Link href={"/#learn-more"}>
                            <Button size={"lg"}>Learn more</Button>
                        </Link>
                    </div>
                </div>
            </Container>

            <Container className="bg-[#cce4ff]">
                <p className="mb-6 text-blue-600 text-center text-sm lg:text-base">
                    LATEST NEWS
                </p>
                <HomeCarousel />
            </Container>

            <Container className="bg-[url('/red-cans.png')] bg-cover bg-no-repeat bg-center lg:py-36">
                <div className="relative -z-10 space-y-2 bg-[#ffe9f2] p-10 lg:p-24 rounded-3xl">
                    <p className="text-xs lg:text-sm">
                        SMALL ACTIONS. BIG DIFFERENCE.
                    </p>
                    <p className="font-voska text-[#fb2850] text-5xl lg:text-7xl">
                        Together we will sort over{" "}
                        <span className="font-voska-outline">100 million</span>{" "}
                        packages.
                    </p>
                </div>
            </Container>

            <section className="py-16 lg:py-24 text-center">
                <div className="space-y-4">
                    <p className="mx-auto max-w-4xl font-voska text-5xl lg:text-7xl">
                        Join over <span className="text-primary">600K+</span>{" "}
                        recyclers and support our precious planet.
                    </p>
                    <p className="text-muted-foreground">
                        Join us in making a difference, one scan at a time.
                    </p>

                    {/* <div className="grid grid-cols-6 mx-10">
                        {Testimonials.map((testimonial, index) => (
                            <div
                                className="flex flex-col justify-center items-center gap-6"
                                key={index}
                            >
                                <div className="relative w-full h-80">
                                    <Image
                                        src={testimonial.image1.url}
                                        alt={testimonial.image1.alt}
                                        fill
                                        className={cn(
                                            "object-cover rounded-xl",
                                            testimonial.image1.padding && "mx-4"
                                        )}
                                    />
                                </div>

                                <div className="relative w-full h-20">
                                    <Image
                                        src={testimonial.image2.url}
                                        alt={testimonial.image2.alt}
                                        fill
                                        className={cn(
                                            "object-contain",
                                            testimonial.image2.padding && "px-4"
                                        )}
                                    />
                                </div>

                                <div className="relative w-full h-20">
                                    <Image
                                        src={testimonial.image3.url}
                                        alt={testimonial.image3.alt}
                                        fill
                                        className={cn(
                                            "object-contain",
                                            testimonial.image3.padding && "px-4"
                                        )}
                                    />
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </section>

            <div id="learn-more" />

            <Container className="bg-[#daf2e5]">
                <div className="gap-10 grid grid-cols-3">
                    <div className="lg:block relative hidden my-auto min-h-[500px]">
                        <Image
                            src="/barcodeless.png"
                            alt="barcodeless"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="space-y-6 col-span-3 lg:col-span-2">
                        <div className="space-y-2">
                            <p className="text-green-600 text-sm lg:text-base uppercase">
                                Turn Trash into Treasure with BIN
                            </p>
                            <p className="font-voska text-3xl lg:text-5xl">
                                Sort your waste, earn XP, and track your CO₂
                                savings
                            </p>
                        </div>

                        <p className="text-muted-foreground text-sm lg:text-base">
                            Join the global movement turning recycling into a
                            game with BIN — all while making a real impact on
                            our planet. Download BIN for free and start your
                            recycling journey today!
                        </p>

                        <div className="gap-6 grid grid-cols-2">
                            <div className="space-y-2">
                                <p className="font-bold text-sm lg:text-base">
                                    Smart Recognition
                                </p>
                                <p className="max-w-72 text-muted-foreground text-pretty text-xs lg:text-sm">
                                    Easily identify materials, products, and
                                    brands—with or without barcodes. It&apos;s
                                    like having a recycling buddy in your pocket
                                    thats guiding and educating you on how to
                                    sort your waste.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-bold text-sm lg:text-base">
                                    Fun Challenges
                                </p>
                                <p className="max-w-72 text-muted-foreground text-pretty text-xs lg:text-sm">
                                    Dive into exciting challenges and
                                    competitions to earn experience points (XP)
                                    to unlock levels and collect trophies.
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-bold text-sm lg:text-base">
                                    Track Your Impact
                                </p>
                                <p className="max-w-72 text-muted-foreground text-pretty text-xs lg:text-sm">
                                    See how much CO₂ you&apos;re saving and
                                    watch your positive impact grow. Every bit
                                    helps!
                                </p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-bold text-sm lg:text-base">
                                    Recycle Anywhere
                                </p>
                                <p className="max-w-72 text-muted-foreground text-pretty text-xs lg:text-sm">
                                    Use the app to recycle wherever you are and
                                    join a global community working towards a
                                    cleaner planet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className="bg-[url('/temp/34.png')] bg-contain bg-no-repeat bg-center my-20 text-center">
                <Link href={"why-we-exist"}>
                    <Button
                        variant={"secondary"}
                        className="text-primary"
                        size={"lg"}
                    >
                        Why we exist <ImArrowRight2 className="ms-4" />
                    </Button>
                </Link>
            </Container>
        </>
    );
}
