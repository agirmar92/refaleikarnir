import { FoxelLogo } from '@/icons/FoxelLogo'
import GithubIcon from '@/icons/GithubIcon'

const Footer = () => (
  <footer className="flex z-10 h-20 justify-between px-5 py-2">
    <FoxelLogo />
    <a
      target="_blank"
      href="https://github.com/agirmar92/refaleikarnir"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 text-stone-300"
    >
      <span>agirmar92/refaleikarnir</span>
      <GithubIcon />
    </a>
  </footer>
)

export default Footer
