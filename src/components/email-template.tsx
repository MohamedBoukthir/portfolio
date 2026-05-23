import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div style={{ fontFamily: 'sans-serif', color: '#333', padding: '10px' }}>
    <h1 style={{ color: '#2563eb' }}>New Portfolio Message! 📬</h1>
    
    <p><strong>Sender Name:</strong> {name}</p>
    <p><strong>Sender Email:</strong> {email}</p>
    
    <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f4f4f5', borderRadius: '6px' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>Message:</p>
      {/* whiteSpace preserves line breaks if the user presses Enter */}
      <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{message}</p>
    </div>
  </div>
);
