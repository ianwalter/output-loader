var fs = require('fs'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    loaderUtils = require('loader-utils');

module.exports = function(source) {
  var query = loaderUtils.parseQuery(this.query),
      callback = this.async(),
      filePath;

  if (this.cacheable) {
    this.cacheable();
  }

  if (!query.path || query.path.trim() === '') {
    callback("Yo dawg, you didn't specify a path. Stop trippin.", source);
  } else {
    filePath = loaderUtils.interpolateName(this, query.path, {
      context: query.context || this.options.context
    });

    // Time to make the directories.
    mkdirp(path.parse(filePath).dir, err => {
      if (err) {
        callback(err, source);
      } else {

        // Write that file boy.
        fs.writeFile(filePath, source, 'utf8', err => {
          if (err) {
            callback(err, source);
          } else {

            // Pass the source along the chain unless this is the. last. loader.
            callback(null, this.loaderIndex === 0 ? '' : source);

          }
        });

      }
    });

  }
};
