/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "./ui/button";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
  return (
<FieldSet>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="name">Full name</FieldLabel>
      <Input id="name" autoComplete="off" placeholder="Enter your name" />
    </Field>
    <Field>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" autoComplete="off" placeholder="Enter your email" />
    </Field>
    <Field>
      <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
      <FieldDescription>Enter your message below.</FieldDescription>
      <Textarea id="textarea-message" placeholder="Type your message here." rows={5} cols={8} />
    </Field>
  </FieldGroup>
      <Button size="lg">
        Submit
    </Button>
</FieldSet>
  );
}
