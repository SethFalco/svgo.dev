import React from 'react';
import clsx from 'clsx';

import styles from './index.module.css';

export default function FooterLayout({style, links, copyright}) {
  return (
    <footer
      className={clsx('footer', styles.wrapper)}>
      <div className={clsx('container container-fluid', styles.footer)}>
        {links}
        {copyright && (
          <div className="footer__bottom text--center">
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
