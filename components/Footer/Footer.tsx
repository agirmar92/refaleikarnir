import GithubIcon from "@/icons/GithubIcon";

const Footer = () => (
  <footer className="relative z-10">
    <a
      target="_blank"
      href="https://github.com/agirmar92/refaleikarnir"
      rel="noopener noreferrer"
      className="flex justify-center py-3 text-stone-300"
    >
      agirmar92/refaleikarnir
      <span className="ml-2">
        <GithubIcon />
      </span>
    </a>
  </footer>
);

export default Footer;
