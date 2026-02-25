AppManager.register("files",()=>{
  const win=WindowManager.create("ファイル",
    `<button onclick="FileSystem.save('/test','Hello')">保存</button>`
  );
  VirtualDesktop.add(win);
});
