/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div className="footer-margin">
            <h5>Docs</h5>
            <a href={this.docUrl("doc1.html")}>DeltaTrader Zeus</a>
            <a href={this.docUrl("doc2.html")}>MetaTrader 5</a>
            <a href={this.docUrl("doc3.html")}>Boleta Delta</a>
            <a href={this.docUrl("doc3.html")}>Robôs de investimento</a>
          </div>
          <div>
            <h5>A DeltaTrader</h5>
            <a
              href="https://www.deltatrader.com.br"
              target="_blank"
              rel="noreferrer noopener"
            >
              DeltaTrader.com.br
            </a>
            <a
              href="https://zeus.deltatrader.com.br"
              target="_blank"
              rel="noreferrer noopener"
            >
              DeltaTrader Zeus
            </a>
          </div>
          <div>
            <h5>Suporte</h5>
            <a>suporte@deltatrader.com.br</a>
            <a>+55 27 3180 0317</a>
          </div>
        </section>

        <a
          href="https://opensource.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource"
        >
          <img
            src={`${this.props.config.baseUrl}img/logo-delta-01.svg`}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
