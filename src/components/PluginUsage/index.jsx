import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { useDoc } from '@docusaurus/theme-common/internal';

export default function PluginUsage() {
  const { frontMatter } = useDoc();
  const { pluginId, parameters } = frontMatter.svgo;

  let paramsTemplate = null;
  let paramDefinitions = [];
  if (parameters) {
    paramsTemplate = Object.keys(parameters)
      .filter((key) => parameters[key] && parameters[key].default !== undefined)
      .map((param) => `        ${param}: ${JSON.stringify(parameters[param].default)}`)
      .join(",\n");

    for (const key of Object.keys(parameters)) {
      paramDefinitions.push({
        name: key,
        ...parameters[key]
      })
    }
  }

  return (
    <Tabs>
      <TabItem value="basic" label="Basic" default>
        <CodeBlock
          language="js"
          title="svgo.config.js">
          {`module.export = {\n  plugins: [\n    "${pluginId}"\n  ]\n}`}
        </CodeBlock>
      </TabItem>
      {parameters && (
        <TabItem value="params" label="Parameters">
          <CodeBlock
            language="js"
            title="svgo.config.js">
            {`module.export = {\n  plugins: [\n    {\n      name: "${pluginId}",\n      params: {\n${paramsTemplate}\n      }\n    }\n  ]\n}`}
          </CodeBlock>
        </TabItem>
      )}
    </Tabs>
  );
}
