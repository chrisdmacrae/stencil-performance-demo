exports.config = {
  outputTargets: [
    {
      type: 'www'
    }
  ],
  globalStyle: 'src/global/app.css'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
