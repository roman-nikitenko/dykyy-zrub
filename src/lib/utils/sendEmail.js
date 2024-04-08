export const sendEmail = async (formData) => {
  const res = await fetch('/api/sendmail', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'content-type': 'application/json',
    },
  });

  return res;
};
