"use-client";
import { React, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function dropdown({
  title = "Dropdown",
  
  drawertitles=[],
  subitems = [],
  subtitles = [],

}) {
  
  {
    return (
      <>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  bg-transparent px-3 py-2 text-sm font-semibold text-white hover:text-deep-blue ">
              {title}
              <ChevronDownIcon
                className="-mr-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute left-1/8 mt-[-0.25rem] w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                
              {drawertitles.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "relative block px-4 py-2 text-sm"
                      )}
                    >
                      {item}

                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700">
                          <ChevronRightIcon
                            className="h-5 w-5 text-gray-400 my-1"
                            aria-hidden="true"
                          />
                          
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          {/* SubDropdownmenustarts */}
                          <Menu.Items className="absolute left-full w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none top-[-2px]">
                            <div className="py-1">
                              {subitems.map((item, index) => (
                                <Menu.Item key={index}>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      {item}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                        
                    </div>
                  )}
                </Menu.Item>
              ))}
              </div>
              {/* subtitles starts here */}
              <div className="py-1"> 
                     
                     {subtitles.map((item, index) => (
                       <Menu.Item key={index}>
                         {({ active }) => (
                           <a
                             href="#"
                             className={classNames(
                               active
                                 ? "bg-gray-100 text-gray-900"
                                 : "text-gray-700",
                               "block px-4 py-2 text-sm"
                             )}
                           >
                             {item}
                           </a>
                         )}
                       </Menu.Item>
                     ))}
                   </div>
                {/* subtitles ends here */}  
            </Menu.Items>
           
          </Transition>
          
        </Menu>
      </>
    );
  }
}
export default dropdown;
