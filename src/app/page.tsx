'use client';

import {Transition} from '@headlessui/react';
import {usePage} from './usePage';
import Link from 'next/link';

export default function Home() {
  const {
    name,
    age,
    gender,
    country,
    inputRef,
    isLoading,
    handleSubmit,
    cleanUp,
    setName,
  } = usePage();

  return (
    <main className="flex flex-col items-center p-24 space-y-8 space-y-8 bg-gradient-to-r from-blue-900 via-black to-blue-900 min-h-screen">
      <div>
        <h1 className="text-3xl font-semibold text-center">
          Welcome Onboard! Hy-Vee Assessment - 1
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          ref={inputRef}
          placeholder="Enter name"
          required
          className="text-black w-72 p-3 border border-gray-300 focus:border-blue-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out"
        />
        <div className="space-x-6">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out">
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
          <button
            onClick={cleanUp}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300 ease-in-out">
            {'Clear'}
          </button>
        </div>
      </form>

      <Transition
        show={age > 0}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        {ref => (
          <div ref={ref} className="flex flex-col items-center space-y-2">
            <p className="text-lg">Age: <span className='text-sky-200 font-semibold'>{age}</span></p>
            <p className="text-lg">Gender: <span className='text-sky-200 font-semibold'>{gender}</span></p>
            <p className="text-lg">Country: <span className='text-sky-200 font-semibold'>{country}</span></p>
          </div>
        )}
      </Transition>

      <footer>
        <p className="text-sm">
          Please refer
          <span className="text-fuchsia-900 hover:text-sky-200">
            <Link href="https://github.com/nishanthr18/hy-vee-test/edit/main/README.md" target="_blank">
              {' '}
              README.md{' '}
            </Link>
          </span>
          for tech stack info, Thank you for the opportunity.
        </p>
      </footer>
    </main>
  );
}
