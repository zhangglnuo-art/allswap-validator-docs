import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className="heroBanner">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap'}}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Read Documentation
            </Link>
            <Link className="button button--secondary button--lg" href="https://allswap.io/tools/address-validator">
              Launch Interactive Validator
            </Link>
          </div>
        </div>
      </header>
      <main className="container">
        <section className="featureGrid">
          <div className="featureCard">
            <h3>46+ Blockchain Checksums</h3>
            <p>Offline Base58Check (double SHA-256), Bech32/Bech32m polymod, EIP-55, and Ed25519 StrKey verification.</p>
          </div>
          <div className="featureCard">
            <h3>Mandatory Memo &amp; Tag Rules</h3>
            <p>Enforces required Destination Tags and Memos on XRP, XLM, ATOM, TON, HBAR, and EOS custodial transfers.</p>
          </div>
          <div className="featureCard">
            <h3>Anti-Poisoning Detection</h3>
            <p>Detects vanity lookalike addresses copying leading and trailing characters of trusted counterparty wallets.</p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
