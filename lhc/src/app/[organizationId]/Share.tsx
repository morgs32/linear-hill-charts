'use client'
import { Fragment, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ClipboardIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface IProps {
  workspaceKey: string 
}

export function Share(props: IProps) {

  const {
    workspaceKey 
  } = props

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Secret Key
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 height-95"
        enterTo="transform opacity-100 height-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 height-100"
        leaveTo="transform opacity-0 height-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-200 focus:outline-none">
          <div className="p-2 flex items-center">
            <Button>
              {workspaceKey}
            </Button>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

function Button({ children }: { children: string }) {

  const timeoutRef = React.useRef<NodeJS.Timeout>()
  const [content, setContent] = React.useState<string>(children)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const onClick = () => {
    navigator.clipboard.writeText(children)
    setContent('Copied!')
    timeoutRef.current = setTimeout(() => {  
      setContent(children)
    }, 2000)
  }

  return (
    <>
      <button
        onClick={onClick}
        className="rounded bg-black px-2 py-1 text-xs font-mono text-white shadow-sm truncate w-[240px]"
      >
        {content}
      </button>
      <ClipboardIcon 
        onClick={onClick}
        className="w-5 h-5 ml-2 cursor-pointer"
      />
    </>
  )
}