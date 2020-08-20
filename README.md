# resizeble-hooks
Hooks to resize divs

Resize Height

```jsx
   const { element, resizer, mirror } = useResizableHeight(400)

  <div style={{ backgroundColor: "red", width: 200, height: 400 }}>
     <div ref={element} style={{ backgroundColor: "blue", width: 200, height: '50%', minHeight: 10, maxHeight: '50%', position: "relative" }}>
        <div ref={resizer} style={{ backgroundColor: "violet", width: 200, height: 5, cursor: "row-resize", bottom: 0, position: "absolute" }}></div>
     </div>
     <div ref={mirror} style={{ backgroundColor: "green", width: 200, minHeight: 10, height: '50%' }}></div>
  </div>
```


Resize Width

```jsx
   const { element, resizer, mirror } = useResizableWidth(800)

  <div style={{ backgroundColor: "red", width: 800, height: 400 }}>
     <div ref={element} style={{ backgroundColor: "blue", height: 400, width: '50%', minWidth: 10, maxWidth: '50%', position: "relative" }}>
        <div ref={resizer} style={{ backgroundColor: "violet", width: 5, height: 400, cursor: "row-resize", right: 0, position: "absolute" }}></div>
     </div>
     <div ref={mirror} style={{ backgroundColor: "green", height: 400, minWidth: 10, width: '50%' }}></div>
  </div>
```
