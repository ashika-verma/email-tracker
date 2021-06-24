/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import React from "react";
import * as ReactDOM from "react-dom";

const testCss = css`
  background-color: yellow;
`;

ReactDOM.render(<div css={testCss}>test</div>, document.getElementById("root"));
