AppManager.register("terminal",()=>{
  const win=WindowManager.create("ターミナル",
    `<input id="termInput" placeholder="command">
     <div id="termOut"></div>`
  );
  VirtualDesktop.add(win);
});
