import Image from "next/image";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import AnimeList from "./components/animeList/AnimeList";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <AnimeList />
    </div>
  );
}
