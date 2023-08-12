import React from 'react';
import { classNames } from '../utils/conditionalClass';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { INavigation, ITeam } from '../interfaces/navigationInterface';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  navigation: INavigation[];
  setCurrent: React.Dispatch<React.SetStateAction<INavigation>>;
}

const Sidebar: React.FC<Props> = ({ navigation, setCurrent }) => {
  const location = useLocation();
  const page = location.pathname;
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1039px-Vitejs-logo.svg.png"
            alt="Your Company"
          />
          <p className="text-white font-bold text-2xl ml-2">DedicatedFew</p>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      onClick={() => setCurrent(item)}
                      className={classNames(
                        item.href === page
                          ? 'bg-indigo-700 text-white'
                          : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.href === page
                            ? 'text-white'
                            : 'text-indigo-200 group-hover:text-white',
                          'h-6 w-6 shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {/* <li>
              <div className="text-xs font-semibold leading-6 text-indigo-200">
                Your teams
              </div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {teams.map((team) => (
                  <li key={team.name}>
                    <Link
                      to={team.href}
                      className={classNames(
                        team.current
                          ? 'bg-indigo-700 text-white'
                          : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                        {team.initial}
                      </span>
                      <span className="truncate">{team.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
