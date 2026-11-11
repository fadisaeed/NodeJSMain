//פאדי סעיד
//ראזי אבו אליונס

const fs=require('fs');
const url=require('url');
const http=require('http');
const path=require('path');

const htmlpath=path.join(__dirname,'template','page.html');
const htmlfile= fs.readFileSync(htmlpath);
const csspath=path.join(__dirname,'template','CSS.css');
const cssfile=fs.readFileSync(csspath);
const imgpath = path.join(__dirname, 'imgs', 'ex1.jpg');
const imgfile = fs.readFileSync(imgpath);
const aboutuspath=path.join(__dirname,'template','aboutus.html')
const aboutus=fs.readFileSync(aboutuspath);
const contactpath=path.join(__dirname,'template','contact.html')
const contact=fs.readFileSync(contactpath);
const server=http.createServer(function(req,res)
{ 
    const parsedurl=url.parse(req.url,true);
    const pathname=parsedurl.pathname;
    if(pathname==='/'||pathname=='/page.html')
    {
        res.writeHead(200,{'content-type': 'text/html'});
        res.write(htmlfile);
        res.end();
    }
    else
        if(pathname=='/aboutus'||pathname=='/aboutus.html')
        {
            res.writeHead(200,{'content-type':'text/html'})
            res.write(aboutus);
            res.end();
        }
    else
        if(pathname=='/contact'||pathname=='/contact.html')
        {
            res.writeHead(200,{'content-type':'text/html'})
            res.write(contact);
            res.end();
        }
    else
    if(pathname==="/CSS.css")
    {
         res.writeHead(200,{'content-type': 'text/css'});
         res.end(cssfile);
    }
    else 
        if(pathname === '/ex1.jpg')
    {
    res.writeHead(200, {'content-type': 'image/jpeg'});
    res.end(imgfile);
    }

    else {
    res.writeHead(404, {'content-type': 'text/plain'});
    res.end('Not Found');
}

})

server.listen(3000);