// netlify/functions/verify-captcha.js

const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const params = new URLSearchParams(event.body);
  const token = params.get('g-recaptcha-response');
  const secret = "6LcNEI8rAAAAANKZ9rsgGTfdZLLPuLkg_enpfljC";//process.env.RECAPTCHA_SECRET; // Netlify env var

  const resp = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    { method: 'POST' }
  );
  const data = await resp.json();

  if (data.success) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false })
    };
  }
};
