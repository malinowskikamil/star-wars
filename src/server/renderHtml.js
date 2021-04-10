import serialize from "serialize-javascript";
import { minify } from "html-minifier";

export default ({ head, extractor, htmlContent, initialState, styleTags }) => {
  const html = `
    <!doctype html>
    <html ${head.htmlAttributes.toString()} lang="pl-PL">
      <head>
        <meta charset="utf-8" />
        <meta name="theme-color" content="#fff">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!--[if IE]>
          <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
        <![endif]-->
        <link rel="icon" href="/favicon.ico" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600" rel="stylesheet" />
        ${head.title.toString()}
        ${head.base.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        ${extractor.getLinkTags()}
        ${extractor.getStyleTags()}
        ${styleTags}
      </head>
      <body>
        <div id="react-view">${htmlContent}</div>
        <script>
          window.__INITIAL_STATE__=${serialize(initialState)};
        </script>
        ${extractor.getScriptTags()}
        ${head.script.toString()}
      </body>
    </html>
  `;

  const minifyConfig = {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,

  }
  return __DEV__ ? html : minify(html, minifyConfig);
};
