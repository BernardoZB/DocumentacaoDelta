/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const PromoSection = (props) => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        <span className="titulo">{props.title}</span>
        <small>{props.tagline}</small>
      </h2>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div>
          <Logo
            className="img-titulo"
            img_src={`${baseUrl}img/Logos_Docs-05.svg`}
          />
        </div>
        <div className=" inicio inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = (props) => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    // const TryOut = () => <Block>{[{}]}</Block>;

    const LearnHow = () => (
      <Block className="artigos">
        {[
          {
            content:
              "<span class='conteudo-art'>Artigos sobre mercado financeiro, robôs de <br><span class='conteudo-art'> investimentos, MetaTrader 5 e muito mais...</span> </span> <br> <br> <span class='link-art'>[**Leia mais...**](/blog/2020-09-01-teste-blog) </span>",
            image: `${baseUrl}img/Logos_Docs-04.svg`,
            imageAlign: "right",
            title: "<span class='titulo-art'>Leia Nossos Artigos</span>",
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block className="itens" id="try" layout="fourColumn" background="light">
        {[
          {
            content:
              "Tire suas dúvidas sobre a plataforma MetaTrader 5.<br><br><span style='text-decoration: underline'>[**Leia mais...**](/docs/doc1) </span>",
            image: `${baseUrl}img/Logos_Docs-03.svg`,
            imageAlign: "top",
            title: "MetaTrader 5",
            href: "#doc1",
          },
          {
            content:
              "Veja como instalar, configurar e utilizar todas as funcionalidades.<br><br> <span style='text-decoration: underline'>[**Leia mais...**](/docs/doc4) </span>",
            image: `img/Logos_Docs-02.svg`,
            imageAlign: "top",
            title: "DeltaTrader Zeus",
          },

          {
            content:
              "Dicas e tutoriais sobre robôs de investimentos para MetaTrader 5. <br><br> <span style='text-decoration: underline'> [**Leia mais...**](/docs/doc2) </span>",
            image: `${baseUrl}img/robos_mt5-01.svg`,
            imageAlign: "top",
            title: "Robôs MT5",
          },
          {
            content:
              "Sabia como instalar e utilizar a boleta mais completa do mercado.<br> <br> <span style='text-decoration: underline'> [**Leia mais...**](/docs/boletadelta) </span>",
            image: `${baseUrl}img/Logos_Docs-01.svg`,
            imageAlign: "top",
            title: "Boleta DeltaTrader",
          },
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <LearnHow />
        </div>
      </div>
    );
  }
}
module.exports = Index;
