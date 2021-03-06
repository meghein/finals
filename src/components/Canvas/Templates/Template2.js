import React, { forwardRef }from 'react'
import { Stage, Layer, Rect } from 'react-konva'
import Clippings from '../Clippings'


export default forwardRef(function Template1(props, stageRef) {
  return (
    <Stage
      width={850}
      height={1100}
      ref={stageRef}
      onMouseDown={props.checkDeselect}
      onTouchStart={props.checkDeselect}
      onDrop={props.onDrop}
      onDragOver={props.onDragOver}
    >
      <Layer>
        <Rect
          x={275}
          y={15}
          width={300}
          height={100}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
          {...props.shapeProps}
        />
        
        <Rect
          x={275}
          y={175}
          width={300}
          height={500}
          fill={'white'}
          shadowColor={'gray'}
          stroke={'black'}
          strokeWidth={4}
          cornerRadius={10}
          {...props.shapeProps}
          />

        <Rect
          x={30}
          y={150}
          width={200}
          height={125}
          {...props.shapeProps}
        />

        <Rect
          x={30}
          y={290}
          width={200}
          height={125}
          {...props.shapeProps}
        />

        <Rect
          x={30}
          y={430}
          width={200}
          height={125}
          {...props.shapeProps}
        />

        <Rect
          x={30}
          y={570}
          width={200}
          height={125}
          {...props.shapeProps}
        />

        <Rect
          x={30}
          y={150}
          width={200}
          height={125}
          {...props.shapeProps}
        />

        <Rect
          x={620}
          y={290}
          width={200}
          height={125}
          {...props.shapeProps}
        />

        <Rect
          x={620}
          y={430}
          width={200}
          height={125}
          {...props.shapeProps}
        />

        <Rect
          x={620}
          y={570}
          width={200}
          height={125}
          {...props.shapeProps}
        />

        <Rect
          x={620}
          y={710}
          width={200}
          height={125}
          {...props.shapeProps}
        />

        <Rect
          x={620}
          y={850}
          width={200}
          height={125}
          {...props.shapeProps}
        />

        <Rect
          x={30}
          y={710}
          width={200}
          height={125}
          {...props.shapeProps}
        />

        <Rect
          x={30}
          y={850}
          width={200}
          height={125}
          {...props.shapeProps}
        />

        <Rect
          x={620}
          y={150}
          width={200}
          height={125}
          {...props.shapeProps}
        />

        <Rect
          x={275}
          y={740}
          width={300}
          height={200}
          {...props.shapeProps}
        />

        <Rect
          x={275}
          y={740}
          width={300}
          height={200}
          {...props.shapeProps}
        />

        <Rect
          x={275}
          y={990}
          width={135}
          height={100}
          {...props.shapeProps}
        />

        <Rect
          x={455}
          y={990}
          width={135}
          height={100}
          {...props.shapeProps}
        />
        <Clippings
          canvasItems={props.canvasItems}
          setCanvasItems={props.setCanvasItems}
          targetShape={props.targetShape}
          setTargetShape={props.setTargetShape}
        />
      </Layer>
    </Stage>
  )
})
