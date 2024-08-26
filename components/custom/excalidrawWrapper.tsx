"use client"
import React from "react"
import {
  Excalidraw,
  MainMenu,
  WelcomeScreen,
  serializeAsJSON,
} from "@excalidraw/excalidraw"
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types"
import { AppState, BinaryFiles } from "@excalidraw/excalidraw/types/types"

interface ExcalidrawWrapperProps {
  problemId: string
}

const ExcalidrawWrapper: React.FC<ExcalidrawWrapperProps> = ({ problemId }) => {
  const storageKey = `excalidraw-${problemId}`

  const onChange = (
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    files: BinaryFiles
  ) => {
    const content = serializeAsJSON(elements, appState, files, "local")
    localStorage.setItem(storageKey, content)
  }

  const retrieveInitialData = () => {
    const content = localStorage.getItem(storageKey)
    if (content !== null) {
      return JSON.parse(content)
    }
    return null
  }

  return (
    <div className="h-[calc(100vh-3.5rem)] z-50">
      <Excalidraw onChange={onChange} initialData={retrieveInitialData()}>
        <WelcomeScreen>
          <WelcomeScreen.Hints.HelpHint />
          <WelcomeScreen.Hints.MenuHint />
          <WelcomeScreen.Hints.ToolbarHint />
        </WelcomeScreen>
        <MainMenu>
          <MainMenu.DefaultItems.LoadScene />
          <MainMenu.DefaultItems.SaveToActiveFile />
          <MainMenu.DefaultItems.Export />
          <MainMenu.DefaultItems.SaveAsImage />
          <MainMenu.DefaultItems.ToggleTheme />
          <MainMenu.DefaultItems.Help />
          <MainMenu.DefaultItems.ClearCanvas />
          <MainMenu.Separator />
          <MainMenu.Separator />
          <MainMenu.DefaultItems.ChangeCanvasBackground />
        </MainMenu>
      </Excalidraw>
    </div>
  )
}

export default ExcalidrawWrapper
