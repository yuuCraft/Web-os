const NotificationManager={
  toast(text){
    const t=document.createElement("div");
    t.className="toast";
    t.innerText=text;
    document.body.appendChild(t);
    setTimeout(()=>t.remove(),3000);
  }
};
