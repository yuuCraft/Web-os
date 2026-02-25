class VirtualDesktop {
  constructor(count=3){
    this.desktops = Array.from({length:count},()=>[]);
    this.current = 0;
  }

  addWindow(win){
    this.desktops[this.current].push(win);
  }

  switchTo(i){
    document.querySelectorAll(".window")
      .forEach(w=>w.style.display="none");

    this.desktops[i]
      .forEach(w=>w.style.display="block");

    this.current = i;
  }
}

const VD = new VirtualDesktop(3);
