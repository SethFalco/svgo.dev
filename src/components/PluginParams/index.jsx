import React, { Fragment } from 'preact/compat';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import styles from './index.module.css';

export default function PluginParams() {
  /** @type {any} */
  const { frontMatter } = useDoc();
  const { parameters } = frontMatter.svgo;

  const paramDefinitions = Object.keys(parameters)
    .filter((key) => parameters[key]?.description)
    .map((key) => ({
      name: key,
      ...parameters[key]
    }));

  return (
    <dl>
      {paramDefinitions.map(param => (
        <Fragment key={param.name}>
          <dt>
            <code>{param.name}</code>
          </dt>
          <dd className={styles.leftMargin} dangerouslySetInnerHTML={{ __html: param.description }}>
          </dd>
        </Fragment>
      ))}
    </dl>
  );
}
