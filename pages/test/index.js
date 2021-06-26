import * as React from "react";

import { css } from "@emotion/react";
import Page from "../../components/Page";

const columnLayoutCss = css`
  max-width: 800px;
  margin: 0 auto;
`;

const pageCss = css`
  max-width: 1500px;
  margin: 0 auto;
`;

// export default function TestPage() {
export default class TestPage extends React.Component {
  render() {
    return (
      <Page css={pageCss} title="Test!!">
        <div>hiii</div>
        <a href="/">Go back</a>
      </Page>
    );
  }
}
