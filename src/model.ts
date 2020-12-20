const localStorageKeyName = 'recordList'

const model = {
  clone(data: RecordItem[]) {
    return JSON.parse(JSON.stringify(data))
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
  },
  save(data: RecordItem[]) {
    return window.localStorage.setItem(localStorageKeyName, JSON.stringify(data))
  }
}

export default model