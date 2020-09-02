/*  */

const store = window.localStorage;

class LocalStorage {
  public static set(key: string, value: any) {
    if(!store) {
      return;
    }
    // 备份一份
    let v = value;
    try {
      if(typeof value === 'object') {
        v = JSON.stringify(v)
      }
      store.setItem(key, v);
    }catch(error) {

    }
  }

  /* 获取 value */
  public static get(key: string) {
    if(!store) {
      return;
    }

    return store.getItem(key)
  }

  /* 获取的同时转为 JSON */
  public static get2JSON(key: string) {
    if(!store) {
      return;
    }

    let data =  store.getItem(key);
    if(data) {
      try{
        return JSON.parse(data)
      }catch(error) {
        // do...
      }
    }
    return null;
  }

  /* 删除 */
  public static remove(key: string) {
    if(!store) {
      return;
    }

    try{
      store.removeItem(key);
    }catch(error) {
      
    }
  }
}

export default LocalStorage;