import { useRouter } from 'next/router'
import { WithChildren } from 'types/common'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { GitHub } from '../SvgIcons/GitHub'

export const Layout = ({ children }: WithChildren) => {
  const [hydrated, setHydrated] = useState(false)
  const { push } = useRouter()

  useEffect(() => {
    setHydrated(true)
  }, [push])

  if (!hydrated) {
    return null
  }

  return (
    <div className="h-full min-h-screen bg-gray-100">
      <main className="w-full">
        <div className="px-4 py-4 md:px-8 md:py-8">
          <div className="flex space-y-6 flex-col max-w-7xl w-full mx-auto">
            {children}
          </div>
        </div>
      </main>
      <footer className="bg-[#B9EDDD] p-2.5 flex justify-center">
        <Link passHref href="https://github.com/nguyend-nam">
          <a
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-2 font-medium text-[#577D86]"
          >
            <GitHub />
            Nam Nguyen Dinh
          </a>
        </Link>
      </footer>
    </div>
  )
}
