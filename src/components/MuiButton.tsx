import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { Button, Stack, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";

const MuiButton = () => {

  // const [formats, setFormats] = useState<string[]>([]);
  const [formats, setFormats] = useState<string | null>(null);

  console.log({formats});

  const onFormatsChange = (event: React.MouseEvent<HTMLElement>, updatedFormats: string | null) => {
    setFormats(updatedFormats);
  };
  
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com" target="blank">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="contained" color="success">Success</Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />} disableRipple onClick={() => alert("Clicked")}>Send</Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>Send</Button>
        <IconButton aria-label="send" color="success" size="small"> 
          <SendIcon></SendIcon>
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant="contained" orientation="vertical" size="small" color="secondary" aria-label="aligment button group">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button onClick={() => alert("Right Clicked")}>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row"> 
         <ToggleButtonGroup value={formats } onChange={onFormatsChange} exclusive size="small" color="success" orientation="horizontal" aria-label="text formatting">
            <ToggleButton value="bold" aria-label="bold"><FormatBoldIcon /></ToggleButton>
            <ToggleButton value="italic" aria-label="italic"><FormatItalicIcon /></ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined"><FormatUnderlinedIcon /></ToggleButton>
          </ToggleButtonGroup> 
      </Stack>
    </Stack>
  );
};

export default MuiButton;
