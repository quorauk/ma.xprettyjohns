import * as React from "react"

import Layout from "../components/layout"
import Container from "../components/container"
import Seo from "../components/seo"
import PlanetVideo from "../assets/blob.mp4"
import OSXRuby from "../assets/ruby.mp4"
import TileVideo from "../assets/tile.mp4"

const IndexPage = () => (
  <Layout>
    <Container>
      <div className="grid md:grid-cols-2">
        <video autoPlay={true} loop={true} muted={true} playsInline={true} className="xl:min-h-[576px] md:min-h-[384px]">
          <source src={PlanetVideo} />
        </video>
        <div className=" flex justify-center items-center p-5">
          <h1 className="text-8xl text-center font-titles font-black">
            {"Hi, I'm Max 👋"}
          </h1>
        </div>
      </div>
    </Container>
    <div className="w-full bg-slate-300 drop-shadow-md">
      <Container className="p-8 grid md:grid-cols-2">
        <div className="flex align-center order-1 md:order-2">
          <video autoPlay={true} loop={true} muted={true} playsInline={true} className="xl:min-h-[576px] md:min-h-[384px]">
            <source src={OSXRuby} />
          </video>
        </div>
        <div className="p-8 text-2xl order-2 md:order-1">
          <p>
            {"I'm a Software Developer based in Bristol available for freelance!."}
          </p>
          <br/>
          <p>
            {"I'm primarily working with Rails professionally but have experience with Elixir (Phoenix), Vue and React. I'm currently learning Rust via personal projects."}
          </p>
          <br/>
          <p>
            {"I'm also confident working with DevOps tools such as Kubernetes and Terraform, having built and managed platforms on AWS using both."}
          </p>
        </div>
      </Container>
    </div>
    <Container className="p-8 grid md:grid-cols-2">
      <div className="flex align-center">
        <video autoPlay={true} loop={true} muted={true} playsInline={true} className="xl:min-h-[576px] md:min-h-[384px]">
          <source src={TileVideo} />
        </video>
      </div>
      <div className="p-8 text-2xl">
        <p>{"In my personal life I'm a music fan and love live music, I'm currently attempting to listen to one album a day every day."}</p>
        <br/>
        <p>{"I also enjoy video games, I'm a big fan of the Yakuza series and I'm currently learning Riichi Mahjong."}</p>
      </div>
    </Container>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
