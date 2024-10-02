'use client'

import Navbar from "@/components/main/Navbar";
import Tool from "@/components/main/Tool";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import v0Dev from '@/assets/images/v0-dev.png'
import { useEffect, useState } from "react";
import ToolsList from "@/components/ToolsList";
import Fuse from 'fuse.js';

export default function Home() {

  const [search, setSearch] = useState('')
  const [tools, setTools] = useState(ToolsList)

  useEffect(() => {
    filterTools()
  }, [search])

  const fuse = new Fuse(ToolsList, {
    keys: ['name', 'description', 'tags'],
    includeScore: true,
    threshold: 0.3,
  });

  const filterTools = () => {
    if (!search.trim()) return setTools(ToolsList)
    const results = fuse.search(search);
    const filteredTools = results.map(result => result.item);
    setTools(filteredTools);
  }

  return (
    <div>
      <Navbar />

      <div className="flex flex-col justify-center items-center px-4">

        <div className="mt-32 text-2xl sm:text-3xl flex flex-col items-center gap-1">
          <h1 className="font-medium">Tools In My Garage</h1>
          <h2 className="font-medium opacity-60">build tools just for you</h2>
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for tools..."
          className="outline-none bg-[#EEE] placeholder:text-black/50 text-black/70 focus:text-black font-medium rounded-full max-w-[600px] w-full h-[52px] px-5 mt-12"
        />

        <p className="flex items-center gap-1 mt-4 text-sm font-medium text-black/60">
          Create tool:

          <Link href="https://v0.dev/" target="_blank" className="flex items-center gap-1 text-black">
            v0.dev
            <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.17045 9.15909L0.130682 8.11364L6.43182 1.80114H1.60227L1.61364 0.363636H8.91477V7.67045H7.46591L7.47727 2.84091L1.17045 9.15909Z" fill="currentColor" />
            </svg>
          </Link>
        </p>

      </div>

      <div className="mt-24 bg-[#F2F2F2] py-10 h-full min-h-96">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Tool key={index} tool={tool} />
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
