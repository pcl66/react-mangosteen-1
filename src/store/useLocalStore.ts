import create from 'zustand'

interface Local {
  skipped: boolean
  setSkipped: (val: boolean) => void
}

export const useLocalStore = create<Local>(set => ({
  skipped: JSON.parse(localStorage.getItem('skipped') || 'false'),
  setSkipped: (val: boolean) => {
    localStorage.setItem('skipped', `${val}`)
    set(() => ({ skipped: val }))
  },
}))
