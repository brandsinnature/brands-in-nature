import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { WA_ME } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { caveat } from "@/lib/font";

export const metadata: Metadata = {
  title: "BIN for Business",
  description: "Brands In Nature",
};

export default function BinForBusiness() {
  return (
    <>
      <Container className="bg-[#e7dfff] py-0 lg:py-0">
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          <div className="space-y-10 col-span-2 pt-24 lg:pt-40 pb-20">
            <div className="space-y-6">
              <h1 className="font-voska text-[#005ecc] text-5xl lg:text-7xl">
                Unleash{" "}
                <span className="font-voska-outline">brand loyalty</span>{" "}
                through recycling.
              </h1>
              <p className="max-w-2xl text-muted-foreground text-sm lg:text-base">
                Increase packaging sorting rates through consumer rewards and
                let circularity drive brand sales. Together, we create a
                sustainable future.
              </p>
            </div>
            <div>
              <Link target="_blank" href={WA_ME}>
                <Button className="bg-[#005ecc] hover:bg-[#005ecc]" size={"lg"}>
                  Say Hi 👋
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:block relative hidden mt-auto min-h-[440px]">
            <Image
              src="/B2B-hero-image.png"
              alt={"B2B hero Image"}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Container>

      <Container>
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:block relative hidden mt-auto min-h-96">
            <Image
              src="/temp/stats-1.png"
              alt={"Step 1"}
              fill
              className="object-contain"
            />
          </div>

          <div className="space-y-6 col-span-2 m-auto max-w-xl">
            <div className="space-y-2">
              <p className="text-primary text-xs">NEWSLETTER</p>
              <p className="font-voska text-4xl lg:text-5xl">
                Get our free real-time market & consumer insights
              </p>
            </div>
            <p className="text-sm lg:text-base">
              +3.000 brand owners have already signed up. Sign up for a monthly
              dose of Trash Talk to get latest trend reports, industry stats and
              consumer insights for free.
            </p>

            <div>
              <Link target="_blank" href={WA_ME}>
                <Button size={"lg"}>Sign up here</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <Container childClassName="space-y-10">
        <p className="font-voska text-4xl text-center lg:text-5xl">
          Real-time insights for{" "}
          <span className="text-primary">millions of</span> products
        </p>
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-4xl text-xs lg:text-sm">
          <p className={styles.badge1}>
            <span className="font-semibold text-foreground ps-5">
              Recycling performance:
            </span>{" "}
            #Brand recyclers, #Recycled packages, #CO2 saved, Recycling
            behaviors, #materials
          </p>
          <p className={styles.badge1}>
            <span className="font-semibold text-foreground ps-5">
              Market Development:
            </span>{" "}
            Category development, Market share, Competitor shares, Product
            performance (yours & competitors).
          </p>
          <p className={styles.badge1}>
            <span className="font-semibold text-foreground ps-5">
              Campaign Performance:
            </span>{" "}
            Impressions, reach, conversation rates, # of consumer, competitor
            targeting.
          </p>
          <div>
            <p className={styles.badge2}>
              <span className="font-semibold text-foreground ps-5">
                Custom Insight Reports:
              </span>{" "}
              Consumer segmentations, Demographics,Consumption behavior, Market
              insights*
            </p>
            <p
              className={`text-[#005ecc] relative mt-8 ${styles.arrow} ${caveat.className}`}
            >
              <span className="text-lg align-baseline ps-4">
                *Add-on: Custom price based on project scope.
              </span>
            </p>
          </div>
        </div>
      </Container>

      <Container childClassName="space-y-10">
        <p className="font-voska text-5xl text-center lg:text-7xl">
          Good for <span className="font-voska-outline">brands</span>.
        </p>

        <div className="gap-8 lg:gap-4 grid grid-cols-1 lg:grid-cols-3">
          <div className="space-y-3 text-center">
            <div className="relative mx-auto w-44 lg:w-60 h-44 lg:h-60">
              <Image
                src={"/temp/good for brands1.png"}
                alt="Good for brands"
                fill
                className="object-contain"
              />
            </div>
            <p className="mx-auto max-w-60 font-voska text-[#005ecc] text-2xl leading-none">
              Increase sorting & recycling rates.
            </p>
            <p className="mx-auto max-w-72 text-muted-foreground text-pretty text-sm">
              BIN-connected brands can boost the sorting and recycling progress
              of their packaging, while gaining insights into consumer usage
              patterns with data on how and when their products are used.
            </p>
          </div>
          <div className="space-y-3 text-center">
            <div className="relative mx-auto w-44 lg:w-60 h-44 lg:h-60">
              <Image
                src={"/temp/good for brands2.png"}
                alt="Good for brands"
                fill
                className="object-contain"
              />
            </div>
            <p className="mx-auto max-w-60 font-voska text-[#005ecc] text-2xl leading-none">
              Build your fan base & drive loyalty.
            </p>
            <p className="mx-auto max-w-72 text-muted-foreground text-pretty text-sm">
              BIN actively engage consumers to close purchase gaps and nudge
              both competitors&apos; customers and light buyers at consumption
              moments, boosting market penetration and repeat sales.
            </p>
          </div>
          <div className="space-y-3 text-center">
            <div className="relative mx-auto w-44 lg:w-60 h-44 lg:h-60">
              <Image
                src={"/temp/good for brands3.png"}
                alt="Good for brands"
                fill
                className="object-contain"
              />
            </div>
            <p className="mx-auto max-w-60 font-voska text-[#005ecc] text-2xl leading-none">
              Get real-time market & consume insights.
            </p>
            <p className="mx-auto max-w-72 text-muted-foreground text-pretty text-sm">
              With BINs powerful analytics tool and custom report service,
              brands get realtime, actionable, and attributable data.
            </p>
          </div>
        </div>
      </Container>

      <Container childClassName="space-y-10">
        <p className="relative mx-auto lg:max-w-4xl font-voska text-5xl text-center lg:text-7xl">
          Make circularity your{" "}
          <span className="font-voska-outline">competitive advantage</span> and
          let it drive your sales.
          <Image
            src={"/stickers.png"}
            alt="kudos"
            width={100}
            height={104}
            className="-top-20 right-0 absolute lg:hidden object-contain"
          />
          <Image
            src={"/stickers.png"}
            alt="kudos"
            width={168}
            height={174}
            className="lg:block -top-20 right-0 absolute hidden object-contain"
          />
        </p>
      </Container>

      <Container childClassName="space-y-10">
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-10 lg:gap-20 bg-[url('/temp/68.png')] bg-cover lg:bg-contain bg-no-repeat bg-center p-20 lg:p-32 text-white">
          <div className="text-center">
            <p className="font-voska text-6xl lg:text-8xl">75%</p>
            <p className="max-w-60 font-bold text-sm lg:text-base">
              Prefer to buy brands working to reduce littering with BIN.
            </p>
          </div>
          <div className="text-center">
            <p className="font-voska text-6xl lg:text-8xl">45%</p>
            <p className="max-w-60 font-bold text-sm lg:text-base">
              View connected brands as more sustainable.
            </p>
          </div>
          <div className="text-center">
            <p className="font-voska text-6xl lg:text-8xl">48%</p>
            <p className="max-w-60 font-bold text-sm lg:text-base">
              Recycle more connected brands packages.
            </p>
          </div>
          <div className="text-center">
            <p className="font-voska text-6xl lg:text-8xl">90%</p>
            <p className="max-w-60 font-bold text-sm lg:text-base">
              Scan in the moment of consumption.
            </p>
          </div>
        </div>
      </Container>

      <Container className="bg-[url('/cereal.png')] bg-contain bg-no-repeat bg-center text-center">
        <div className="relative -z-10 space-y-10 bg-[#e6ddff] p-16 lg:p-32 rounded-3xl">
          <p className="font-voska text-[#005ecc] text-5xl lg:text-7xl">
            &quot;We want to give every packaging product a value because what
            is trash if every
            <span className="font-voska-outline">thing</span> has value?&quot;
          </p>

          <div className="flex justify-center items-center gap-2">
            <Image
              src="/yogesh.jpeg"
              alt="Yogesh"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="font-medium text-sm lg:text-base">
              Yogesh Bansal, CEO of BIN
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
