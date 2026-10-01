/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sparkles, Terminal, Code2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 selection:bg-indigo-500 selection:text-white">
      <div className="w-full max-w-md text-center space-y-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shadow-inner">
          <Sparkles className="w-6 h-6 animate-pulse" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Workspace Ready
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            Your empty project is initialized and ready. Tell me what you'd like to build next!
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-left space-y-2 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-2 text-slate-500 pb-1 border-b border-slate-800">
            <Terminal className="w-3.5 h-3.5" />
            <span>Environment Status</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Framework</span>
            <span className="text-emerald-400 font-medium">React 19 + Vite</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Styling</span>
            <span className="text-indigo-400 font-medium">Tailwind CSS v4</span>
          </div>
          <div className="flex items-center justify-between">
            <span>TypeScript</span>
            <span className="text-sky-400 font-medium">Strict & Enabled</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
          <Code2 className="w-3.5 h-3.5" />
          <span>Prompt with any app idea to begin</span>
        </div>
      </div>
    </div>
  );
}

