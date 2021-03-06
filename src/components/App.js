import React, {useState, useEffect } from 'react';
import './App.scss';

import useDragandDrop from '../hooks/useDragAndDrop';
import useStageLoader from '../hooks/useStageLoader';
import useStageColours from '../hooks/useStageColours';

import NavBar from './Home/NavBar';
import Splash from './Home/Splash';
import Canvas from './Canvas/Canvas';
import Left from './Left/Left';
import Right from './Right/Right';
import NERv05 from './Chatbot/NERv05';

export default function App() {
  
  const [clippings, setClippings] = useState(['This textually active sheet is absolutely the sheet.']);
  const [newImport, setNewImport] = useState('');

  const [canvasItems, setCanvasItems] = useState([]);

  const [currentStage, setCurrentStage] = useState([]);

  const [authenticated, setAuthenticated] = useState(false)

  const [currentUser, setCurrentUser] = useState("");

  const [initialLoad, setInitialLoad] = useState(true)

  const [targetShape, setTargetShape] = useState(null);


  const {
    stageRef,
    onDragStart,
    onDragOver,
    onDrop,
  } = useDragandDrop(canvasItems, setCanvasItems);

  const {
    loadTemplate,
    addImage,
    addText,
  } = useStageLoader(canvasItems, setCanvasItems)

  const {
    canvasColour,
    setCanvasColour,
    boxColour,
    setBoxColour,
  } = useStageColours()

  useEffect(() => {
    const tempClippings = [...clippings];
    tempClippings.push(newImport);
    setClippings(tempClippings);
  }, [newImport]);

  useEffect(() => {
    const NERv05 = new window.Image()
    NERv05.src = "/images/NERv05HalfSizeColor.png"

    const tess = new window.Image()
    tess.src = "/images/TESSSmall.png"

    const tempClippings = [...clippings];
    tempClippings.push({image: NERv05}, {image: tess});
    setClippings(tempClippings);
  }, [])

  
  return (
    <div className="App">
      {initialLoad &&
        <Splash
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          setInitialLoad={setInitialLoad}
        />
      }
      {!initialLoad && (
      <><NavBar 
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setInitialLoad={setInitialLoad}
      />
        <NERv05 />
      <div className="main">
        <Left
          newImport={newImport}
          setNewImport={setNewImport}
          clippings={clippings}
          canvasItems={canvasItems}
          setCanvasItems={setCanvasItems}
          loadTemplate={loadTemplate}
          setCurrentStage={setCurrentStage}
          setClippings={setClippings}
          setCanvasColour={setCanvasColour}
          canvasColour={canvasColour}
          setBoxColour={setBoxColour}
          targetShape={targetShape}
          setTargetShape={setTargetShape}
        />
        <Canvas
          stageRef={stageRef}
          onDrop={onDrop}
          onDragOver={onDragOver}
          currentStage={currentStage}
          setCurrentStage={setCurrentStage}
          loadTemplate={loadTemplate}
          addImage={addImage}
          canvasItems={canvasItems}
          setCanvasItems={setCanvasItems}
          canvasColour={canvasColour}
          boxColour={boxColour}
          targetShape={targetShape}
          setTargetShape={setTargetShape}
        />
        <Right 
          clippings={clippings}
          addImage={addImage}
          addText={addText}
          onDragStart={onDragStart}
        />
      </div></>)}
    </div>
  )
};