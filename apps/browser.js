AppManager.register("browser",()=>{
  const win=WindowManager.create("ブラウザ",
    `<iframe src="https://www.google.com" style="width:100%;height:100%;border:none;"></iframe>`
  );
  VirtualDesktop.add(win);
});
