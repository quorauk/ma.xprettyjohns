import * as React from "react"
import { Link } from "gatsby"
import Container from "./container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faGithub } from "@fortawesome/fontawesome-free-brands"

const Header = ({ siteTitle }) => (
  <header className="bg-clip-padding backdrop-filter backdrop-blur bg-opacity-30 border-b border-gray-100
    sticky top-0 left-0 right-0 p-3 z-50">
    <Container className="flex justify-between align-middle">
      <>
        <div>
          <Link className="text-xl bg-slate-300 rounded-full px-5" to="/">{siteTitle}</Link>
          <Link className="ml-5 bg-slate-300 rounded-full px-5" to="/projects">Projects</Link>
          <Link className="ml-5 bg-slate-300 rounded-full px-5" to="/blogs">Blog</Link>
        </div>
        <div className="align-middle hidden md:flex">
          <Link className="ml-5 bg-slate-300 rounded-full px-5 flex items-center" to="https://twitter.com/maxprettyjohns">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link className="ml-5 bg-slate-300 rounded-full px-5 flex items-center" to="https://github.com/quorauk">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
      </>
    </Container>
  </header>
)

export default Header
