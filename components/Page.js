import { Global, css } from "@emotion/react";
import * as React from "react";

import HeadMeta from "./HeadMeta";

const contentCss = css`
  padding: 20px 80px 0;

  @media (max-width: 720px) {
    padding: 20px;
  }
`;

const titleCss = css`
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 60px;
`;

export default function Page(props) {
  const { children, className, title } = props;

  return (
    <React.Fragment>
      {/* <ScrollToTop /> */}
      {/* <Header title={title} subtitle={subtitle} /> */}
      <div css={titleCss}>
        <h1>{title}</h1>
      </div>
      <main className={className}>
        <div css={contentCss}>{children}</div>
      </main>
    </React.Fragment>
  );
}
