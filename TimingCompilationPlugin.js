function TimingCompilationPlugin(options) { }

let t0 = new Date;

TimingCompilationPlugin.prototype.apply = function (compiler) {

   //   // Setup callback for accessing a compilation:
   //   compiler.plugin("compilation", function(compilation) {

   //     // Now setup callbacks for accessing compilation steps:
   //     compilation.plugin("optimize", function() {
   //       console.log("Assets are being optimized.");
   //     });
   //   });

   compiler.plugin("done", function (compilation) {
      const diff = new Date().valueOf() - t0.valueOf();
      t0 = new Date();
      console.log(`${diff} ms`);
   });
};

module.exports = TimingCompilationPlugin;