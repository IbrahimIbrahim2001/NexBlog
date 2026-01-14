import { BlogsSection } from "@/components/blogs-sections";
import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";


export default async function HomePage() {
    return (
        <div className="container px-4 space-y-16 md:space-y-24">
            <HeroSection />
            <BlogsSection />
            <CTASection />
        </div>
    )
}