import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/outline/index.js";
import clsx from "clsx";
import { Link } from "@inertiajs/react";
import axios from "axios";
import { debounce } from 'lodash';

export default function SearchChatBar() {
    const [query, setQuery] = useState('')
    const [open, setOpen] = useState(false)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const searchUser = useCallback(debounce(async (query) => {
        await axios('/api/users/search', {
            method: 'GET',
            params: {
                q: query
            }
        }).then((res) => {
            setUsers(res?.data?.data)
            setLoading(false)
        })
    }, 500), [])

    useEffect(() => {
        if (query !== '') {
            setLoading(true)
            searchUser(query)
        }
    }, [query])

    return (
        <>
            <div className="px-2.5">
                <label htmlFor="search" className="sr-only">
                    Search or start a new chat
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" aria-hidden="true">
                        <svg className="w-3 h-3 mr-3 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
                        </svg>
                    </div>
                    <button type="button" onClick={() => setOpen(true)} className="block w-full h-full px-4 py-2 text-xs text-gray-400 bg-gray-800 border border-gray-700 rounded-md focus:ring-gray-700 focus:border-gray-700 pl-9">
                        Search or start a new chat
                    </button>
                </div>
            </div>
            <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')}>
                <Dialog as="div" className="fixed inset-0 z-10 p-4 overflow-y-auto sm:p-6 md:p-20" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-25"/>
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Combobox as="div" className="max-w-2xl mx-auto overflow-hidden transition-all transform bg-white divide-y divide-gray-500 shadow-2xl divide-opacity-10 rounded-xl bg-opacity-80 ring-1 ring-black ring-opacity-5 backdrop-blur backdrop-filter">
                            <div className="relative">
                                {
                                    loading ? (
                                        <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none left-1" aria-hidden="true">
                                            <svg className="w-5 h-5 text-gray-400 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4}/>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                            </svg>
                                        </div>
                                    ) : (
                                        <MagnifyingGlassIcon className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-900 text-opacity-40" aria-hidden="true"/>
                                    )
                                }
                                <Combobox.Input
                                    className="w-full h-12 pr-4 text-gray-900 placeholder-gray-500 bg-transparent border-0 pl-11 focus:ring-0 sm:text-sm"
                                    placeholder="Search or start a new chat ..."
                                    autoComplete={"off"}
                                    onChange={(event) => setQuery(event.target.value)}
                                />
                            </div>

                            {(query === '' || users.length > 0) && (
                                <Combobox.Options static className="overflow-y-auto divide-y divide-gray-500 max-h-80 scroll-py-2 divide-opacity-10">
                                    <li className="p-0">
                                        <ul className="text-sm text-gray-700">
                                            {users.map((user) => (
                                                <Combobox.Option
                                                    key={user.id}
                                                    value={user}
                                                    className={({active}) => clsx('flex cursor-default select-none items-center rounded-md px-3 py-2', active && 'bg-gray-900 bg-opacity-5 text-gray-900')}
                                                >
                                                    {({active}) => (
                                                        <>
                                                            <UserCircleIcon className={clsx('h-6 w-6 flex-none text-gray-900 text-opacity-40', active && 'text-opacity-100')} aria-hidden="true"/>
                                                            <Link onClick={() => {
                                                                setQuery('')
                                                                setUsers([])
                                                                setOpen(false)
                                                            }}
                                                                  href={route('chat.show', user.uuid)}
                                                                  className="flex-auto ml-3 truncate">
                                                                {user.name}
                                                            </Link>
                                                        </>
                                                    )}
                                                </Combobox.Option>
                                            ))}
                                        </ul>
                                    </li>
                                </Combobox.Options>
                            )}

                            {query !== '' && users.length === 0 && !loading && (
                                <div className="px-6 text-center py-14 sm:px-14">
                                    <UserCircleIcon className="w-6 h-6 mx-auto text-gray-900 text-opacity-40" aria-hidden="true"/>
                                    <p className="mt-4 text-sm text-gray-900">
                                        We couldn't find any users matching &quot;{query}&quot;
                                    </p>
                                </div>
                            )}
                        </Combobox>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>
        </>
    )
}
