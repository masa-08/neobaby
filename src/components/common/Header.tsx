import { Link } from 'react-router-dom'
import { OpenseaIcon, TwitterIcon } from './Icons'
import { Menu } from './Menu'

export const Header = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="navbar flex justify-between items-center px-3 max-w-5xl mx-auto">
          <div className="flex flex-col items-start">
            <Link to="/">
              <p className="text-5xl leading-none">NEOBABY</p>
            </Link>
          </div>
          <div>
            <div className="hidden md:block">
              <Menu />
            </div>
            <div className="pl-3 flex gap-3 justify-center">
              <div className="w-8 shadow-flat-xs shadow-gray-500 rounded-full border-gray-500 border bg-gray-500 dark:bg-base-100">
                <OpenseaIcon />
              </div>
              <div className="w-8 shadow-flat-xs shadow-gray-500 rounded-full border-gray-500 border bg-gray-500 dark:bg-base-100">
                <TwitterIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
