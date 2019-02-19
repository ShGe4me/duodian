
 const localStorageSetItem = (key,obj) => {
    window.localStorage.setItem(key,JSON.stringify(obj))
 }
 const localStorageGetItem = (key) => {
     return window.localStorage.getItem(key) && JSON.parse(window.localStorage.getItem(key)) 
 }
 const localStorage = {
    setItem:localStorageSetItem,
    getItem:localStorageGetItem
}
 const sessionStorageSetItem = (key,obj) => {
    window.localStorage.setItem(key,JSON.stringify(obj))
    window.onunload = () => {
        window.localStorage.removeItem(key)
    } 
 }
 const sessionStorageGetItem = (key) => {
    window.onunload = () => {
        window.localStorage.removeItem(key)
    }
    return JSON.parse(window.localStorage.setItem(key))

}

const sessionStorage = {
    setItem:sessionStorageSetItem,
    getItem:sessionStorageGetItem
}
export {
    localStorage,
    sessionStorage
}