import axios from "axios";

export default async function handler(req, res) {

  const {MAILCHIMP_API_KEY,MAILCHIMP_DOMAIN,MAILCHIMP_LIST_ID} = process.env;

  if(req.method === 'POST'){

    const {email} = req.body;
    const url = `https://${MAILCHIMP_DOMAIN}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

    const data = {
      "email_address": email,
      "status": "subscribed",
      "merge_fields":{}
    };

    await axios.post(url, data, {
      auth: {
        username: "user",
        password: MAILCHIMP_API_KEY
      }
    }).then(result => {
      res.status(200).json({isSuccess: true, message:""});            
    }).catch(error => {
      res.status(200).json({isSuccess: false, message:error.response.data.title});            
    });
  }
  else{
      res.send(405, 'Method Not Allowed');
  }
}
