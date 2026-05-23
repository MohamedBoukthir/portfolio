/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { sendContactEmail } from "@/app/actions/contact";
import { toast } from "sonner";


export function ContactForm() {


  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData(event.currentTarget);

    // Call the server action to send email
    const result = await sendContactEmail(formData);
    setIsPending(false);

        if (result.success) {
      (event.target as HTMLFormElement).reset();
      
      toast.success("Message Sent! 🎉", {
        description: "Everything went okay. I will get back to you soon!",
      });
    } else {
      toast.error("Error Sending Message ❌", {
        description: "Something went wrong. Please try again.",
      });
    }

  }

  return (
    <form onSubmit={handleSubmit}>
<FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Full name</FieldLabel>
            <Input id="name" name="name" autoComplete="off" placeholder="Enter your name" required />
          </Field>         
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input id="email" name="email" type="email" placeholder="Enter your email" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
            <FieldDescription>Enter your message below.</FieldDescription>
            <Textarea id="textarea-message" name="message" placeholder="Type your message here." rows={5} cols={8} required />
          </Field>
        </FieldGroup>     
        <Button type="submit" size="lg" className="mt-6 w-full" disabled={isPending}>
          {isPending ? "Sending..." : "Send"}
        </Button>
      </FieldSet>

</form>
  );
}
