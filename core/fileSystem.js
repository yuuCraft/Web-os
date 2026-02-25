const FileSystem = {
  db:null,

  init(){
    const req=indexedDB.open("WebOS",1);
    req.onupgradeneeded=e=>{
      const db=e.target.result;
      db.createObjectStore("files",{keyPath:"path"});
    };
    req.onsuccess=e=>this.db=e.target.result;
  },

  save(path,content){
    const tx=this.db.transaction("files","readwrite");
    tx.objectStore("files").put({path,content});
  },

  read(path,cb){
    const tx=this.db.transaction("files","readonly");
    const req=tx.objectStore("files").get(path);
    req.onsuccess=()=>cb(req.result);
  }
};

FileSystem.init();
