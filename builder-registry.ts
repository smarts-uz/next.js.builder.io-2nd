import { Builder } from "@builder.io/react";
import dynamic from "next/dynamic";


Builder.registerComponent(
  dynamic(() => import("./components/Counter/Counter/Counter")),
  {
    name: "Counter",
    inputs: [
      {
        name: "initialCount",
        type: "number",
      },
    ],
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Gallery/ImageSlider")),
  {
    name: "ImageSlider",
  
  }
);

Builder.registerComponent(
  dynamic(() => import("./components/Album/ReactAlbum")),
  {
    name: "Gallery",
  
  }
);








