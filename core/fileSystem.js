class FileSystem {
  constructor() {
    this.dbName = "WebOS_DB";
    this.init();
  }

  init() {
    const request = indexedDB.open(this.dbName, 1);

    request.onupgradeneeded = e => {
      const db = e.target.result;
      db.createObjectStore("files", { keyPath: "path" });
    };
  }

  save(path, content) {
    const req = indexedDB.open(this.dbName, 1);
    req.onsuccess = e => {
      const db = e.target.result;
      const tx = db.transaction("files", "readwrite");
      tx.objectStore("files").put({ path, content });
    };
  }

  read(path, callback) {
    const req = indexedDB.open(this.dbName, 1);
    req.onsuccess = e => {
      const db = e.target.result;
      const tx = db.transaction("files", "readonly");
      const get = tx.objectStore("files").get(path);
      get.onsuccess = () => callback(get.result);
    };
  }
}

const FS = new FileSystem();
