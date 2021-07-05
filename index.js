import { renderToString } from "react-dom/server";
import { createElement } from "react";

const importFooAsset = () => import(`foo.js!=!@svgr/webpack!./assets/foo.svg`);

const importDynamicAsset = (type) =>
  import(`${type}.js!=!@svgr/webpack!./assets/${type}.svg`);

(async () => {
  const foo = await importFooAsset();
  console.log(renderToString(createElement(foo.default))); // React component, renders an SVG element.

  const bar = await importDynamicAsset("bar"); // Error: Cannot find module 'bar.js!=!@svgr/webpack!./assets/bar.svg'
  console.log(bar);
})();
