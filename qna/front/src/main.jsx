import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import styled from "@emotion/styled";
const AppWrapper = styled.div`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  & .App {
    width: 400px;
    /* height: 100vh; */
    margin: 0 auto;
    padding: 20px;
    background-color: #26ab56;
    border-radius: 5px;
  }
  & .App h1 {
    text-align: center;
    font-size: 32px;
    padding: 16px 0;
  }
  & .App .links {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 20px;
  }
  & .App .links a {
    text-decoration: none;
    color: #fff;
    font-size: 15px;
  }
  & .App .links a.active {
    text-decoration: underline;
    font-weight: bold;
  }
`;

createRoot(document.getElementById("root")).render(
  <AppWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppWrapper>
);
