'use server';

import { EmailTemplate } from '@/components/email-template';
import React from 'react';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  try {
    const { error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['medboukthir7@gmail.com'],
      subject: `New Message from ${name}`,
      replyTo: email,
      react: React.createElement(EmailTemplate, { name, email, message }),
    });

    if (error) return { success: false, error: error.message };
    return { success: true };
  } catch (err) {
    return { success: false, error: 'Network error occurred.' };
  }
}
