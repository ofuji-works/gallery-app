import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";

/**
 * 
 * @param key カラム名
 * @param value 値名
 */

export function TableComponent(props) {
  console.log(props.datas);
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {props.datas.map((data) => {
            return (
              <TableRow key={data.key}>
                <TableCell align="right" className="no-border">
                  {data.key}
                </TableCell>
                <TableCell className="no-border">{data.value}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
