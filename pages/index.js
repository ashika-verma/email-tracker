import * as React from "react";
import * as Constants from "~/common/constants";

import HeadMeta from "../components/HeadMeta";
import Page from "../components/Page";

import { css } from "@emotion/react";
const pageCss = css`
  max-width: 1500px;
  margin: 0 auto;
`;

export default class IndexPage extends React.Component {
  render() {
    const title = "Welcome";

    return (
      <Page css={pageCss} className="mainpage" title={title}>
        <div>hi</div>
        <a href="/test">test link</a>
      </Page>
    );
  }
}
