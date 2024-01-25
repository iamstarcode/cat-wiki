//import * as atoms from '@/stores/store'

import { useAtom } from 'jotai'
import { useEffect } from 'react'

import * as atoms from '../stores/store'
/**
 * a custom hook to switch between light mode and dark mode
 * @default "dark"
 * @returns
 */
const useTheme = () => {
  //const [theme, setTheme] = useState<'dark' | 'light'>('light')
  const [theme, setTheme] = useAtom(atoms.themeAtom)

  //const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.className = theme
    }
  }, [theme])

  return {
    theme,
    toggleTheme
  }
}

export default useTheme
