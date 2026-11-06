export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  is_read: boolean;
  created_at: string;
};

export const contactMessageFields =
  "id, name, email, subject, message, is_read, created_at";
