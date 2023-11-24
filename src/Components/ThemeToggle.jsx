/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { BsMoonStars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";


const ThemeToggle = ({isDark, setIsDark}) => {

  useEffect(() => {
    localStorage.setItem('isDark', JSON.stringify(isDark));
  },[isDark]);
  return (
    <div><label className="swap swap-rotate">
    <input type="checkbox" className="theme-controller" checked={isDark} onChange={() => setIsDark(!isDark)} value={isDark ? 'sunset' : 'winter'} />
    <BsSun className="swap-on fill-current w-7 h-7" />
    <BsMoonStars className="swap-off fill-current w-7 h-7" />
  </label></div>
  )
}

export default ThemeToggle