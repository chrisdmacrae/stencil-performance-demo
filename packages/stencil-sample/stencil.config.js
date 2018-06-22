exports.config = {
  outputTargets: [
    {
      type: 'www',
      baseUrl: "/stencil-sample/"
    }
  ],
  globalStyle: 'src/global/app.css'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
