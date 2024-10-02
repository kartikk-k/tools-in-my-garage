'use client'

import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export function JsonVisualizer() {
  const [jsonInput, setJsonInput] = useState('')
  const [jsonOutput, setJsonOutput] = useState('')
  const [error, setError] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(e.target.value)
    setError('')
  }

  const handleVisualize = () => {
    try {
      const parsedJson = JSON.parse(jsonInput)
      setJsonOutput(JSON.stringify(parsedJson, null, 2))
      setError('')
    } catch (err) {
      setError('Invalid JSON: ' + (err as Error).message)
      setJsonOutput('')
    }
  }

  return (
    <div className="flex flex-col md:flex-row h-full gap-4">
      <div className="flex-1 flex flex-col md:h-full h-1/2">
        <h1 className="font-semibold mb-4">Input</h1>
        <Textarea
          placeholder="Paste your JSON here..."
          value={jsonInput}
          onChange={handleInputChange}
          className="flex-1 font-mono text-sm resize-none bg-white scrollbar-minimal"
        />
        <Button onClick={handleVisualize} className="mt-2">
          Visualize
        </Button>
      </div>
      <div className='flex-1 flex flex-col md:h-full h-1/2'>
        <h1 className="font-semibold mb-4">Output</h1>
        <div className="flex-1 overflow-auto rounded-2xl">
          {/* {error ? (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ) : ( */}
          <div className='h-full scrollbar-minimal'>
            <SyntaxHighlighter
              language="json"
              style={vscDarkPlus}
              showLineNumbers={error ? false : true}
              customStyle={{
                margin: 0,
                padding: '1rem',
                height: '100%',
                fontSize: '0.875rem',
                scrollbarWidth: 'none'
              }}
            >
              {error ? 'Error: Invalid JSON' : jsonOutput}
            </SyntaxHighlighter>
          </div>
          {/* )} */}
        </div>
      </div>

    </div>
  )
}