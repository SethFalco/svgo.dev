import React from 'react';
import clsx from 'clsx';

import styles from './index.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Easy to use through both the command-line interface and JavaScript
        API.
      </>
    ),
  },
  {
    title: 'Integrations',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Many applications and frameworks depend on or have supported integrations
        for SVGO already, like Docusaurus and Webpack.
      </>
    ),
  },
  {
    title: 'Open-Source',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We welcome contributions, so feel free to join us on GitHub!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('card', styles.feature)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" aria-hidden="true"/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
