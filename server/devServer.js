/**
 * Carousel
 */
import SC from '../configs/server-conf'
import paths from "../configs/paths"
import opn from 'opn'
import express from "express"
import config from '../webpack.config';
import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import freePort from './free-port' //helper function to find unused port
const compiler = webpack(config());
const app = express();

// Wrap for the 'app.listen' which takes unused port from 'freePort'
const listen = (port) =>
    app.listen(port, function(err) {
        if(err) {
            console.log(err);
            return
        }
        let url = `${SC.protocol}${SC.host}:${port}`;
        opn(url);
        console.log(`Listening at ${url}`);
    });

app.use(devMiddleware(compiler, {
    stats: 'minimal',
    publicPath: config().output.publicPath
}));

app.use(hotMiddleware(compiler, {
    path: '/__webpack_hmr'
}));

app.get('*', function(req, res) {
    res.sendFile(paths.prodHtmlPath);
});

freePort(SC.port).then(listen, err => console.log(err));