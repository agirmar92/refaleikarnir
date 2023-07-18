import Link from "next/link";
import CoverPhoto from "@/components/CoverPhoto";
import Tile from "@/components/Tile";
import TileTitle from "@/components/TileTitle";
import YearSelector from "@/components/YearSelector";
import GithubIcon from "@/icons/GithubIcon";

const RefaleikarnirFrontPage = () => (
  <>
    <CoverPhoto>
      <YearSelector />
    </CoverPhoto>
    <div className="flex flex-col space-y-3 p-3 bg-winter relative z-10">
      <TileTitle>Niðurstöður</TileTitle>
      <Tile>
        <p className="text-center">Svartir</p>
      </Tile>
      <Tile>
        <p className="text-center">Silfur</p>
      </Tile>
      <Tile>
        <p className="text-center">Rauðir</p>
      </Tile>
      <Tile>
        <p className="text-center">Hvítir</p>
      </Tile>
      <TileTitle>Þrautir</TileTitle>
      <Tile>
        <p className="text-center">GT - Black Ops - Boule</p>
      </Tile>

      {/* Footer */}
      <a
        target="_blank"
        href="https://github.com/agirmar92/refaleikarnir"
        rel="noopener noreferrer"
        className="flex justify-center pt-3 text-stone-300"
      >
        agirmar92/refaleikarnir
        <span className="ml-2">
          <GithubIcon />
        </span>
      </a>
    </div>
  </>
);

export default RefaleikarnirFrontPage;
