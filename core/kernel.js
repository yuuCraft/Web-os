class WebOSKernel {
  constructor() {
    this.apps = {};
    this.windows = [];
    this.currentUser = null;
  }

  registerApp(name, app) {
    this.apps[name] = app;
  }

  launch(name, options = {}) {
    if (!this.apps[name]) return;
    const instance = this.apps[name](options);
    this.windows.push(instance);
    return instance;
  }
}

const Kernel = new WebOSKernel();
