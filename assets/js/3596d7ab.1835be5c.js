"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[761],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,u=c["".concat(s,".").concat(m)]||c[m]||h[m]||o;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5325:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},i="Data Model",l={unversionedId:"terrain/data_model",id:"terrain/data_model",title:"Data Model",description:"Glossary",source:"@site/docs/terrain/data_model.md",sourceDirName:"terrain",slug:"/terrain/data_model",permalink:"/docs/terrain/data_model",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Terrain",permalink:"/docs/category/terrain"},next:{title:"Resource System",permalink:"/docs/category/resource-system"}},s={},d=[{value:"Glossary",id:"glossary",level:3},{value:"Shards",id:"shards",level:2},{value:"Box",id:"box",level:3},{value:"ShardSeed",id:"shardseed",level:3},{value:"ShardDiff",id:"sharddiff",level:3},{value:"ShardShape",id:"shardshape",level:3},{value:"ShardPlacer",id:"shardplacer",level:3},{value:"ShardOccupancy",id:"shardoccupancy",level:3}],p={toc:d},c="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-model"},"Data Model"),(0,r.kt)("h3",{id:"glossary"},"Glossary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Shard"),": A 32x32x32 ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Tensor"},"tensor"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BlockId"),": An integer value that corresponds to a given block type, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"1: grass"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"2: dirt"),". All block types are defined\nin ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ill-inc/biomes-game/blob/main/src/shared/asset_defs/terrain.ts"},"terrain.json"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Seed"),": The initial state of the terrain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Voxel"),": A single block."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Subvoxel"),": A single block that's 1/8th the size of a full block. Each full block contains ",(0,r.kt)("inlineCode",{parentName:"li"},"8x8x8")," subvoxels.")),(0,r.kt)("h2",{id:"shards"},"Shards"),(0,r.kt)("p",null,"The entire voxel 3D world is split up into shards.\nThe shard data is stored as a buffer, and need to be decompressed to be read."),(0,r.kt)("p",null,"Each shard contains the following data."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Note: all positions, will the exception of ",(0,r.kt)("inlineCode",{parentName:"em"},"Box"),", are defined relative to the\nlowermost coordinate of the shard.")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"E.g. ",(0,r.kt)("inlineCode",{parentName:"em"},"[0, 0, 0]")," corresponds to the lowestmost coordinate, ",(0,r.kt)("inlineCode",{parentName:"em"},"[31, 31, 31]")," corresponds\nto the uppermost coordinate, and ",(0,r.kt)("inlineCode",{parentName:"em"},"[10, 16, 19]")," lies somewhere between the lowest and highest most coordinates."))),(0,r.kt)("h3",{id:"box"},"Box"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v0"),": lowermost coordinate of the shard."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v1"),": uppermost coordinate of the shard."),(0,r.kt)("h3",{id:"shardseed"},"ShardSeed"),(0,r.kt)("p",null,"The Biomes terrain has some initial state we refer to as the ",(0,r.kt)("inlineCode",{parentName:"p"},"seed"),". Each voxel in the world has some initial block type, which\nis stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"ShardSeed"),"s. ",(0,r.kt)("inlineCode",{parentName:"p"},"ShardSeed(x, y, z)")," stores the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockId")," of the initial block type at that location."),(0,r.kt)("p",null,"The seed shards are generated by scripts defined in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ill-inc/biomes-game/tree/main/src/galois/py/notebooks"},"galois"),"."),(0,r.kt)("h3",{id:"sharddiff"},"ShardDiff"),(0,r.kt)("p",null,"When a voxel's block type is modified and becomes different then the seed shard, we store this diff(erence) in the diff\nshards. Because most blocks will not be updated, these are sparse tensors - they store a maximum of ",(0,r.kt)("inlineCode",{parentName:"p"},"32x32x32")," entries.\nIn other words, we ",(0,r.kt)("em",{parentName:"p"},"only")," store the updates."),(0,r.kt)("p",null,"Like the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShardSeed"),", these shards define a mapping for position to ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockId"),"."),(0,r.kt)("h3",{id:"shardshape"},"ShardShape"),(0,r.kt)("p",null,"The terrain is mostly occupied by full blocks, perfect cubes. However, all voxels can be transformed into a different shape,\nfor example a stair, a fence, window, table, etcetera, using shaping tools. The shape shards store information about the current shape of each voxel."),(0,r.kt)("p",null,"The shape data is encoded as an integer and contains two things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ShapeId"),": e.g. stair. Shapes are defined in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ill-inc/biomes-game/blob/main/src/shared/asset_defs/gen/shapes.json"},"shapes.json"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"IsomorphismId"),": e.g. stair flipped vertically and facing north.")),(0,r.kt)("h3",{id:"shardplacer"},"ShardPlacer"),(0,r.kt)("p",null,"Each user has a ",(0,r.kt)("inlineCode",{parentName:"p"},"BiomesId")," which is their unique identifier. The placer shards correspond voxels with the user,\n",(0,r.kt)("inlineCode",{parentName:"p"},"BiomesId"),", that last modified it."),(0,r.kt)("h3",{id:"shardoccupancy"},"ShardOccupancy"),(0,r.kt)("p",null,"Placeables, like a boombox, TV, or flower, are not voxels however they still take up space. The occupancy tensor\nrecords the space occupied by non-voxel things so that other things are not placed in the space they occupy.\nEach position corresponds to the ",(0,r.kt)("inlineCode",{parentName:"p"},"BiomesId")," of the entity that occupied the position, if there is one."))}h.isMDXComponent=!0}}]);