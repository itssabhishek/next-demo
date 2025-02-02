"use client";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 md:px-6 relative">
      <div className="flex items-center gap-4 w-full max-w-[368px]">
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2">
          <img src="/images/logo.png" alt="logo" />
        </div>
      </div>

      <div className="hidden md:block max-w-2xl mx-4">
        <SearchBar />
      </div>

      <div className="flex items-center gap-4 max-md:hidden">
        <div className="flex items-center gap-2">
          <span>
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.143 2.937C22.308 3.307 21.411 3.557 20.468 3.67C21.43 3.094 22.168 2.18 22.516 1.092C21.616 1.626 20.619 2.014 19.558 2.222C18.708 1.318 17.498 0.751999 16.158 0.751999C13.586 0.751999 11.5 2.838 11.5 5.412C11.5 5.776 11.542 6.13 11.62 6.472C7.74701 6.277 4.31601 4.422 2.01801 1.604C1.61801 2.294 1.38801 3.094 1.38801 3.946C1.38801 5.562 2.21101 6.989 3.46001 7.824C2.69601 7.799 1.97801 7.59 1.35001 7.241V7.301C1.35001 9.558 2.95501 11.441 5.08701 11.869C4.69501 11.975 4.28401 12.031 3.86001 12.031C3.56001 12.031 3.26701 12.003 2.98301 11.949C3.57601 13.799 5.29601 15.147 7.33501 15.183C5.74001 16.433 3.73101 17.178 1.54901 17.178C1.17301 17.178 0.802012 17.156 0.437012 17.113C2.49901 18.436 4.94701 19.206 7.57701 19.206C16.147 19.206 20.832 12.108 20.832 5.952C20.832 5.752 20.827 5.55 20.818 5.35C21.728 4.692 22.518 3.873 23.141 2.94L23.143 2.937Z"
                fill="black"
              />
            </svg>
          </span>
          <span>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.5 12C24.5 18.6274 19.1274 24 12.5 24C5.87258 24 0.5 18.6274 0.5 12C0.5 5.37258 5.87258 0 12.5 0C19.1274 0 24.5 5.37258 24.5 12ZM14.0119 7.80289L4.4818 11.6616C2.80482 12.3047 3.78554 12.9077 3.78554 12.9077C3.78554 12.9077 5.21712 13.39 6.44407 13.7516C7.67103 14.1134 8.32556 13.7114 8.32556 13.7114L14.0926 9.89296C16.1377 8.52619 15.6469 9.65166 15.1561 10.134C14.0928 11.179 12.3339 12.827 10.8614 14.1535C10.207 14.7162 10.5342 15.1986 10.8205 15.4397C11.653 16.132 13.6135 17.3906 14.5042 17.9627C14.7513 18.1213 14.9161 18.2272 14.9516 18.2533C15.1561 18.4141 16.3 19.1376 16.9966 18.9768C17.6931 18.8161 17.775 17.8916 17.775 17.8916L18.7974 11.5811C18.8876 10.9946 18.9777 10.4202 19.0618 9.88404C19.2832 8.47294 19.4631 7.32636 19.4928 6.91861C19.6155 5.55209 18.143 6.11476 18.143 6.11476C18.143 6.11476 14.9526 7.40096 14.0119 7.80289Z"
                fill="black"
              />
            </svg>
          </span>
          <span className="p-1">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 18.5625V19.8212C8.75006 20.3139 8.65305 20.8017 8.46453 21.2568C8.276 21.7119 7.99964 22.1255 7.65125 22.4737L6.875 23.25H18.125L17.3487 22.4737C17.0004 22.1255 16.724 21.7119 16.5355 21.2568C16.3469 20.8017 16.2499 20.3139 16.25 19.8212V18.5625M23.75 3.5625V15.75C23.75 16.4959 23.4537 17.2113 22.9262 17.7387C22.3988 18.2662 21.6834 18.5625 20.9375 18.5625H4.0625C3.31658 18.5625 2.60121 18.2662 2.07376 17.7387C1.54632 17.2113 1.25 16.4959 1.25 15.75V3.5625M23.75 3.5625C23.75 2.81658 23.4537 2.10121 22.9262 1.57376C22.3988 1.04632 21.6834 0.75 20.9375 0.75H4.0625C3.31658 0.75 2.60121 1.04632 2.07376 1.57376C1.54632 2.10121 1.25 2.81658 1.25 3.5625M23.75 3.5625V12C23.75 12.7459 23.4537 13.4613 22.9262 13.9887C22.3988 14.5162 21.6834 14.8125 20.9375 14.8125H4.0625C3.31658 14.8125 2.60121 14.5162 2.07376 13.9887C1.54632 13.4613 1.25 12.7459 1.25 12V3.5625"
                stroke="#6A6A6A"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <Link
          href="/start"
          className="px-6 py-3 bg-black text-white rounded cursor-pointer hover:bg-gray-800 text-nowrap"
        >
          Start Buying
        </Link>
      </div>
    </nav>
  );
}