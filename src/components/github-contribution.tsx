"use client"

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubContribution() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">
            GitHub Contributions
        </span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
        <GitHubCalendar username="MohamedBoukthir" fontSize={16} blockRadius={2} year={new Date().getFullYear()}/>
    </div>
  );
}

