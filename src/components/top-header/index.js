import { BookmarkIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux';
import { dismiss } from '../../redux/topbar';

export default function TopHeader(args) {
  const topBar = useSelector( state => state.topbar.value )
  const dispatch = useDispatch();
  const dismissTopHeader = () => {
    dispatch(
      dismiss({
        topBarStatus: false
      })
    )
  }
  
  if(topBar.topBarStatus)
  {
    return (
      <div className={"bg-indigo-600" + (args.extraClass !== undefined ? args.extraClass : "")}>
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <span className="flex rounded-lg bg-indigo-800 p-2">
                <BookmarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <p className="ml-3 truncate font-medium text-white">
                <span className="md:hidden">This website uses cookies in order to offer you the best experience.</span>
                <span className="hidden md:inline">This website uses cookies in order to offer you the best experience.</span>
              </p>
            </div>
            <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
              <a
                href="/#"
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
              <button
                type="button"
                className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon onClick={ dismissTopHeader } className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (<></>)
}
