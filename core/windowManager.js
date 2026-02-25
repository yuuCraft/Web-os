class WindowManager {
  constructor() {
    this.z = 1;
  }

  create(title, contentHTML) {
    const win = document.createElement("div");
    win.className = "window";
    win.innerHTML = `
      <div class="titlebar">
        ${title}
        <div class="controls">
          <span class="min">—</span>
          <span class="max">□</span>
          <span class="close">✕</span>
        </div>
      </div>
      <div class="content">${contentHTML}</div>
    `;

    document.getElementById("desktop").appendChild(win);
    this.enableDrag(win);
    this.enableControls(win);
    this.focus(win);

    win.classList.add("open-anim");

    return win;
  }

  focus(win) {
    this.z++;
    win.style.zIndex = this.z;
  }

  enableDrag(win) {
    const bar = win.querySelector(".titlebar");
    let ox, oy, down = false;

    bar.onmousedown = e => {
      down = true;
      ox = e.clientX - win.offsetLeft;
      oy = e.clientY - win.offsetTop;
      this.focus(win);
    };

    document.onmouseup = () => down = false;

    document.onmousemove = e => {
      if (!down) return;
      win.style.left = e.clientX - ox + "px";
      win.style.top = e.clientY - oy + "px";
    };
  }

  enableControls(win) {
    win.querySelector(".close").onclick = () => {
      win.classList.add("close-anim");
      setTimeout(() => win.remove(), 200);
    };

    win.querySelector(".max").onclick = () => {
      win.classList.toggle("maximized");
    };

    win.querySelector(".min").onclick = () => {
      win.style.display = "none";
    };
  }
}

const WM = new WindowManager();
