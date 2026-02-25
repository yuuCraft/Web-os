AppManager.register("notes",()=>{
  const win=WindowManager.create("メモ",
    `<textarea style="width:100%;height:100%"></textarea>`
  );
  VirtualDesktop.add(win);
});
