import React from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Paper,
  Grid,
} from "@material-ui/core";
import { TableComponent } from "../molecules/TableComponent";

export function AboutOrganisms() {
  const datas = [
    {
      key: "会社名",
      value: "株式会社Trend",
    },
    {
      key: "設立",
      value: "2015年8月１日",
    },
    {
      key: "資本金",
      value: "31,806万円（2020年3月31日現在）",
    },
    {
      key: "代表者",
      value: "代表取締役 〇〇 〇〇",
    },
    {
      key: "所在地",
      value: "北海道札幌市",
    },
    {
      key: "事業内容",
      value: "マーケティング ロボットの提供",
    },
  ];

  return (
    <Grid justify="center">
      <Paper>
        <TableComponent datas={datas} />
      </Paper>
    </Grid>
  );
}

if (document.getElementById("about__main")) {
  ReactDOM.render(<AboutOrganisms />, document.getElementById("about__main"));
}
