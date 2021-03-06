// import { useState } from 'react';
import Konva from 'konva';

export default function useStageLoader(canvasItems, setCanvasItems) {
  // const [canvasItems, setCanvasItems] = useState([])
  
  function loadTemplate(template, layer) {
    const newStage = Konva.Node.create(template, 'canvas');
    newStage.add(layer);
    return newStage
  }

  function addImage(source) {
    const tempState = [...canvasItems];
    tempState.push({
        x: window.innerWidth * Math.random(),
        y: window.innerHeight * Math.random(),
        src: source
      });
    setCanvasItems(tempState)
  };

  function addText(text, fontSize, colour, activeFontFamily,  align) {
    const tempState = [...canvasItems];
    tempState.push({
        // x: window.innerWidth * Math.random(),
        // y: window.innerHeight * Math.random(),
        text,
        fontSize,
        colour,
        activeFontFamily,
        align,
      });
    setCanvasItems(tempState)
    // add if textbox state is true, set to false
    console.log(canvasItems)
  };

  function handleUndo() {
    let historyStep = 1;
    if (historyStep === 0) {
      return
    }
    historyStep -= 1;
    const tempState = [...canvasItems];
    tempState.pop()
    setCanvasItems(tempState)
  };
    
  return {
    canvasItems,
    setCanvasItems,
    loadTemplate,
    addImage,
    addText,
    handleUndo
  }
}
