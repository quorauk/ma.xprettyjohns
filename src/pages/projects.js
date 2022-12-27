import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Container from "../components/container"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import SMBF from "../images/smbf.png"
import Stream from "../images/stream_fgc.png"
import VMU from "../images/VMU.png"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const ProjectsPage = () => (
  <Layout>
    <Container className='text-center p-8'>
      <h1 className="text-4xl font-titles font-black">Projects</h1>
      <p className="text-2xl mt-2">
        {"Here are some projects I've been working on"}
      </p>
    </Container>
    <div className="w-full pb-8">
      <Container className='my-8 px-8 grid md:grid-cols-2'>
        <div className="flex align-middle">
          <img src={SMBF} className="object-contain" />
        </div>
        <div className='py-5 md:px-8'>
          <h2 className="text-3xl">SMBF Website</h2>
          <br />
          <p>Link: <a href="http://superminerbattle.farm">superminerbattle.farm</a></p>
          <p>Code: <a href="https://github.com/quorauk/superminerbattle.farm">Github</a></p>
          <p>Technology: Gatsby, Graphql</p>
          <br />
          <p className="text-2xl">The website for my local fighting game community, it pulls data from the Start.gg API in order to update the list of regularly played games, as well as a list of upcoming and past events. All data is pulled daily and rebuilt via github actions.</p>
        </div>
      </Container>
    </div>
    <div className="w-full bg-slate-300 drop-shadow-md py-8">
      <Container className='my-8 px-8 grid md:grid-cols-2'>
        <div className="flex align-middle order-1 md:order-2">
          <img src={Stream} className="object-contain" />
        </div>
        <div className='py-5 md:px-8 order-2 md:order-1'>
          <h2 className="text-3xl">Stream Overlays</h2>
          <br />
          <p>Link: <a href="http://stream.fightinggame.community">stream.fightinggame.community</a></p>
          <p>Technology: Rails, Stimulus</p>
          <br />
          <p className="text-2xl">
            Allows streamers to create a scoring overlay, that can be imported into streaming software and update in real time via websockets, player names can be pulled from Start.GG and scores entered from multiple devices.
          </p>
          <br />
          <p className="text-2xl">
            The site allows simple CSS overrides so users can create their own styles.
          </p>
        </div>
      </Container>
    </div>
    <div className="w-full py-8">
      <Container className='my-8 px-8 grid md:grid-cols-2'>
        <div className="flex align-middle">
          {/* <img src="/VMU.png"/> */}
          <img alt="Image of device mounted on a microphone arm, it has two keyboard keys, and two LED's" src={VMU} width={608} height={517} />
        </div>
        <div className='py-5 md:px-8'>
          <h2 className="text-3xl">VMU Project</h2>
          <br />
          <p>Technology: Arduino, 3D Printing</p>
          <br />
          <p className="text-2xl">A 3D printed Arduino device that attaches to a microphone stand</p>
          <br />
          <p className="text-2xl">{"Connects to Discord/Window API's and lights up when a audio is detected, also displays lights when the user is muted."}</p>
          <br />
          <p className="text-2xl">The keys are regular keyboard inputs that can be used for any hotkeys required</p>
        </div>
      </Container>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Projects" />

export default ProjectsPage