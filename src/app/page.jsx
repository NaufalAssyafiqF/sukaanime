import Image from "next/image";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import AnimeList from "./components/animeList/AnimeList";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <a
        href="https://www.naufal-assyafiq.web.id/project"
        className="text-white ms-20 mt-auto"
      >
        test cross domain
      </a>
      <AnimeList />
    </div>
  );
}
