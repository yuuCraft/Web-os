const AppManager = {
  register(name,app){
    Kernel.apps[name]=app;
  },

  launch(name){
    if(Kernel.apps[name]){
      Kernel.apps[name]();
      NotificationManager.toast(name+" 起動");
    }
  }
};
