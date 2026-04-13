"use client";

import {
  InputGroup,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

const InputGroupDemo = () => (
  <InputGroup className="w-full max-w-md">
    <InputGroupText>https://</InputGroupText>
    <InputGroupInput placeholder="your-site.com" />
  </InputGroup>
);

export default InputGroupDemo;
