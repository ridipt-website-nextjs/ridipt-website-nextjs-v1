"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function ModeToggle() {
  const { setTheme } = useTheme()
  const [hovered, setHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  const themeOptions = [
    { name: "Light", value: "light", icon: Sun },
    { name: "Dark", value: "dark", icon: Moon },
    { name: "System", value: "system", icon: Monitor }
  ]

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Button variant="outline" size="icon" className="relative">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>

      {hovered && (
        <div 
          className="absolute right-0 top-full -mt-1 z-50"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="mt-3 overflow-hidden w-max rounded-lg bg-white shadow-lg dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700">
            {themeOptions.map((option) => {
              const IconComponent = option.icon
              return (
                <button
                  key={option.value}
                  onClick={() => setTheme(option.value)}
                  className="flex w-full items-center gap-2 px-4 py-2 text-left text-sm text-neutral-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors duration-150"
                >
                  <IconComponent className="h-4 w-4" />
                  {option.name}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
