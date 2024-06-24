import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
 
 
const Separator = React.forwardRef(
  (
     className, orientation = "horizontal", decorative = true,
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={
        "shrink-0 bg-border" + 
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"
     }
    /> 
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName
 
export { Separator }