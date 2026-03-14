import HomeHeroFeatured from "@/components/home/HomeHeroFeatured";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import HomeNewsPreview from "@/components/home/HomeNewsPreview";
import HomeServices from "@/components/home/HomeServices";
import HomeImageBreak from "@/components/home/HomeImageBreak";
import HomeProcess from "@/components/home/HomeProcess";
import HomeFinalCta from "@/components/home/HomeFinalCta";

export default function HomePage() {
  return (
    <>
      <HomeHeroFeatured />
      <FeaturedProjects />

      {/* Aktualno (tighter, da ne dela white gap-a) */}
      <HomeNewsPreview />

      <HomeServices />

      {/* Visual reset / premium break */}
      <HomeImageBreak />

      <HomeProcess />
      <HomeFinalCta />
    </>
  );
}