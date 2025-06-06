export default function (req, res) {
  const { image_urls = [], title = "", cta = "" } = req.body;

  const html = `
    <div style='position:relative;width:100%;max-width:800px;margin:auto;font-family:sans-serif;'>
      <div style='display:flex;flex-wrap:wrap;justify-content:space-between;'>
        ${image_urls
          .map((url, i) => `
  <img src='${url}' alt='img${i}' style='width:48%;margin-bottom:10px;transform:rotate(${i % 2 === 0 ? "-" : ""}${2 + i}deg);box-shadow:0 4px 8px rgba(0,0,0,0.3);' />
`)
          .join("")}
      </div>
      <div style='position:absolute;top:10%;left:5%;right:5%;text-align:center;color:white;text-shadow:2px 2px 4px rgba(0,0,0,0.6);'>
        <h1 style='font-size:2.5em;margin:0;'>\${title}</h1>
        <p style='font-size:1.2em;margin-top:10px;'>\${cta}</p>
      </div>
    </div>
  `;

  res.json({ collage_html: html });
}
