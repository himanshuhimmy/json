let express = require(`express`);
let app = express();

app.get(``, (req, resp) => {
  resp.send(`Hello home Page
    <a href="/about"> Go to about Page</a>
        <a href="/help"> Go to help Page</a>
    `);
});

app.get(`/about`, (req, resp) => {
  resp.send(`Hello AbouUS Page
        <a href="/"> Go to Home Page</a>
    `);
});

app.get(`/help`, (req, resp) => {
  resp.send(`Hello Help US Page 
           <a href="/"> Go to Home Page</a>
    `);
});

app.listen(3200);
