import React from "react";
import {
  Paper,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  Button,
} from "@material-ui/core";

export function FormOrganisms(props) {
  return (
    <Paper className="p-vertical-30 p-horizontal-100">
      <h2>お問い合わせフォーム</h2>
      <FormControl variant="outlined" margin="dense" className="w-2column">
        <InputLabel htmlFor="given-name">姓</InputLabel>
        <OutlinedInput id="given-name" labelWidth={18} />
      </FormControl>
      <FormControl
        variant="outlined"
        margin="dense"
        className="w-2column ml-15px"
      >
        <InputLabel htmlFor="first-name">名</InputLabel>
        <OutlinedInput id="first-name" labelWidth={18} />
      </FormControl>
      <FormControl variant="outlined" margin="dense" className="w-2column">
        <InputLabel htmlFor="given-kana">セイ</InputLabel>
        <OutlinedInput id="given-kana" labelWidth={36} />
      </FormControl>
      <FormControl
        variant="outlined"
        margin="dense"
        className="w-2column ml-15px"
      >
        <InputLabel htmlFor="first-kana">メイ</InputLabel>
        <OutlinedInput id="first-kana" labelWidth={36} />
      </FormControl>
      <FormControl
        margin="dense"
        variant="outlined"
        className="w-80percent"
      >
        <InputLabel htmlFor="company">会社名</InputLabel>
        <OutlinedInput id="company" labelWidth={50} />
      </FormControl>
      <FormControl
        margin="dense"
        variant="outlined"
        className="w-80percent"
      >
        <InputLabel htmlFor="mail">メールアドレス</InputLabel>
        <OutlinedInput id="mail" labelWidth={110} />
      </FormControl>
      <TextField
        margin="dense"
        multiline
        variant="outlined"
        rows={8}
        fullWidth
        label="お問い合わせ内容"
      />
      <div class="m-15">
        <Button color="primary" variant="contained" onClick={props.setStep}>
          確認画面
        </Button>
      </div>
    </Paper>
  );
}
