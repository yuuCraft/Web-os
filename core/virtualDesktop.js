const VirtualDesktop={
  desktops:[[],[],[]],
  current:0,

  add(win){
    this.desktops[this.current].push(win);
  },

  switchTo(i){
    document.querySelectorAll(".window")
      .forEach(w=>w.style.display="none");

    this.desktops[i]
      .forEach(w=>w.style.display="block");

    this.current=i;
  }
};
