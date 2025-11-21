import LogoLoop from "@/components/ui/LogoLoop";

const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export function LogoLoopSection() {
    return (
        <section className="w-full py-4">

            {/* Title */}
            <div className="text-center mb-6">
                <h2 className="text-lg font-semibold tracking-wide text-foreground">
                    Software Technical
                </h2>
            </div>

            {/* Loop Container */}
            <div className="relative h-[120px] overflow-hidden">
                <LogoLoop
                    logos={imageLogos}
                    speed={120}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="var(--background)"
                    ariaLabel="Technology partners"
                />
            </div>

        </section>
    );
}
