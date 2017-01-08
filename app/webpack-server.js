import WebpackDevServer from "webpack-dev-server";
import webpack from "webpack";
import config from "../webpack.config";

var port = process.env.PORT + 1|| 3001;

var server = new WebpackDevServer(webpack(config), {
    // webpack-dev-server options
    publicPath: config.output.publicPath,
    hot: true,
    stats: { colors: true },
});

server.listen(port, "localhost", function() {});