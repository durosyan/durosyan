---
title: 'Implementing Infinite Scrolling in React'
# date: '2025-01-16'
tags: 'react, infinite scrolling, engineering'
---

[react-window](https://github.com/bvaughn/react-window)

[code-sandbox](https://codesandbox.io/p/sandbox/github/bvaughn/react-window/tree/master/website/sandboxes/fixed-size-list-vertical)

I want to implement infinite scrolling on my website, but displaying all the content at once can be bad for memory and may cause lag when scrolling through large amounts of data.

To address this, I plan to implement an active content window. This approach will render content within the viewport and remove it once it exits the viewport, ensuring efficient memory usage and smooth scrolling.

Unfortunately I didn't really like that it was in its own scroll context, so I decided to bin this. I might end up going for pagination or a component that implements actual infinite scrolling.