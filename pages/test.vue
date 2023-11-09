<template>
  <!-- <div class="mx-auto px-4 grid bg-amber-500 justify-center"> -->
    <div class="container bg-pink-100 p-10">

      <!-- Columns : columns-{count} -->
      <p class="font-bold mt-4">Columns : columnss-{count}</p>
      <div class="columns-4 gap-8 bg-pink-400">
        <img
          class="w-full aspect-video p-4 bg-teal-400"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
        />
        <img
          class="w-full aspect-square p-4 bg-sky-400"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
        />
        <img
          class="w-full aspect-video p-4 bg-indigo-400"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
        />
        <img
          class="w-full aspect-square p-4 bg-slate-400"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
        />
        <img
          class="w-full aspect-video p-4 bg-emerald-400"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
        />
        <img
          class="w-full aspect-square p-4 bg-orange-400"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
        />
        <img
          class="w-full aspect-video p-4 bg-amber-400"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
        />
        <img
          class="w-full aspect-square p-4 bg-lime-400"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
        />
        <img
          class="w-full aspect-video p-4 bg-cyan-400"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
        />
        <img
          class="w-full aspect-square p-4 bg-purple-400"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
        />
      </div>

      <!-- Break After : break-after-column -->
      <p class="font-bold mt-4">Break After : break-after-column</p>
      <div class="columns-2 gap-2 my-2 p-2 rounded-lg bg-green-200">
        <p class="bg-lime-400 p-2">Well, let me tell you something, ...</p>
        <p class="break-after-column bg-purple-400 p-2">Sure, go ahead, laugh...</p>
        <p class="bg-sky-400 p-2">Maybe we can live without...</p>
        <p class="bg-emerald-400 p-2">Look. If you think this is...</p>
      </div>

      <!-- Break Before : break-before-column -->
      <p class="font-bold mt-4">Break Before : break-before-column</p>
      <div class="columns-2 gap-2 my-4 p-2 rounded-lg bg-teal-200">
        <p class="bg-violet-400 p-2">Well, let me tell you something, ...</p>
        <p class="break-before-column bg-red-400 p-2">Sure, go ahead, laugh...</p>
        <p class="bg-amber-400 p-2">Maybe we can live without...</p>
        <p class="bg-teal-400">Look. If you think this is...</p>
      </div>

      <!-- Break Inside : break-inside-avoid-column -->
      <p class="font-bold mt-4">Break Inside : break-inside-avoid-column</p>
      <div class="columns-2 gap-2 my-4 p-2 rounded-lg bg-teal-200">
        <p class="bg-fuchsia-700 p-2">Well, let me tell you something, ...</p>
        <p class="bg-pink-400 break-inside-avoid-column p-2">Sure, go ahead, laugh...</p>
        <p class="bg-rose-500 p-2">Maybe we can live without...</p>
        <p class="bg-yellow-400 p-2">Look. If you think this is...</p>
      </div>

      <!-- Box Decoration Break -->
      <div class="columns-2">
        <p class="font-bold mt-4">Box Decoration Break : box-decoration-slice</p>
        <div class="block">
          <span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 text-5xl leading-snug">
            Hello<br />
            World
          </span>
        </div>
        <p class="font-bold mt-4">Box Decoration Break : box-decoration-clone</p>
        <div class="block">
          <span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 text-5xl leading-snug">
            Hello<br />
            World
          </span>
        </div>
      </div>

      <!-- Box Sizing -->
      <p class="font-bold mt-4">Box Sizing : box-border</p>
      <div class="box-border border-gray-200 h-80 w-80 p-8 border-8 my-2">
        <div class="w-full h-full bg-gray-400"></div>
      </div>
      <p class="font-bold mt-4">Box Sizing : box-content</p>
      <div class="box-content border-stone-200 h-64 w-64 p-8 border-8 my-2">
        <div class="w-full h-full bg-stone-400"></div>
      </div>

      <!-- Display ~ Block & Inline : display: inline -->
      <div class="p-4">
        <p class="font-bold mt-4">Block & Inline : display: inline</p>
        When controlling the flow of text, using the CSS property
        <span class="inline bg-zinc-200 font-semibold">display: inline</span>
        will cause the text inside the element to wrap normally.

        <p class="font-bold mt-4">Block & Inline : display: inline-block</p>
        While using the property <span class="inline-block bg-zinc-200 font-semibold">display: inline-block</span>
        will wrap the element to prevent the text inside from extending beyond its parent.

        <p class="font-bold mt-4">Block & Inline : display: block</p>
        Lastly, using the property <span class="block bg-zinc-200 font-semibold">display: block</span>
        will put the element on its own line and fill its parent.
      </div>

      <!-- Display : flow-root -->
      <p class="font-bold">Display : flow-root</p>
      <div class="">
        <div class="flow-root ...">
          <div class="my-2 bg-lime-200">
            Well, let me tell you something, funny boy.
            Y'know that little stamp, the one that says "New York Public Library"?
            Well that may not mean anything to you, but that means a lot to me.
            One whole hell of a lot.
          </div>
        </div>
        <div class="flow-root ...">
          <div class="my-2 bg-lime-200">
            Sure, go ahead, laugh if you want to.
            I've seen your type before: Flashy, making the scene, flaunting convention.
            Yeah, I know what you're thinking.
            What's this guy making such a big stink about old library books?
            Well, let me give you a hint, junior.
          </div>
        </div>
      </div>

      <!-- Display : flex -->
      <p class="font-bold mt-4">Display : flex</p>
      <div class="flex items-center justify-center w-full bg-stone-700 p-4">
        <img src="~/assets/profile/my_pic.jpg" class="w-16 rounded-full mr-2">
        <div class="text-slate-200">
          <strong>Andrew Alfred</strong>
          <span class="block">Technical advisor</span>
        </div>
      </div>

      <!-- Display : inline-flex -->
      <p class="font-bold mt-4">Display : inline-flex</p>
      <p>
        Today I spent most of the day researching ways to take advantage of the fact that bottles can be returned for 10 cents in Michigan, but only 5 cents here.
        <span class="inline-flex items-baseline">
          <img src="~/assets/profile/my_pic.jpg" alt="" class="self-center w-5 h-5 rounded-full mx-1" />
          <span>Kramer</span>
        </span> 
        keeps telling me there is no way to make it work, that he has run the numbers on every possible approach, but I just have to believe there's a way to make it work, there's simply too much opportunity here.
      </p>

      <!-- Display : grid -->
      <p class="font-bold mt-4">Display : grid</p>
      <div class="grid gap-2 grid-cols-3 grid-rows-3 bg-yellow-200 p-2 my-2">
        <div class="p-2 h-14 rounded-md bg-yellow-400">
        </div>
        <div class="p-2 h-14 rounded-md bg-yellow-400">
        </div>
        <div class="p-2 h-14 rounded-md bg-yellow-400">
        </div>
        <div class="p-2 h-14 rounded-md bg-yellow-400">
        </div>
        <div class="p-2 h-14 rounded-md bg-yellow-400">
        </div>
        <div class="p-2 h-14 rounded-md bg-yellow-400">
        </div>
        <div class="p-2 h-14 rounded-md bg-yellow-400">
        </div>
        <div class="p-2 h-14 rounded-md bg-yellow-400">
        </div>
        <div class="p-2 h-14 rounded-md bg-yellow-400">
        </div>
      </div>

      <!-- Display : inline-gird -->
      <p class="font-bold mt-4">Display : inline-gird</p>
      <div class="grid gap-2 grid-cols-2 bg-indigo-200 w-[400px] p-2 my-2">
        <span class="inline-grid grid-cols-3 gap-2 block bg-indigo-300 p-2 rounded-lg">
          <span class="p-2 bg-indigo-400 flex justify-center rounded-lg">01</span>
          <span class="p-2 bg-indigo-400 flex justify-center rounded-lg">02</span>
          <span class="p-2 bg-indigo-400 flex justify-center rounded-lg">03</span>
          <span class="p-2 bg-indigo-400 flex justify-center rounded-lg">04</span>
          <span class="p-2 bg-indigo-400 flex justify-center rounded-lg">05</span>
          <span class="p-2 bg-indigo-400 flex justify-center rounded-lg">06</span>
        </span>

        <span class="inline-grid grid-cols-3 gap-2 block bg-indigo-300 p-2 rounded-lg">
          <span class="p-2 bg-indigo-400 flex justify-center rounded-lg">01</span>
          <span class="p-2 bg-indigo-400 flex justify-center rounded-lg">02</span>
          <span class="p-2 bg-indigo-400 flex justify-center rounded-lg">03</span>
          <span class="p-2 bg-indigo-400 flex justify-center rounded-lg">04</span>
          <span class="p-2 bg-indigo-400 flex justify-center rounded-lg">05</span>
          <span class="p-2 bg-indigo-400 flex justify-center rounded-lg">06</span>
        </span>
      </div>

      <!-- Display : contents -->
      <p class="font-bold mt-4">Display : contents</p>
      <div class="flex p-2 bg-sky-200 my-2">
        <div class="flex-1 mx-1 p-4 flex justify-center bg-sky-400">01</div>
        <div class="contents">
          <div class="flex-1 mx-1 p-4 flex justify-center bg-sky-400">02</div>
          <div class="flex-1 mx-1 p-4 flex justify-center bg-sky-400">03</div>
        </div>
        <div class="flex-1 mx-1 p-4 flex justify-center bg-sky-400">04</div>
      </div>

      <!-- Display : table -->
      <p class="font-bold mt-4">Display : table</p>
      <div class="table w-full rounded-lg bg-white my-2">
        <div class="table-header-group">
          <div class="table-row">
            <div class="table-cell text-left px-8 py-4">Song</div>
            <div class="table-cell text-left px-8 py-4">Artist</div>
            <div class="table-cell text-left px-8 py-4">Year</div>
          </div>
        </div>
        <div class="table-row-group bg-stone-100">
          <div class="table-row">
            <div class="table-cell px-8 py-4 border-t border-stone-300">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
            <div class="table-cell px-8 py-4 border-t border-stone-300">Malcolm Lockyer</div>
            <div class="table-cell px-8 py-4 border-t border-stone-300">1961</div>
          </div>
          <div class="table-row">
            <div class="table-cell px-8 py-4 border-t border-stone-300">Witchy Woman</div>
            <div class="table-cell px-8 py-4 border-t border-stone-300">The Eagles</div>
            <div class="table-cell px-8 py-4 border-t border-stone-300">1972</div>
          </div>
          <div class="table-row">
            <div class="table-cell px-8 py-4 border-t border-stone-300">Shining Star</div>
            <div class="table-cell px-8 py-4 border-t border-stone-300">Earth, Wind, and Fire</div>
            <div class="table-cell px-8 py-4 border-t border-stone-300">1975</div>
          </div>
        </div>
      </div>

      <!-- Display : hidden -->
      <p class="font-bold mt-4">Display : hidden</p>
      <div class="flex p-2 my-2 h-14 w-full bg-lime-200">
        <div class="hidden ...">01</div>
        <div class=" bg-lime-400 p-2 mx-1 rounded-md">02</div>
        <div class="bg-lime-400 p-2 mx-1 rounded-md">03</div>
      </div>

      <!-- Float : float-right -->
      <p class="font-bold mt-4">Float : float-right</p>
      <div class="my-2 p-4 rounded-md bg-slate-200">
        <img class="float-right rounded-md ml-4 w-[200px]" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80">
        <p class="text-justify">
          Maybe we can live without libraries, people like you and me.
          Maybe. Sure, we're too old to change the world, but what about that kid,sitting down, opening a book, right now,
          in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          Look. If you think this is about overdue fines and missing books, you'd better think again.
          This is about that kid's right to read a book without getting his mind warped!
          Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
          Maybe we can live without libraries, people like you and me.
          Maybe. Sure, we're too old to change the world,
          but what about that kid, sitting down, opening a book, right now, in a branch at the local library
          and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers?
          Doesn't HE deserve better? Look.
          If you think this is about overdue fines and missing books, you'd better think again.
          This is about that kid's right to read a book without getting his mind warped!
          Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
        </p>
      </div>

      <!-- Float : float-left -->
      <p class="font-bold">Float : float-left</p>
      <div class="my-2 p-4 rounded-md bg-sky-200">
        <img class="float-left rounded-md w-[200px] mr-4" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80">
        <p>
          Maybe we can live without libraries, people like you and me.
          Maybe. Sure, we're too old to change the world, but what about that kid,sitting down, opening a book, right now,
          in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          Look. If you think this is about overdue fines and missing books, you'd better think again.
          This is about that kid's right to read a book without getting his mind warped!
          Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
          Maybe we can live without libraries, people like you and me.
          Maybe. Sure, we're too old to change the world,
          but what about that kid, sitting down, opening a book, right now, in a branch at the local library
          and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers?
          Doesn't HE deserve better? Look.
          If you think this is about overdue fines and missing books, you'd better think again.
          This is about that kid's right to read a book without getting his mind warped!
          Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
        </p>
      </div>

      <!-- Float : float-none -->
      <p class="font-bold">Float : float-none</p>
      <div class="my-2 p-4 rounded-md bg-stone-200">
        <img
          class="float-none rounded-md aspect-video mb-4 w-[200px]"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
        >
        <p class="text-justify">
          Maybe we can live without libraries, people like you and me.
          Maybe. Sure, we're too old to change the world, but what about that kid,sitting down, opening a book, right now,
          in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          Look. If you think this is about overdue fines and missing books, you'd better think again.
          This is about that kid's right to read a book without getting his mind warped!
          Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
        </p>
      </div>

      <!-- Clear : clear-left -->
      <p class="font-bold">Clear : clear-left</p>
      <div class="my-2 p-4 rounded-md bg-amber-200">
        <img class="float-left rounded-md aspect-video mb-4 w-[200px]" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80">
        <img class="float-right rounded-md aspect-video ml-4 w-[300px]" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80">
        <p class="clear-left text-justify">
          Maybe we can live without libraries, people like you and me.
          Maybe. Sure, we're too old to change the world,
          but what about that kid, sitting down, opening a book, right now,
          in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers?
          Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again.
          This is about that kid's right to read a book without getting his mind warped!
          Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks.
          You and your good-time buddies.
        </p>
      </div>

      <!-- Clear : clear-both -->
      <p class="font-bold">Clear : clear-both</p>
      <div class="my-2 p-4 rounded-md bg-emerald-200">
        <img class="float-left rounded-md aspect-video mb-4 w-[200px]" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80">
        <img class="float-right rounded-md aspect-video mb-4 w-[250px]" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80">
        <p class="clear-both text-justify">
          Maybe we can live without libraries, people like you and me.
          Maybe. Sure, we're too old to change the world,
          but what about that kid, sitting down, opening a book, right now,
          in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers?
          Doesn't HE deserve better? Look.
          If you think this is about overdue fines and missing books, you'd better think again.
          This is about that kid's right to read a book without getting his mind warped!
          Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
        </p>
      </div>

      <!-- Clear : clear-none -->
      <p class="font-bold">Clear : clear-none</p>
      <div class="my-2 p-4 rounded-md bg-pink-200">
        <img class="float-left rounded-md aspect-video mr-4 w-[200px]" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80">
        <img class="float-right rounded-md aspect-video ml-4 w-[200px]" src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80">
        <p class="clear-none text-justify">
          Maybe we can live without libraries, people like you and me.
          Maybe. Sure, we're too old to change the world,
          but what about that kid, sitting down, opening a book, right now,
          in a branch at the local library and finding drawings of pee-pees and
          wee-wees on the Cat in the Hat and the Five Chinese Brothers?
          Doesn't HE deserve better? Look.
          If you think this is about overdue fines and missing books, you'd better think again.
          This is about that kid's right to read a book without getting his mind warped!
          Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.
        </p>
      </div>

      <!-- Object Fit : object-cover -->
      <p class="font-bold mt-4">Object Fit : object-cover</p>
      <div class="bg-indigo-200 my-2 h-48 w-96 rounded-lg">
        <img
          class="object-cover h-48 w-96"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
        >
      </div>

      <!-- Object Fit : object-contain -->
      <p class="font-bold mt-4">Object Fit : object-contain</p>
      <div class="bg-purple-300 my-2 h-48 w-96 rounded-lg">
        <img
          class="object-contain h-48 w-96"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
        >
      </div>

      <!-- Object Fit : object-fill -->
      <p class="font-bold mt-4">Object Fit : object-fill</p>
      <div class="bg-sky-300 my-2 h-48 w-96 rounded-lg">
        <img
          class="object-fill h-48 w-96"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
        >
      </div>

      <!-- Object Fit : object-scale-down -->
      <p class="font-bold mt-4">Object Fit : object-scale-down</p>
      <div class="bg-cyan-300 my-2 h-48 w-96 rounded-lg">
        <img
          class="object-scale-down h-48 w-96"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
        >
      </div>

      <!-- Object Fit : object-none -->
      <p class="font-bold mt-4">Object Fit : object-none</p>
      <div class="bg-yellow-300 my-2 h-48 w-96 rounded-lg">
        <img
          class="object-none h-48 w-96"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80"
        >
      </div>

      <!-- Object Position : object-{side} -->
      <p class="font-bold mt-4">Object Position : object-{side}</p>
      <div class="grid gap-2 grid-cols-3 bg-sky-200 w-[500px] my-2">
        <img
          class="object-none object-left-top bg-yellow-300 w-24 h-24"
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80"
        >
        <img
          class="object-none object-top bg-yellow-300 w-24 h-24 "
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80"
        >
        <img
          class="object-none object-right-top bg-yellow-300 w-24 h-24 ..."
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80"
        >
        <img
          class="object-none object-left bg-yellow-300 w-24 h-24 ..."
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80"
        >
        <img
          class="object-none object-center bg-yellow-300 w-24 h-24 ..."
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80"
        >
        <img
          class="object-none object-right bg-yellow-300 w-24 h-24 ..."
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80"
        >
        <img
          class="object-none object-left-bottom bg-yellow-300 w-24 h-24 ..."
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80"
        >
        <img
          class="object-none object-bottom bg-yellow-300 w-24 h-24 ..."
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80"
        >
        <img
          class="object-none object-right-bottom bg-yellow-300 w-24 h-24 ..."
          src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80"
        >
      </div>

      <!-- Overflow : overflow-visible -->
      <p class="font-bold mt-4">Overflow : overflow-visible</p>
      <div class="overflow-visible relative overflow-auto flex gap-6 items-center dark:bg-slate-800 my-4">
        <img
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=140&h=140&q=80"
          class="w-28 absolute -left-6 rounded-full mr-2"
        >
        <div class="flex flex-col py-5 pl-24">
          <strong class="text-slate-900 dark:text-slate-200">Andrew Alfred</strong>
          <span class="text-slate-500 dark:text-slate-400">Technical advisor</span>
        </div>
      </div>

      <!-- Overflow : overflow-hidden -->
      <p class="font-bold mt-4">Overflow : overflow-hidden</p>
      <div class="overflow-hidden relative overflow-auto flex gap-6 items-center dark:bg-slate-800 my-2">
        <img
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=140&h=140&q=80"
          class="w-28 absolute -left-6 rounded-full mr-2"
        >
        <div class="flex flex-col py-5 pl-24">
          <strong class="text-slate-900 dark:text-slate-200">Andrew Alfred</strong>
          <span class="text-slate-500 dark:text-slate-400">Technical advisor</span>
        </div>
      </div>

      <!-- Overscroll Position : overscroll-contain -->
      <p class="font-bold mt-4">Overscroll Position : overscroll-contain</p>
      <div class="overflow-auto overscroll-contain h-40 p-4 bg-lime-200 my-2">
        <p class="my-1">
        Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.
        </p>
        <p class="my-1">
        Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.
        </p>

        <p class="my-1">
        Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
        </p>
      </div>

      <!-- Overscroll Position : overscroll-none -->
      <p class="font-bold mt-4">Overscroll Position : overscroll-none</p>
      <div class="overflow-auto overscroll-none h-40 p-4 bg-sky-200 my-2">
        <p class="my-1">
        Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.
        </p>
        <p class="my-1">
        Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.
        </p>

        <p class="my-1">
        Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
        </p>
      </div>

      <!-- Overscroll Position : overscroll-auto -->
      <p class="font-bold mt-4">Overscroll Position : overscroll-auto</p>
      <div class="overflow-auto overscroll-auto h-40 p-4 bg-emerald-200 my-2">
        <p class="my-1">
        Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.
        </p>
        <p class="my-1">
        Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.
        </p>

        <p class="my-1">
        Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
        </p>
      </div>

      <!-- Position : static -->
      <p class="font-bold mt-4">Position : static</p>
      <div class="static relative p-4 h-32 bg-orange-200">
        <p class="bg-orange-300 w-full h-full p-4">Static parent</p>
        <div class="absolute bottom-0 left-0 bg-orange-400 rounded-lg p-4">
          <p>Absolute child</p>
        </div>
      </div>

      <!-- Top / Right / Bottom / Left -->
      <p class="font-bold mt-4">Top / Right / Bottom / Left</p>
      <div class="grid grid-cols-3 gap-4">
        <!-- Pin to top left corner : left-0 top-0 -->
        <div class="relative h-32 w-32 bg-cyan-200 rounded-lg">
          <div class="absolute left-0 top-0 h-16 w-16 bg-cyan-400 rounded-lg flex items-center justify-center">01</div>
        </div>

        <!-- Span top edge : inset-x-0 top-0 -->
        <div class="relative h-32 w-32 bg-cyan-200 rounded-lg">
          <div class="absolute inset-x-0 top-0 h-16 bg-cyan-400 rounded-lg flex items-center justify-center">02</div>
        </div>

        <!-- Pin to top right corner : top-0 right-0 -->
        <div class="relative h-32 w-32 bg-cyan-200 rounded-lg">
          <div class="absolute top-0 right-0 h-16 w-16 bg-cyan-400 rounded-lg flex items-center justify-center">03</div>
        </div>

        <!-- Span left edge : inset-y-0 left-0 -->
        <div class="relative h-32 w-32 bg-cyan-200 rounded-lg">
          <div class="absolute inset-y-0 left-0 w-16 bg-cyan-400 rounded-lg flex items-center justify-center">04</div>
        </div>

        <!-- Fill entire parent : inset-0 -->
        <div class="relative h-32 w-32 bg-cyan-200 rounded-lg">
          <div class="absolute inset-0 bg-cyan-400 rounded-lg flex items-center justify-center">05</div>
        </div>

        <!-- Span right edge : inset-y-0 right-0 -->
        <div class="relative h-32 w-32 bg-cyan-200 rounded-lg">
          <div class="absolute inset-y-0 right-0 w-16 bg-cyan-400 rounded-lg flex items-center justify-center">06</div>
        </div>

        <!-- Pin to bottom left corner : bottom-0 left-0 -->
        <div class="relative h-32 w-32 bg-cyan-200 rounded-lg">
          <div class="absolute bottom-0 left-0 h-16 w-16 bg-cyan-400 rounded-lg flex items-center justify-center">07</div>
        </div>

        <!-- Span bottom edge : inset-x-0 bottom-0 -->
        <div class="relative h-32 w-32 bg-cyan-200 rounded-lg">
          <div class="absolute inset-x-0 bottom-0 h-16 bg-cyan-400 rounded-lg flex items-center justify-center">08</div>
        </div>

        <!-- Pin to bottom right corner : bottom-0 right-0 -->
        <div class="relative h-32 w-32 bg-cyan-200 rounded-lg">
          <div class="absolute bottom-0 right-0 h-16 w-16 bg-cyan-400 rounded-lg flex items-center justify-center">09</div>
        </div>
      </div>

      <!-- Top / Right / Bottom / Left : -left-4 -top-4 -->
      <p class="font-bold mt-4">Top / Right / Bottom / Left</p>
      <div class="relative h-32 w-32 bg-indigo-200 rounded-lg my-6">
        <div class="absolute h-14 w-14 -left-4 -top-4 bg-indigo-400 rounded-lg"></div>
      </div>

      <!-- Visibility : invisible -->
      <p class="font-bold mt-4">Visibility : invisible</p>
      <div class="grid grid-cols-3 gap-4 bg-sky-200 w-[500px] h-[50px] my-2">
        <div class="bg-sky-400 rounded-lg flex items-center justify-center">01</div>
        <div class="invisible bg-sky-400 rounded-lg flex items-center justify-center">02</div>
        <div class="bg-sky-400 rounded-lg flex items-center justify-center">03</div>
      </div>

      <!-- Z-index -->
      <p class="font-bold mt-4">Z-index</p>
      <div class="flex -space-x-4 bg-fuchsia-200 my-2 h-16">
        <div class="inline-block z-40 border-8 border-orange-300 rounded-full h-14 w-14 bg-fuchsia-400 flex items-center justify-center">05</div>
        <div class="inline-block z-30 border-8 border-orange-300 rounded-full h-14 w-14 bg-fuchsia-400 flex items-center justify-center">04</div>
        <div class="inline-block z-20 border-8 border-orange-300 rounded-full h-14 w-14 bg-fuchsia-400 flex items-center justify-center">03</div>
        <div class="inline-block z-10 border-8 border-orange-300 rounded-full h-14 w-14 bg-fuchsia-400 flex items-center justify-center">02</div>
        <div class="inline-block z-0 border-8 border-orange-300 rounded-full h-14 w-14 bg-fuchsia-400 flex items-center justify-center">01</div>
      </div>

      <div class="relative my-4 border-8 border-orange-300 h-60 w-60 bg-orange-200">
        <div class="absolute border-8 flex items-center justify-center border-white left-0 top-0 h-28 w-28 bg-orange-400">01</div>
      </div>
      <div class="relative my-4 border-8 border-teal-300 h-60 w-60 bg-teal-200">
        <div class="absolute border-8 flex items-center justify-center border-white inset-x-0 top-0 h-28 bg-teal-400">02</div>
      </div>
      <div class="relative my-4 border-8 border-pink-300 h-60 w-60 bg-pink-200">
        <div class="absolute border-8 flex items-center justify-center border-white top-0 right-0 h-28 w-28 bg-pink-400">03</div>
      </div>
      <div class="relative my-4 border-8 border-purple-300 h-60 w-60 bg-purple-200">
        <div class="absolute border-8 flex items-center justify-center border-white inset-y-0 left-0 w-28 bg-purple-400">04</div>
      </div>
      <div class="relative my-4 border-8 border-green-300 h-60 w-60 bg-green-200">
        <div class="absolute border-8 flex items-center justify-center border-white inset-0 bg-green-400">05</div>
      </div>
      <div class="relative my-4 border-8 border-yellow-300 h-60 w-60 bg-yellow-200">
        <div class="absolute border-8 flex items-center justify-center border-white inset-y-0 right-0 w-28 bg-yellow-400">06</div>
      </div>
      <div class="relative my-4 border-8 border-red-300 h-60 w-60 bg-red-200">
        <div class="absolute border-8 flex items-center justify-center border-white bottom-0 left-0 h-28 w-28 bg-red-400">07</div>
      </div>
      <div class="relative my-4 border-8 border-gray-300 h-60 w-60 bg-gray-200">
        <div class="absolute border-8 flex items-center justify-center border-white inset-x-0 bottom-0 h-28 bg-gray-400">08</div>
      </div>
      <div class="relative my-4 border-8 border-emerald-300 h-60 w-60 bg-emerald-200">
        <div class="absolute border-8 flex items-center justify-center border-white bottom-0 right-0 h-28 w-28 bg-emerald-300">09</div>
      </div>
      <div class="relative my-4 border-8 border-amber-300 h-60 w-60 bg-amber-200">
        <div class="absolute border-8 flex items-center justify-center border-white h-28 w-28 -left-4 -top-4 bg-amber-400">10</div>
      </div>

      <!-- Flex Basis : flex-{basis} -->
      <p class="font-bold mt-4">Flex Basis : flex-{basis}</p>
      <div class="flex flex-row gap-2 h-32 bg-violet-200 p-2 my-2">
        <div class="basis-1/4 h-full rounded-lg bg-violet-400 flex items-center justify-center">01</div>
        <div class="basis-1/4 h-full rounded-lg bg-violet-400 flex items-center justify-center">02</div>
        <div class="basis-1/2 h-full rounded-lg bg-violet-400 flex items-center justify-center">03</div>
      </div>

      <!-- Flex Direction : flex-row -->
      <p class="font-bold mt-4">Flex Direction : flex-row</p>
      <div class="flex flex-row gap-2 bg-cyan-200 p-2 my-2">
        <div class="h-32 w-32 rounded-lg bg-cyan-400 flex items-center justify-center">01</div>
        <div class="h-32 w-32 rounded-lg bg-cyan-400 flex items-center justify-center">02</div>
        <div class="h-32 w-32 rounded-lg bg-cyan-400 flex items-center justify-center">03</div>
      </div>

      <!-- Flex Direction : flex-row-reverse -->
      <p class="font-bold mt-4">Flex Direction : flex-row-reverse</p>
      <div class="flex flex-row-reverse gap-2 bg-emerald-200 p-2 my-2">
        <div class="h-32 w-32 rounded-lg bg-emerald-400 flex items-center justify-center">01</div>
        <div class="h-32 w-32 rounded-lg bg-emerald-400 flex items-center justify-center">02</div>
        <div class="h-32 w-32 rounded-lg bg-emerald-400 flex items-center justify-center">03</div>
      </div>

      <!-- Flex Direction : flex-col -->
      <p class="font-bold mt-4">Flex Direction : flex-col</p>
      <div class="flex flex-col gap-2 bg-indigo-200 p-2 my-2">
        <div class="h-32 w-72 rounded-lg bg-indigo-400 flex items-center justify-center">01</div>
        <div class="h-32 w-72 rounded-lg bg-indigo-400 flex items-center justify-center">02</div>
        <div class="h-32 w-72 rounded-lg bg-indigo-400 flex items-center justify-center">03</div>
      </div>

      <!-- Flex Direction : flex-col-reverse -->
      <p class="font-bold mt-4">Flex Direction : flex-col-reverse</p>
      <div class="flex flex-col-reverse gap-2 bg-pink-200 p-2 my-2">
        <div class="h-32 w-72 rounded-lg bg-pink-400 flex items-center justify-center">01</div>
        <div class="h-32 w-72 rounded-lg bg-pink-400 flex items-center justify-center">02</div>
        <div class="h-32 w-72 rounded-lg bg-pink-400 flex items-center justify-center">03</div>
      </div>

      <!-- LTR -->
      <p class="font-bold mt-4">LTR</p>
      <div dir="ltr" class="my-2 bg-amber-200">
        <div class="relative my-4 border-8 border-orange-300 h-60 w-60 bg-orange-200">
          <div class="absolute border-8 flex items-center justify-center border-white h-28 w-28 top-0 start-0 bg-orange-400"></div>
        </div>
      </div>

      <!-- RTL -->
      <p class="font-bold mt-4 text-right">RTL</p>
      <div dir="rtl" class="my-2 bg-green-200">
        <div class="relative my-4 border-8 border-red-300 h-60 w-60 bg-red-200">
          <div class="absolute border-8 flex items-center justify-center border-white h-28 w-28 top-0 start-0 bg-red-400"></div>
        </div>
      </div>

      <!-- Flex Wrap : flex-nowrap -->
      <p class="font-bold mt-4">Flex Wrap : flex-nowrap</p>
      <div class="flex flex-nowrap gap-2 my-2 overflow-x-scroll bg-sky-200 p-2">
        <div class="bg-sky-400 h-28 w-64 rounded-lg flex-none flex items-center justify-center">01</div>
        <div class="bg-sky-400 h-28 w-64 rounded-lg flex-none flex items-center justify-center">02</div>
        <div class="bg-sky-400 h-28 w-64 rounded-lg flex-none flex items-center justify-center">03</div>
        <div class="bg-sky-400 h-28 w-64 rounded-lg flex-none flex items-center justify-center">03</div>
      </div>

      <!-- Flex Wrap : flex-wrap -->
      <p class="font-bold mt-4">Flex Wrap : flex-wrap</p>
      <div class="flex flex-wrap gap-2 my-2 bg-yellow-200 p-2">
        <div class="bg-yellow-400 h-28 w-64 rounded-lg flex-none flex items-center justify-center">01</div>
        <div class="bg-yellow-400 h-28 w-64 rounded-lg flex-none flex items-center justify-center">02</div>
        <div class="bg-yellow-400 h-28 w-64 rounded-lg flex-none flex items-center justify-center">03</div>
      </div>

      <!-- Flex Wrap : flex-wrap-reverse -->
      <p class="font-bold mt-4">Flex Wrap : flex-wrap-reverse</p>
      <div class="flex flex-wrap-reverse gap-2 my-2 bg-purple-200 p-2">
        <div class="bg-purple-400 h-28 w-64 rounded-lg flex-none flex items-center justify-center">01</div>
        <div class="bg-purple-400 h-28 w-64 rounded-lg flex-none flex items-center justify-center">02</div>
        <div class="bg-purple-400 h-28 w-64 rounded-lg flex-none flex items-center justify-center">03</div>
      </div>

      <!-- Flex Wrap : flex-initial -->
      <p class="font-bold mt-4">Flex : flex-initial</p>
      <div class="flex gap-2 my-2 bg-stone-200 p-2 my-2">
        <div class="flex-none w-14 h-14 bg-stone-400 rounded-lg flex-none flex items-center justify-center">
          01
        </div>
        <div class="flex-initial w-64 bg-stone-500 rounded-lg flex-none flex items-center justify-center">
          02
        </div>
        <div class="flex-initial w-32 bg-stone-500 rounded-lg flex-none flex items-center justify-center">
          03
        </div>
      </div>

      <!-- Flex Wrap : flex-1 -->
      <p class="font-bold mt-4">Flex : flex-1</p>
      <div class="flex gap-2 my-2 bg-slate-200 p-2 my-2">
        <div class="flex-none w-14 h-14 bg-slate-400 rounded-lg flex-none flex items-center justify-center">
          01
        </div>
        <div class="flex-1 w-64 bg-slate-500 rounded-lg flex-none flex items-center justify-center">
          02
        </div>
        <div class="flex-1 w-32 bg-slate-500 rounded-lg flex-none flex items-center justify-center">
          03
        </div>
      </div>

      <!-- Flex Wrap : flex-wrap-auto -->
      <p class="font-bold mt-4">Flex : flex-auto</p>
      <div class="flex gap-2 my-2 bg-green-200 p-2 my-2">
        <div class="flex-none w-14 h-14 bg-green-400 rounded-lg flex-none flex items-center justify-center">
          01
        </div>
        <div class="flex-auto w-64 bg-green-500 rounded-lg flex-none flex items-center justify-center">
          02
        </div>
        <div class="flex-auto w-32 bg-green-500 rounded-lg flex-none flex items-center justify-center">
          03
        </div>
      </div>

      <!-- Flex Wrap : flex-none -->
      <p class="font-bold mt-4">Flex : flex-none</p>
      <div class="flex gap-2 my-2 bg-rose-200 p-2 my-2">
        <div class="flex-none w-14 h-14 bg-rose-500 rounded-lg flex-none flex items-center justify-center">
          01
        </div>
        <div class="flex-none w-64 bg-rose-500 rounded-lg flex-none flex items-center justify-center">
          02
        </div>
        <div class="flex-1 w-32 bg-rose-400 rounded-lg flex-none flex items-center justify-center">
          03
        </div>
      </div>

      <!-- Flex Grow -->
      <p class="font-bold mt-4">Flex Grow : grow</p>
      <div class="flex gap-2 bg-zinc-200 p-2 my-2">
        <div class="flex-none w-14 h-14 rounded-lg bg-zinc-400 flex items-center justify-center">
          01
        </div>
        <div class="grow h-14 rounded-lg bg-zinc-500 flex items-center justify-center">
          02
        </div>
        <div class="flex-none w-14 h-14 rounded-lg bg-zinc-400 flex items-center justify-center">
          03
        </div>
      </div>

      <!-- Flex grow - prevent to grow -->
      <p class="font-bold mt-4">Flex Grow : grow-0</p>
      <div class="flex gap-2 bg-teal-200 p-2 my-2">
        <div class="grow h-14 rounded-lg bg-teal-400 flex items-center justify-center">
          01
        </div>
        <div class="grow-0 w-16 h-14 rounded-lg bg-teal-500 flex items-center justify-center">
          02
        </div>
        <div class="grow h-14 rounded-lg bg-teal-400 flex items-center justify-center">
          03
        </div>
      </div>

      <!-- Flex shrink : shrink -->
      <p class="font-bold mt-4">Flex shrink : shrink</p>
      <div class="flex gap-2 bg-amber-200 p-2 my-2">
        <div class="flex-1 h-14 w-14 rounded-lg bg-amber-400 flex items-center justify-center">
          01
        </div>
        <div class="shrink w-64 h-14 rounded-lg bg-amber-500 flex items-center justify-center">
          02
        </div>
        <div class="flex-1 h-14 w-14 rounded-lg bg-amber-400 flex items-center justify-center">
          03
        </div>
      </div>

      <!-- Flex shrink : shrink -->
      <p class="font-bold mt-4">Flex shrink : shrink-0</p>
      <div class="flex gap-2 bg-emerald-200 p-2 my-2">
        <div class="flex-1 h-14 w-14 rounded-lg bg-emerald-500 flex items-center justify-center">
          01
        </div>
        <div class="shrink-0 w-64 h-14 rounded-lg bg-emerald-600 flex items-center justify-center">
          02
        </div>
        <div class="flex-1 h-14 w-14 rounded-lg bg-emerald-500 flex items-center justify-center">
          03
        </div>
      </div>

      <!-- Order : order-{order} -->
      <p class="font-bold mt-4">Order : order-{order}</p>
      <div class="flex gap-2 justify-between bg-lime-200 p-2 my-2">
        <div class="order-last h-14 w-14 rounded-lg bg-lime-600 flex items-center justify-center">01</div>
        <div class="h-14 w-14 rounded-lg bg-lime-400 flex items-center justify-center">02</div>
        <div class="h-14 w-14 rounded-lg bg-lime-400 flex items-center justify-center">03</div>
      </div>

      <!-- Order : -order-{order} -->
      <p class="font-bold mt-4">Order : -order-{order}</p>
      <div class="flex gap-2 justify-between bg-blue-200 p-2 my-2">
        <div class="h-14 w-14 rounded-lg bg-blue-400 flex items-center justify-center">01</div>
        <div class="-order-1 h-14 w-14 rounded-lg bg-blue-600 flex items-center justify-center">02</div>
        <div class="h-14 w-14 rounded-lg bg-blue-400 flex items-center justify-center">03</div>
      </div>

      <!-- Grid Template Columns -->
      <p class="font-bold mt-4">Grid Template Columns : grid-cols-{n}</p>
      <div class="grid grid-cols-4 gap-2 bg-zinc-200 p-2 w-[600px] my-2">
        <div class="bg-zinc-400 h-16 flex items-center justify-center rounded-md">01</div>
        <div class="bg-zinc-400 h-16 flex items-center justify-center rounded-md">02</div>
        <div class="bg-zinc-400 h-16 flex items-center justify-center rounded-md">03</div>
        <div class="bg-zinc-400 h-16 flex items-center justify-center rounded-md">04</div>
        <div class="bg-zinc-400 h-16 flex items-center justify-center rounded-md">05</div>
        <div class="bg-zinc-400 h-16 flex items-center justify-center rounded-md">06</div>
        <div class="bg-zinc-400 h-16 flex items-center justify-center rounded-md">07</div>
        <div class="bg-zinc-400 h-16 flex items-center justify-center rounded-md">08</div>
        <div class="bg-zinc-400 h-16 flex items-center justify-center rounded-md">09</div>
        <div class="bg-zinc-400 h-16 flex items-center justify-center rounded-md">10</div>
        <div class="bg-zinc-400 h-16 flex items-center justify-center rounded-md">11</div>
        <div class="bg-zinc-400 h-16 flex items-center justify-center rounded-md">12</div>
      </div>

      <!-- Grid Columns Start/End : col-span-2 -->
      <p class="font-bold mt-4">Grid Column Start/End : col-span-2</p>
      <div class="grid grid-cols-3 gap-2 bg-sky-200 p-2 my-2">
        <div class="bg-sky-500 h-16 rounded flex items-center justify-center">01</div>
        <div class="bg-sky-500 h-16 rounded flex items-center justify-center">02</div>
        <div class="bg-sky-500 h-16 rounded flex items-center justify-center">03</div>
        <div class="col-span-2 bg-sky-500 h-16 rounded flex items-center justify-center">04</div>
        <div class="bg-sky-500 h-16 rounded flex items-center justify-center">05</div>
        <div class="bg-sky-500 h-16 rounded flex items-center justify-center">06</div>
        <div class="col-span-2 bg-sky-500 h-16 rounded flex items-center justify-center">07</div>
      </div>

      <!-- Grid Columns Start/End : col-start-{n} / col-end-{n} -->
      <p class="font-bold mt-4">Grid Column Start/End : col-start-{n} / col-end-{n}</p>
      <div class="grid grid-cols-6 gap-2 p-2 bg-emerald-200 my-2">
        <div class="col-start-2 col-span-4 bg-emerald-400 h-16 rounded flex items-center justify-center">01</div>
        <div class="col-start-1 col-end-3 bg-emerald-400 h-16 rounded flex items-center justify-center">02</div>
        <div class="col-end-7 col-span-2 bg-emerald-400 h-16 rounded flex items-center justify-center">03</div>
        <div class="col-start-1 col-end-7 bg-emerald-400 h-16 rounded flex items-center justify-center">04</div>
      </div>

      <!-- Grid Template Rows -->
      <p class="font-bold mt-4">Grid Templates Rows : grid-rows-{n}</p>
      <div class="grid grid-rows-3 grid-flow-col gap-2 p-2 bg-amber-200 my-2">
        <div class="bg-amber-500 h-16 rounded-lg flex items-center justify-center">01</div>
        <div class="bg-amber-500 h-16 rounded-lg flex items-center justify-center">02</div>
        <div class="bg-amber-500 h-16 rounded-lg flex items-center justify-center">03</div>
        <div class="bg-amber-500 h-16 rounded-lg flex items-center justify-center">04</div>
        <div class="bg-amber-500 h-16 rounded-lg flex items-center justify-center">05</div>
        <div class="bg-amber-500 h-16 rounded-lg flex items-center justify-center">06</div>
        <div class="bg-amber-500 h-16 rounded-lg flex items-center justify-center">07</div>
        <div class="bg-amber-500 h-16 rounded-lg flex items-center justify-center">08</div>
        <div class="bg-amber-500 h-16 rounded-lg flex items-center justify-center">09</div>
        <div class="bg-amber-500 h-16 rounded-lg flex items-center justify-center">10</div>
        <div class="bg-amber-500 h-16 rounded-lg flex items-center justify-center">11</div>
        <div class="bg-amber-500 h-16 rounded-lg flex items-center justify-center">12</div>
      </div>

      <!-- Grid Row Start/End -->
      <p class="font-bold mt-4">Grid Row Start/End : row-start-{n}</p>
      <div class="grid grid-rows-3 grid-flow-col p-2 gap-2 bg-sky-200 h-[200px] my-2">
        <div class="row-span-3 bg-sky-300 rounded flex items-center justify-center">01</div>
        <div class="col-span-2 bg-sky-500 rounded flex items-center justify-center">02</div>
        <div class="row-span-2 col-span-2 bg-sky-300 rounded flex items-center justify-center">03</div>
      </div>

      <!-- Grid Row Start/End -->
      <p class="font-bold mt-4">Grid Row Start/End : row-start-{n} : row-end-{n} : row-span-{n}</p>
      <div class="grid grid-rows-3 grid-flow-col gap-2 p-2 bg-amber-200 h-[200px] my-2">
        <div class="row-start-2 row-span-2 bg-amber-400 rounded-lg flex items-center justify-center">01</div>
        <div class="row-end-3 row-span-2 bg-amber-400 rounded-lg flex items-center justify-center">02</div>
        <div class="row-start-1 row-end-4 bg-amber-400 rounded-lg flex items-center justify-center">03</div>
      </div>

      <!-- Grid Auto Flow : grid-flow-row -->
      <p class="font-bold mt-4">Grid Auto Flow : grid-flow-row</p>
      <div class="grid grid-flow-row grid-cols-3 grid-rows-3 gap-2 p-2 bg-orange-200 h-[200px] my-2">
        <div class="col-span-2 bg-orange-400 rounded-lg flex items-center justify-center">01</div>
        <div class="col-span-2 bg-orange-400 rounded-lg flex items-center justify-center">02</div>
        <div class="bg-orange-400 rounded-lg flex items-center justify-center">03</div>
        <div class="bg-orange-400 rounded-lg flex items-center justify-center">04</div>
        <div class="bg-orange-400 rounded-lg flex items-center justify-center">05</div>
      </div>

      <!-- Grid Auto Flow : grid-flow-col -->
      <p class="font-bold mt-4">Grid Auto Flow : grid-flow-col</p>
      <div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-2 p-2 bg-teal-200 h-[200px] my-2">
        <div class="col-span-2 bg-teal-400 rounded-lg flex items-center justify-center">01</div>
        <div class="bg-teal-400 rounded-lg flex items-center justify-center">02</div>
        <div class="bg-teal-400 rounded-lg flex items-center justify-center">03</div>
        <div class="bg-teal-400 rounded-lg flex items-center justify-center">04</div>
        <div class="bg-teal-400 rounded-lg flex items-center justify-center">05</div>
        <div class="bg-teal-400 rounded-lg flex items-center justify-center">06</div>
      </div>

      <!-- Grid Auto Columns : auto-flow-dense -->
      <p class="font-bold mt-4">Grid Auto Flow : grid-flow-dense</p>
      <div class="grid grid-flow-dense auto-cols-auto p-2 gap-2 bg-cyan-200 h-[200px] my-2">
        <div class="col-span-2 bg-cyan-400 rounded-lg flex items-center justify-center">01</div>
        <div class="col-span-2 bg-cyan-400 rounded-lg flex items-center justify-center">02</div>
        <div class="bg-cyan-400 rounded-lg flex items-center justify-center">03</div>
        <div class="bg-cyan-400 rounded-lg flex items-center justify-center">04</div>
        <div class="bg-cyan-400 rounded-lg flex items-center justify-center">05</div>
      </div>

      <!-- Grid Auto Flow : grid-flow-dense -->
      <p class="font-bold mt-4">Grid Auto Flow : grid-flow-row-dense</p>
      <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 p-2 bg-emerald-200 h-[200px] my-2">
        <div class="col-span-2 bg-emerald-400 rounded-lg flex items-center justify-center">01</div>
        <div class="col-span-2 bg-emerald-400 rounded-lg flex items-center justify-center">02</div>
        <div class="bg-emerald-400 rounded-lg flex items-center justify-center">03</div>
        <div class="bg-emerald-400 rounded-lg flex items-center justify-center">04</div>
        <div class="bg-emerald-400 rounded-lg flex items-center justify-center">05</div>
      </div>

      <!-- Grid Auto Flow : auto-flow-col-dense -->
      <p class="font-bold mt-4">Grid Auto Flow : grid-flow-col-dense</p>
      <div class="grid grid-flow-col-dense auto-cols-auto p-2 gap-2 bg-violet-200 h-[100px] my-2">
        <div class="col-span-2 bg-violet-400 rounded-lg flex items-center justify-center">01</div>
        <div class="col-span-2 bg-violet-400 rounded-lg flex items-center justify-center">02</div>
        <div class="bg-violet-400 rounded-lg flex items-center justify-center">03</div>
        <div class="bg-violet-400 rounded-lg flex items-center justify-center">04</div>
        <div class="bg-violet-400 rounded-lg flex items-center justify-center">05</div>
      </div>

      <!-- Grid Auto Columns : auto-cols-min -->
      <p class="font-bold mt-4">Grid Auto Column : auto-cols-min</p>
      <div class="grid grid-flow-col auto-cols-min p-2 gap-2 bg-amber-200 h-[100px] my-2">
        <div class="bg-amber-400 rounded-lg px-4 flex items-center justify-center">01</div>
        <div class="bg-amber-400 rounded-lg px-4 flex items-center justify-center">02</div>
        <div class="bg-amber-400 rounded-lg px-4 flex items-center justify-center">03</div>
        <div class="bg-amber-400 rounded-lg px-4 flex items-center justify-center">04</div>
      </div>

      <!-- Grid Auto Columns : auto-cols-max -->
      <p class="font-bold mt-4">Grid Auto Column : auto-cols-max</p>
      <div class="grid grid-flow-col auto-cols-max p-2 gap-2 bg-stone-200 h-[100px] my-2">
        <div class="bg-stone-400 rounded px-4 flex items-center justify-center">01</div>
        <div class="bg-stone-400 rounded px-4 flex items-center justify-center">02</div>
        <div class="bg-stone-400 rounded px-4 flex items-center justify-center">03</div>
        <div class="bg-stone-400 rounded px-4 flex items-center justify-center">04</div>
      </div>

      <!-- Grid Auto Columns : auto-cols-auto -->
      <p class="font-bold mt-4">Grid Auto Column : auto-cols-auto</p>
      <div class="grid grid-flow-col auto-cols-auto p-2 gap-2 bg-slate-200 h-[100px] my-2">
        <div class="bg-slate-400 rounded px-4 flex items-center justify-center">01</div>
        <div class="bg-slate-400 rounded px-4 flex items-center justify-center">02</div>
        <div class="bg-slate-400 rounded px-4 flex items-center justify-center">03</div>
      </div>

      <!-- Grid Auto Columns : auto-cols-fr -->
      <p class="font-bold mt-4">Grid Auto Column : auto-cols-fr</p>
      <div class="grid grid-flow-col auto-cols-fr p-2 gap-2 bg-lime-200 h-[100px] my-2">
        <div class="bg-lime-400 rounded px-4 flex items-center justify-center">01</div>
        <div class="bg-lime-400 rounded px-4 flex items-center justify-center">02</div>
        <div class="bg-lime-400 rounded px-4 flex items-center justify-center">03</div>
      </div>

      <!-- Grid Auto Rows : auto-rows-auto -->
      <p class="font-bold mt-4">Grid Auto Rows : auto-rows-auto</p>
      <div class="grid grid-flow-row auto-rows-min p-2 gap-2 bg-rose-200 h-[150px] my-2">
        <div class="bg-rose-400 rounded px-4 flex items-center justify-center">01</div>
        <div class="bg-rose-400 rounded px-4 flex items-center justify-center">02</div>
        <div class="bg-rose-400 rounded px-4 flex items-center justify-center">03</div>
      </div>

      <!-- Grid Auto Rows : auto-rows-min -->
      <p class="font-bold mt-4">Grid Auto Rows : auto-rows-min</p>
      <div class="grid grid-flow-row auto-rows-min p-2 gap-2 bg-blue-200 h-[150px] my-2">
        <div class="bg-blue-400 rounded px-4 flex items-center justify-center">01</div>
        <div class="bg-blue-400 rounded px-4 flex items-center justify-center">02</div>
        <div class="bg-blue-400 rounded px-4 flex items-center justify-center">03</div>
      </div>

      <!-- Grid Auto Rows : auto-rows-max -->
      <p class="font-bold mt-4">Grid Auto Rows : auto-rows-max</p>
      <div class="grid grid-flow-row auto-rows-max p-2 gap-2 bg-fuchsia-200 h-[150px] my-2">
        <div class="bg-fuchsia-400 rounded px-4 flex items-center justify-center">01</div>
        <div class="bg-fuchsia-400 rounded px-4 flex items-center justify-center">02</div>
        <div class="bg-fuchsia-400 rounded px-4 flex items-center justify-center">03</div>
      </div>

      <!-- Grid Auto Rows : auto-rows-fr -->
      <p class="font-bold mt-4">Grid Auto Rows : auto-rows-fr</p>
      <div class="grid grid-flow-row auto-rows-fr p-2 gap-2 bg-amber-200 h-[150px] my-2">
        <div class="bg-amber-400 rounded px-4 flex items-center justify-center">01</div>
        <div class="bg-amber-400 rounded px-4 flex items-center justify-center">02</div>
        <div class="bg-amber-400 rounded px-4 flex items-center justify-center">03</div>
      </div>

      <!-- Gap : gap-x-8 : gap-y-4 -->
      <p class="font-bold mt-4">Gap : gap-x-8 : gap-y-4</p>
      <div class="grid gap-x-8 gap-y-4 grid-cols-3 p-2 bg-stone-200 my-2">
        <div class="bg-stone-400 h-12 rounded px-4 flex items-center justify-center">01</div>
        <div class="bg-stone-400 h-12 rounded px-4 flex items-center justify-center">02</div>
        <div class="bg-stone-400 h-12 rounded px-4 flex items-center justify-center">03</div>
        <div class="bg-stone-400 h-12 rounded px-4 flex items-center justify-center">04</div>
        <div class="bg-stone-400 h-12 rounded px-4 flex items-center justify-center">05</div>
        <div class="bg-stone-400 h-12 rounded px-4 flex items-center justify-center">06</div>
      </div>

      <!-- Justify Content : justify-start -->
      <p class="font-bold mt-4">Justify Content : justify-start</p>
      <div class="flex justify-start p-2 bg-cyan-200 my-2">
        <div class="bg-cyan-400 rounded-lg flex items-center justify-center w-14 h-14 mx-2">01</div>
        <div class="bg-cyan-400 rounded-lg flex items-center justify-center w-14 h-14 mx-2">02</div>
        <div class="bg-cyan-400 rounded-lg flex items-center justify-center w-14 h-14 mx-2">03</div>
      </div>

      <!-- Justify Content : justify-center -->
      <p class="font-bold mt-4">Justify Content : justify-center</p>
      <div class="flex justify-center p-2 bg-teal-200 my-2">
        <div class="bg-teal-400 rounded flex items-center justify-center w-14 h-14 mx-2">01</div>
        <div class="bg-teal-400 rounded flex items-center justify-center w-14 h-14 mx-2">02</div>
        <div class="bg-teal-400 rounded flex items-center justify-center w-14 h-14 mx-2">03</div>
      </div>

      <!-- Justify Content : justify-end -->
      <p class="font-bold mt-4">Justify Content : justify-end</p>
      <div class="flex justify-end p-2 bg-purple-200 my-2">
        <div class="bg-purple-400 rounded flex items-center justify-center w-14 h-14 mx-2">01</div>
        <div class="bg-purple-400 rounded flex items-center justify-center w-14 h-14 mx-2">02</div>
        <div class="bg-purple-400 rounded flex items-center justify-center w-14 h-14 mx-2">03</div>
      </div>

      <!-- Justify Content : justify-between -->
      <p class="font-bold mt-4">Justify Content : justify-between</p>
      <div class="flex justify-between p-2 bg-red-200 my-2">
        <div class="bg-red-400 rounded flex items-center justify-center w-14 h-14 mx-2">01</div>
        <div class="bg-red-400 rounded flex items-center justify-center w-14 h-14 mx-2">02</div>
        <div class="bg-red-400 rounded flex items-center justify-center w-14 h-14 mx-2">03</div>
      </div>

      <!-- Justify Content : justify-around -->
      <p class="font-bold mt-4">Justify Content : justify-around</p>
      <div class="flex justify-around p-2 bg-sky-200 my-2">
        <div class="bg-sky-400 rounded flex items-center justify-center w-14 h-14 mx-2">01</div>
        <div class="bg-sky-400 rounded flex items-center justify-center w-14 h-14 mx-2">02</div>
        <div class="bg-sky-400 rounded flex items-center justify-center w-14 h-14 mx-2">03</div>
      </div>

      <!-- Justify Content : justify-evenly -->
      <p class="font-bold mt-4">Justify Content : justify-evenly</p>
      <div class="flex justify-evenly p-2 bg-lime-200 my-2">
        <div class="bg-lime-400 rounded flex items-center justify-center w-14 h-14 mx-2">01</div>
        <div class="bg-lime-400 rounded flex items-center justify-center w-14 h-14 mx-2">02</div>
        <div class="bg-lime-400 rounded flex items-center justify-center w-14 h-14 mx-2">03</div>
      </div>

      <!-- Justify Content : justify-stretch -->
      <p class="font-bold mt-4">Justify Content : justify-stretch</p>
      <div class="grid grid-flow-col justify-stretch my-2 p-2 bg-fuchsia-200 h-[100px]">
        <div class="bg-fuchsia-400 rounded flex items-center justify-center mx-2">01</div>
        <div class="bg-fuchsia-400 rounded flex items-center justify-center mx-2">02</div>
        <div class="bg-fuchsia-400 rounded flex items-center justify-center mx-2">03</div>
      </div>

      <!-- Justify Items : justify-items-start -->
      <p class="font-bold mt-4">Justify items : justify-items-start</p>
      <div class="grid grid-cols-3 gap-2 justify-items-start my-2 p-2 bg-blue-200">
        <div class="bg-blue-400 rounded text-center w-14 h-14 flex justify-center items-center">01</div>
        <div class="bg-blue-400 rounded text-center w-14 h-14 flex justify-center items-center">02</div>
        <div class="bg-blue-400 rounded text-center w-14 h-14 flex justify-center items-center">03</div>
        <div class="bg-blue-400 rounded text-center w-14 h-14 flex justify-center items-center">04</div>
        <div class="bg-blue-400 rounded text-center w-14 h-14 flex justify-center items-center">05</div>
        <div class="bg-blue-400 rounded text-center w-14 h-14 flex justify-center items-center">06</div>
      </div>

      <!-- Justify Items : justify-items-end -->
      <p class="font-bold mt-4">Justify items : justify-items-end</p>
      <div class="grid grid-cols-3 gap-2 justify-items-end my-2 p-4 bg-stone-200">
        <div class="bg-stone-400 rounded flex items-center justify-center w-14 h-14">01</div>
        <div class="bg-stone-400 rounded flex items-center justify-center w-14 h-14">02</div>
        <div class="bg-stone-400 rounded flex items-center justify-center w-14 h-14">03</div>
        <div class="bg-stone-400 rounded flex items-center justify-center w-14 h-14">04</div>
        <div class="bg-stone-400 rounded flex items-center justify-center w-14 h-14">05</div>
        <div class="bg-stone-400 rounded flex items-center justify-center w-14 h-14">06</div>
      </div>

      <!-- Justify Items : justify-items-center -->
      <p class="font-bold mt-4">Justify items : justify-items-center</p>
      <div class="grid grid-cols-3 gap-2 justify-items-center my-2 p-4 bg-pink-200">
        <div class="bg-pink-400 rounded flex items-center h-14 w-14 justify-center">01</div>
        <div class="bg-pink-400 rounded flex items-center h-14 w-14 justify-center">02</div>
        <div class="bg-pink-400 rounded flex items-center h-14 w-14 justify-center">03</div>
        <div class="bg-pink-400 rounded flex items-center h-14 w-14 justify-center">04</div>
        <div class="bg-pink-400 rounded flex items-center h-14 w-14 justify-center">05</div>
        <div class="bg-pink-400 rounded flex items-center h-14 w-14 justify-center">06</div>
      </div>

      <!-- Justify Items : justify-items-stretch -->
      <p class="font-bold mt-4">Justify items : justify-items-stretch</p>
      <div class="grid grid-cols-3 gap-2 justify-items-stretch my-2 p-4 h-[150px] bg-teal-200">
        <div class="bg-teal-400 rounded-lg flex items-center justify-center">01</div>
        <div class="bg-teal-400 rounded-lg flex items-center justify-center">02</div>
        <div class="bg-teal-400 rounded-lg flex items-center justify-center">03</div>
        <div class="bg-teal-400 rounded-lg flex items-center justify-center">04</div>
        <div class="bg-teal-400 rounded-lg flex items-center justify-center">05</div>
        <div class="bg-teal-400 rounded-lg flex items-center justify-center">06</div>
      </div>

      <!-- Justify Self : justify-self-auto -->
      <p class="font-bold mt-4">Justify items : justify-self-auto</p>
      <div class="grid grid-cols-3 gap-3 justify-items-stretch my-2 p-4 h-[150px] bg-rose-200">
        <div class="bg-rose-400 rounded-xl flex items-center justify-center">01</div>
        <div class="justify-self-auto bg-rose-600 rounded-xl flex items-center justify-center">02</div>
        <div class="bg-rose-400 rounded-xl flex items-center justify-center">03</div>
        <div class="bg-rose-400 rounded-xl flex items-center justify-center">04</div>
        <div class="bg-rose-400 rounded-xl flex items-center justify-center">05</div>
        <div class="bg-rose-400 rounded-xl flex items-center justify-center">06</div>
      </div>

      <!-- Justify Self : justify-self-start -->
      <p class="font-bold mt-4">Justify items : justify-self-start</p>
      <div class="grid grid-cols-3 gap-2 justify-items-stretch my-2 p-4 h-[150px] bg-purple-200">
        <div class="bg-purple-400 rounded flex items-center justify-center">01</div>
        <div class="justify-self-start px-4 bg-purple-600 rounded flex items-center justify-center">02</div>
        <div class="bg-purple-400 rounded flex items-center justify-center">03</div>
        <div class="bg-purple-400 rounded flex items-center justify-center">04</div>
        <div class="bg-purple-400 rounded flex items-center justify-center">05</div>
        <div class="bg-purple-400 rounded flex items-center justify-center">06</div>
      </div>

      <!-- Justify Self : justify-self-center -->
      <p class="font-bold mt-4">Justify items : justify-self-center</p>
      <div class="grid grid-cols-3 gap-2 justify-items-stretch my-2 p-2 h-[150px] bg-amber-200">
        <div class="bg-amber-400 rounded flex items-center justify-center">01</div>
        <div class="justify-self-center px-4 bg-amber-600 rounded flex items-center justify-center">02</div>
        <div class="bg-amber-400 rounded flex items-center justify-center">03</div>
        <div class="bg-amber-400 rounded flex items-center justify-center">04</div>
        <div class="bg-amber-400 rounded flex items-center justify-center">05</div>
        <div class="bg-amber-400 rounded flex items-center justify-center">06</div>
      </div>

      <!-- Justify Self : justify-self-end -->
      <p class="font-bold mt-4">Justify items : justify-self-end</p>
      <div class="grid grid-cols-3 gap-2 justify-items-stretch my-2 p-2 h-[150px] bg-violet-200">
        <div class="bg-violet-400 rounded flex items-center justify-center">01</div>
        <div class="justify-self-end px-4 bg-violet-600 rounded flex items-center justify-center">02</div>
        <div class="bg-violet-400 rounded flex items-center justify-center">03</div>
        <div class="bg-violet-400 rounded flex items-center justify-center">04</div>
        <div class="bg-violet-400 rounded flex items-center justify-center">05</div>
        <div class="bg-violet-400 rounded flex items-center justify-center">06</div>
      </div>

      <!-- Justify Self : justify-self-stretch -->
      <p class="font-bold mt-4">Justify items : justify-self-stretch</p>
      <div class="grid grid-cols-3 gap-2 justify-items-start my-2 p-2 h-[150px] bg-lime-200">
        <div class="bg-lime-400 rounded px-4 flex items-center justify-center">01</div>
        <div class="justify-self-stretch bg-lime-400 rounded flex items-center justify-center">02</div>
        <div class="bg-lime-400 rounded px-4 flex items-center justify-center">03</div>
        <div class="bg-lime-400 rounded px-4 flex items-center justify-center">04</div>
        <div class="bg-lime-400 rounded px-4 flex items-center justify-center">05</div>
        <div class="bg-lime-400 rounded px-4 flex items-center justify-center">06</div>
      </div>

      <!-- Algin Content : content-start -->
      <p class="font-bold mt-4">Align content : content-start</p>
      <div class="grid grid-cols-3 gap-2 content-start my-2 p-2 h-[300px] bg-emerald-200">
        <div class="bg-emerald-400 rounded flex items-center justify-center h-14">01</div>
        <div class="bg-emerald-400 rounded flex items-center justify-center h-14">02</div>
        <div class="bg-emerald-400 rounded flex items-center justify-center h-14">03</div>
        <div class="bg-emerald-400 rounded flex items-center justify-center h-14">04</div>
        <div class="bg-emerald-400 rounded flex items-center justify-center h-14">05</div>
      </div>

      <!-- Algin Content : content-center -->
      <p class="font-bold mt-4">Align content : content-center</p>
      <div class="grid grid-cols-3 gap-2 content-center my-2 p-2 h-[300px] bg-yellow-200">
        <div class="bg-yellow-400 rounded flex items-center justify-center h-14">01</div>
        <div class="bg-yellow-400 rounded flex items-center justify-center h-14">02</div>
        <div class="bg-yellow-400 rounded flex items-center justify-center h-14">03</div>
        <div class="bg-yellow-400 rounded flex items-center justify-center h-14">04</div>
        <div class="bg-yellow-400 rounded flex items-center justify-center h-14">05</div>
      </div>

      <!-- Algin Content : content-end -->
      <p class="font-bold mt-4">Align content : content-end</p>
      <div class="grid grid-cols-3 gap-2 content-end my-2 p-2 h-[300px] bg-green-200">
        <div class="bg-green-400 rounded flex items-center justify-center h-14">01</div>
        <div class="bg-green-400 rounded flex items-center justify-center h-14">02</div>
        <div class="bg-green-400 rounded flex items-center justify-center h-14">03</div>
        <div class="bg-green-400 rounded flex items-center justify-center h-14">04</div>
        <div class="bg-green-400 rounded flex items-center justify-center h-14">05</div>
      </div>

      <!-- Algin Content : content-between -->
      <p class="font-bold mt-4">Align content : content-between</p>
      <div class="grid grid-cols-3 gap-2 content-between my-2 p-2 h-[300px] bg-teal-200">
        <div class="bg-teal-400 rounded flex items-center justify-center h-14">01</div>
        <div class="bg-teal-400 rounded flex items-center justify-center h-14">02</div>
        <div class="bg-teal-400 rounded flex items-center justify-center h-14">03</div>
        <div class="bg-teal-400 rounded flex items-center justify-center h-14">04</div>
        <div class="bg-teal-400 rounded flex items-center justify-center h-14">05</div>
      </div>

      <!-- Algin Content : content-around -->
      <p class="font-bold mt-4">Align content : content-around</p>
      <div class="grid grid-cols-3 gap-2 content-around my-2 p-2 h-[300px] bg-amber-200">
        <div class="bg-amber-400 rounded flex items-center justify-center h-14">01</div>
        <div class="bg-amber-400 rounded flex items-center justify-center h-14">02</div>
        <div class="bg-amber-400 rounded flex items-center justify-center h-14">03</div>
        <div class="bg-amber-400 rounded flex items-center justify-center h-14">04</div>
        <div class="bg-amber-400 rounded flex items-center justify-center h-14">05</div>
      </div>

      <!-- Algin Content : content-evenly -->
      <p class="font-bold mt-4">Align content : content-evenly</p>
      <div class="grid grid-cols-3 gap-2 content-evenly my-2 p-2 h-[300px] bg-slate-500">
        <div class="bg-neutral-400 rounded flex items-center justify-center h-14">01</div>
        <div class="bg-neutral-400 rounded flex items-center justify-center h-14">02</div>
        <div class="bg-neutral-400 rounded flex items-center justify-center h-14">03</div>
        <div class="bg-neutral-400 rounded flex items-center justify-center h-14">04</div>
        <div class="bg-neutral-400 rounded flex items-center justify-center h-14">05</div>
      </div>

      <!-- Algin Content : content-stretch -->
      <p class="font-bold mt-4">Align content : content-stretch</p>
      <div class="grid grid-cols-3 gap-2 content-stretch my-2 p-2 h-[300px] bg-orange-200">
        <div class="bg-orange-400 rounded flex items-center justify-center">01</div>
        <div class="bg-orange-400 rounded flex items-center justify-center">02</div>
        <div class="bg-orange-400 rounded flex items-center justify-center">03</div>
        <div class="bg-orange-400 rounded flex items-center justify-center">04</div>
        <div class="bg-orange-400 rounded flex items-center justify-center">05</div>
      </div>

      <!-- Algin Content : content-normal -->
      <p class="font-bold mt-4">Align content : content-normal</p>
      <div class="grid grid-cols-3 gap-2 content-normal my-2 p-2 h-[300px] bg-blue-200">
        <div class="bg-blue-400 rounded flex items-center justify-center">01</div>
        <div class="bg-blue-400 rounded flex items-center justify-center">02</div>
        <div class="bg-blue-400 rounded flex items-center justify-center">03</div>
        <div class="bg-blue-400 rounded flex items-center justify-center">04</div>
        <div class="bg-blue-400 rounded flex items-center justify-center">05</div>
      </div>

      <!-- Algin Items : items-stretch -->
      <p class="font-bold mt-4">Align items : items-stretch</p>
      <div class="flex items-stretch gap-2 my-2 p-2 h-[200px] bg-violet-200">
        <div class="py-4 bg-violet-400 w-full rounded flex items-center justify-center">01</div>
        <div class="py-12 bg-violet-400 w-full rounded flex items-center justify-center">02</div>
        <div class="py-8 bg-violet-400 w-full rounded flex items-center justify-center">03</div>
      </div>

      <!-- Algin Items : items-start -->
      <p class="font-bold mt-4">Align items : items-start</p>
      <div class="flex gap-2 items-start my-2 p-2 bg-teal-200">
        <div class="py-4 bg-teal-400 w-full rounded flex items-center justify-center">01</div>
        <div class="py-12 bg-teal-400 w-full rounded flex items-center justify-center">02</div>
        <div class="py-8 bg-teal-400 w-full rounded flex items-center justify-center">03</div>
      </div>

      <!-- Algin Items : items-center -->
      <p class="font-bold mt-4">Align items : items-center</p>
      <div class="flex gap-2 items-center my-2 p-2 bg-rose-200">
        <div class="py-4 bg-rose-400 w-1/3 rounded flex items-center justify-center">01</div>
        <div class="py-12 bg-rose-400 w-1/3 rounded flex items-center justify-center">02</div>
        <div class="py-8 bg-rose-400 w-1/3 rounded flex items-center justify-center">03</div>
      </div>

      <!-- Algin Items : items-end -->
      <p class="font-bold mt-4">Align items : items-end</p>
      <div class="flex gap-2 items-end my-2 p-2 h-[150px] bg-amber-200">
        <div class="py-4 bg-amber-400 w-1/3 rounded flex items-center justify-center">01</div>
        <div class="py-12 bg-amber-400 w-1/3 rounded flex items-center justify-center">02</div>
        <div class="py-8 bg-amber-400 w-1/3 rounded flex items-center justify-center">03</div>
      </div>

      <!-- Algin Items : items-baseline -->
      <p class="font-bold mt-4">Align items : items-baseline</p>
      <div class="flex gap-2 items-baseline my-2 p-2 bg-emerald-200">
        <div class="pt-2 pb-6 bg-emerald-400 w-1/3 rounded flex items-center justify-center">01</div>
        <div class="pt-8 pb-12 bg-emerald-400 w-1/3 rounded flex items-center justify-center">02</div>
        <div class="pt-12 pb-4 bg-emerald-400 w-1/3 rounded flex items-center justify-center">03</div>
      </div>

      <!-- Algin Self : self-auto -->
      <p class="font-bold mt-4">Align self : self-auto</p>
      <div class="flex gap-2 items-stretch my-2 p-2 h-[150px] bg-lime-200">
        <div class="bg-lime-400 w-1/3 rounded flex items-center justify-center">01</div>
        <div class="self-auto bg-lime-400 w-1/3 rounded flex items-center justify-center">02</div>
        <div class="bg-lime-400 w-1/3 rounded flex items-center justify-center">03</div>
      </div>

      <!-- Algin Self : self-start -->
      <p class="font-bold mt-4">Align self : self-start</p>
      <div class="flex gap-2 items-stretch my-2 p-2 h-[150px] bg-stone-200">
        <div class="bg-stone-400 w-1/3 rounded flex items-center justify-center">01</div>
        <div class="self-start bg-stone-400 w-1/3 py-2 rounded flex items-center justify-center">02</div>
        <div class="bg-stone-400 w-1/3 rounded flex items-center justify-center">03</div>
      </div>

      <!-- Algin Self : self-stretch -->
      <p class="font-bold mt-4">Align self : self-stretch</p>
      <div class="flex gap-2 items-stretch my-2 p-2 h-[150px] bg-purple-200">
        <div class="bg-purple-400 w-1/3 rounded flex items-center justify-center">01</div>
        <div class="self-center bg-purple-400 w-1/3 py-2 rounded flex items-center justify-center">02</div>
        <div class="bg-purple-400 w-1/3 rounded flex items-center justify-center">03</div>
      </div>

      <!-- Algin Self : self-end -->
      <p class="font-bold mt-4">Align self : self-end</p>
      <div class="flex gap-2 items-stretch my-2 p-2 h-[150px] bg-fuchsia-200">
        <div class="bg-fuchsia-400 w-1/3 rounded flex items-center justify-center">01</div>
        <div class="self-end bg-fuchsia-400 w-1/3 py-2 rounded flex items-center justify-center">02</div>
        <div class="bg-fuchsia-400 w-1/3 rounded flex items-center justify-center">03</div>
      </div>

      <!-- Algin Self : self-stretch -->
      <p class="font-bold mt-4">Align self : self-stretch</p>
      <div class="flex gap-2 items-stretch my-2 p-2 h-[150px] bg-cyan-200">
        <div class="bg-cyan-400 w-1/3 rounded flex items-center justify-center">01</div>
        <div class="self-stretch bg-cyan-400 w-1/3 rounded flex items-center justify-center">02</div>
        <div class="bg-cyan-400 w-1/3 rounded flex items-center justify-center">03</div>
      </div>

      <!-- Place Content : place-content-center -->
      <p class="font-bold mt-4">Place content : place-content-center</p>
      <div class="grid grid-cols-2 gap-2 place-content-center my-2 p-2 h-48 bg-emerald-200">
        <div class="bg-emerald-400 rounded flex items-center justify-center w-14 h-14">01</div>
        <div class="bg-emerald-400 rounded flex items-center justify-center w-14 h-14">02</div>
        <div class="bg-emerald-400 rounded flex items-center justify-center w-14 h-14">03</div>
        <div class="bg-emerald-400 rounded flex items-center justify-center w-14 h-14">04</div>
      </div>

      <!-- Place Content : place-content-start -->
      <p class="font-bold mt-4">Place content : place-content-start</p>
      <div class="grid grid-cols-2 gap-2 place-content-start my-2 p-2 h-48 bg-amber-200">
        <div class="bg-amber-400 rounded flex items-center justify-center w-14 h-14">01</div>
        <div class="bg-amber-400 rounded flex items-center justify-center w-14 h-14">02</div>
        <div class="bg-amber-400 rounded flex items-center justify-center w-14 h-14">03</div>
        <div class="bg-amber-400 rounded flex items-center justify-center w-14 h-14">04</div>
      </div>

      <!-- Place Content : place-content-end -->
      <p class="font-bold mt-4">Place content : place-content-end</p>
      <div class="grid grid-cols-2 gap-2 place-content-end my-2 p-2 h-48 bg-cyan-200">
        <div class="bg-cyan-400 rounded flex items-center justify-center w-14 h-14">01</div>
        <div class="bg-cyan-400 rounded flex items-center justify-center w-14 h-14">02</div>
        <div class="bg-cyan-400 rounded flex items-center justify-center w-14 h-14">03</div>
        <div class="bg-cyan-400 rounded flex items-center justify-center w-14 h-14">04</div>
      </div>

      <!-- Place Content : place-content-between -->
      <p class="font-bold mt-4">Place content : place-content-between</p>
      <div class="grid grid-cols-2 gap-2 place-content-between my-2 h-48 bg-lime-200">
        <div class="bg-lime-400 rounded flex items-center justify-center w-14 h-14">01</div>
        <div class="bg-lime-400 rounded flex items-center justify-center w-14 h-14">02</div>
        <div class="bg-lime-400 rounded flex items-center justify-center w-14 h-14">03</div>
        <div class="bg-lime-400 rounded flex items-center justify-center w-14 h-14">04</div>
      </div>

      <!-- Place Content : place-content-around -->
      <p class="font-bold mt-4">Place content : place-content-around</p>
      <div class="grid grid-cols-2 gap-2 place-content-around my-2 h-48 bg-sky-200">
        <div class="bg-sky-400 rounded flex items-center w-14 h-14 justify-center">01</div>
        <div class="bg-sky-400 rounded flex items-center w-14 h-14 justify-center">02</div>
        <div class="bg-sky-400 rounded flex items-center w-14 h-14 justify-center">03</div>
        <div class="bg-sky-400 rounded flex items-center w-14 h-14 justify-center">04</div>
      </div>

      <!-- Place Content : place-content-evenly -->
      <p class="font-bold mt-4">Place content : place-content-evenly</p>
      <div class="grid grid-cols-2 gap-2 place-content-evenly my-2 p-4 h-48 bg-emerald-200">
        <div class="bg-emerald-400 rounded flex items-center h-14 w-14 justify-center">01</div>
        <div class="bg-emerald-400 rounded flex items-center h-14 w-14 justify-center">02</div>
        <div class="bg-emerald-400 rounded flex items-center h-14 w-14 justify-center">03</div>
        <div class="bg-emerald-400 rounded flex items-center h-14 w-14 justify-center">04</div>
      </div>

      <!-- Place Content : place-content-stretch -->
      <p class="font-bold mt-4">Place content : place-content-stretch</p>
      <div class="grid grid-cols-2 gap-2 place-content-stretch my-2 p-4 h-48 bg-amber-200">
        <div class="bg-amber-400 rounded flex items-center justify-center">01</div>
        <div class="bg-amber-400 rounded flex items-center justify-center">02</div>
        <div class="bg-amber-400 rounded flex items-center justify-center">03</div>
        <div class="bg-amber-400 rounded flex items-center justify-center">04</div>
      </div>

      <!-- Place Items : place-items-start -->
      <p class="font-bold mt-4">Place Self : place-items-start</p>
      <div class="grid grid-cols-3 gap-2 place-items-start my-2 p-4 h-48 bg-stone-200">
        <div class="bg-stone-400 rounded flex items-center h-14 w-14 justify-center">01</div>
        <div class="bg-stone-400 rounded flex items-center h-14 w-14 justify-center">02</div>
        <div class="bg-stone-400 rounded flex items-center h-14 w-14 justify-center">03</div>
        <div class="bg-stone-400 rounded flex items-center h-14 w-14 justify-center">04</div>
        <div class="bg-stone-400 rounded flex items-center h-14 w-14 justify-center">05</div>
        <div class="bg-stone-400 rounded flex items-center h-14 w-14 justify-center">06</div>
      </div>

      <!-- Place Items : place-items-end -->
      <p class="font-bold mt-4">Place Self : place-items-end</p>
      <div class="grid grid-cols-3 gap-2 place-items-end my-2 p-4 h-48 bg-red-200">
        <div class="bg-red-400 rounded flex items-center h-14 w-14 justify-center">01</div>
        <div class="bg-red-400 rounded flex items-center h-14 w-14 justify-center">02</div>
        <div class="bg-red-400 rounded flex items-center h-14 w-14 justify-center">03</div>
        <div class="bg-red-400 rounded flex items-center h-14 w-14 justify-center">04</div>
        <div class="bg-red-400 rounded flex items-center h-14 w-14 justify-center">05</div>
        <div class="bg-red-400 rounded flex items-center h-14 w-14 justify-center">06</div>
      </div>

      <!-- Place Items : place-items-center -->
      <p class="font-bold mt-4">Place Self : place-items-center</p>
      <div class="grid grid-cols-3 gap-2 place-items-center my-2 p-4 h-48 bg-pink-200">
        <div class="bg-pink-400 rounded flex items-center h-14 w-14 justify-center">01</div>
        <div class="bg-pink-400 rounded flex items-center h-14 w-14 justify-center">02</div>
        <div class="bg-pink-400 rounded flex items-center h-14 w-14 justify-center">03</div>
        <div class="bg-pink-400 rounded flex items-center h-14 w-14 justify-center">04</div>
        <div class="bg-pink-400 rounded flex items-center h-14 w-14 justify-center">05</div>
        <div class="bg-pink-400 rounded flex items-center h-14 w-14 justify-center">06</div>
      </div>

      <!-- Place Items : place-items-stretch -->
      <p class="font-bold mt-4">Place Self : place-items-stretch</p>
      <div class="grid grid-cols-3 gap-2 place-items-stretch my-2 p-4 h-48 bg-emerald-200">
        <div class="bg-emerald-400 rounded flex items-center justify-center">01</div>
        <div class="bg-emerald-400 rounded flex items-center justify-center">02</div>
        <div class="bg-emerald-400 rounded flex items-center justify-center">03</div>
        <div class="bg-emerald-400 rounded flex items-center justify-center">04</div>
        <div class="bg-emerald-400 rounded flex items-center justify-center">05</div>
        <div class="bg-emerald-400 rounded flex items-center justify-center">06</div>
      </div>

      <!-- Place Items : place-items-start -->
      <p class="font-bold mt-4">Place Self : place-items-start</p>
      <div class="grid grid-cols-3 gap-2 place-items-start my-2 p-4 h-48 bg-orange-200">
        <div class="bg-orange-400 rounded flex items-center h-14 w-14 justify-center">01</div>
        <div class="bg-orange-400 rounded flex items-center h-14 w-14 justify-center">02</div>
        <div class="bg-orange-400 rounded flex items-center h-14 w-14 justify-center">03</div>
        <div class="bg-orange-400 rounded flex items-center h-14 w-14 justify-center">04</div>
        <div class="bg-orange-400 rounded flex items-center h-14 w-14 justify-center">05</div>
        <div class="bg-orange-400 rounded flex items-center h-14 w-14 justify-center">06</div>
      </div>

      <!-- Place Self : place-self-auto -->
      <p class="font-bold mt-4">Place Self : place-self-auto</p>
      <div class="grid grid-cols-3 gap-2 p-2 bg-sky-200 h-48 my-2">
        <div class="bg-sky-400 rounded flex items-center justify-center">01</div>
        <div class="place-self-auto bg-sky-500 rounded flex items-center justify-center">02</div>
        <div class="bg-sky-400 rounded flex items-center justify-center">03</div>
        <div class="bg-sky-400 rounded flex items-center justify-center">04</div>
        <div class="bg-sky-400 rounded flex items-center justify-center">05</div>
        <div class="bg-sky-400 rounded flex items-center justify-center">06</div>
      </div>

      <!-- Place Self : place-self-start -->
      <p class="font-bold mt-4">Place Self : place-self-start</p>
      <div class="grid grid-cols-3 gap-2 p-2 bg-lime-200 h-[400px] my-2">
        <div class="bg-lime-400 rounded flex items-center justify-center">01</div>
        <div class="place-self-start bg-lime-500 rounded flex items-center w-14 h-14 justify-center">02</div>
        <div class="bg-lime-400 rounded flex items-center justify-center">03</div>
        <div class="bg-lime-400 rounded flex items-center justify-center">04</div>
        <div class="bg-lime-400 rounded flex items-center justify-center">05</div>
        <div class="bg-lime-400 rounded flex items-center justify-center">06</div>
      </div>

      <!-- Place Self : place-self-center -->
      <p class="font-bold mt-4">Place Self : place-self-center</p>
      <div class="grid grid-cols-3 gap-2 p-2 bg-zinc-200 h-[400px] my-2">
        <div class="bg-zinc-400 rounded flex items-center justify-center">01</div>
        <div class="bg-zinc-500 place-self-center rounded flex items-center w-14 h-14 justify-center">02</div>
        <div class="bg-zinc-400 rounded flex items-center justify-center">03</div>
        <div class="bg-zinc-400 rounded flex items-center justify-center">04</div>
        <div class="bg-zinc-400 rounded flex items-center justify-center">05</div>
        <div class="bg-zinc-400 rounded flex items-center justify-center">06</div>
      </div>
      
      <!-- Place Self : place-self-end -->
      <p class="font-bold mt-4">Place Self : place-self-end</p>
      <div class="grid grid-cols-3 gap-2 p-2 bg-indigo-200 h-[400px] my-2">
        <div class="bg-indigo-400 rounded flex items-center justify-center">01</div>
        <div class="place-self-end bg-indigo-500 rounded flex items-center w-14 h-14 justify-center">02</div>
        <div class="bg-indigo-400 rounded flex items-center justify-center">03</div>
        <div class="bg-indigo-400 rounded flex items-center justify-center">04</div>
        <div class="bg-indigo-400 rounded flex items-center justify-center">05</div>
        <div class="bg-indigo-400 rounded flex items-center justify-center">06</div>
      </div>

      <!-- Place Self : place-self-stretch -->
      <p class="font-bold mt-4">Place Self : place-self-stretch</p>
      <div class="grid grid-cols-3 gap-2 p-2 bg-cyan-200 h-[400px] my-2">
        <div class="bg-cyan-400 rounded flex items-center justify-center">01</div>
        <div class="place-self-stretch bg-cyan-500 rounded flex items-center justify-center">02</div>
        <div class="bg-cyan-400 rounded flex items-center justify-center">03</div>
        <div class="bg-cyan-400 rounded flex items-center justify-center">04</div>
        <div class="bg-cyan-400 rounded flex items-center justify-center">05</div>
        <div class="bg-cyan-400 rounded flex items-center justify-center">06</div>
      </div>

    </div>
  <!-- </div> -->
</template>
