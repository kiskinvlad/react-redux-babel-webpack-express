import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js'

const app = express();
const compiler = webpack(config);
/*
if (app.get('env') === 'development') {
    app.use('development', function(){
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });
} else {
    app.use('production', function(){
        webpackDevHelper.useWebpackMiddleware(app);
 });
 if (process.env.NODE_ENV !== 'production') {
        console.log('DEVOLOPMENT ENVIRONMENT: Turning on WebPack Middleware...');
        webpackDevHelper.useWebpackMiddleware(app);
 }else {
        console.log('PRODUCTION ENVIRONMENT');

        //Production needs physical files! (built via separate process)
        app.use(express.static(__dirname + '/app/build'));
 }
}
*/
app.use(express.static(__dirname + '/app/build'));
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.get('*',function(req,res){
    res.sendFile(__dirname + '/app/build/index.html');
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('✓ Express server listening on port ' + port);
});
