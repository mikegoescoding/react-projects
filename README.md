# react-projects

A collection of React projects — from quick experiments to intermediate builds.

## Projects

### quick-count

A simple counter app with increment and decrement buttons.
Built with `useState`.

### quick-switch

A light/dark mode toggle. Switches page background and text between light and dark.
Built with `useState` and `useEffect`.

### quick-ingredients

A dual-input ingredient list. Add items manually via text input or step through a preset list one by one. Button disables when preset list is exhausted.
Built with `useState`, `useEffect`, and controlled inputs.

### quick-filter

A real-time search filter for a list of items. Input filters results instantly as you type, case-insensitive.
Built with `useState`, `useEffect`, and array filtering.

### quick-toggle

A store pickup or delivery selector. Two-button toggle with active state styling, icon display, and reset.
Built with `useState`, conditional classNames, and accessibility attributes (`aria-pressed`, `aria-label`, `role="group"`).

### quick-dataflow

A parent-owned state exercise with multiple child components. Explores how state lives in a parent and flows down to children as props, how children trigger parent state changes through function props, and how multiple components can consume the same state simultaneously. Implements both a live update pattern and a form submit pattern with local child state and controlled inputs.
Built with `useState`, controlled inputs, and function props.

### quick-timer

A countdown timer from 10 to 0 with start, stop, and reset controls. Stops automatically at zero.
Built with `useState`, `useEffect`, and `useRef` for interval management.

### quick-controlled-form

Form with three controlled inputs — firstName, lastName, and email. Using a single object in state and a single handleChange function. Displays the three values so you can see them updating live.
Built with `useState`

### quick-cart

A small product list with add to cart functionality, individual item removal, and a running total.
Built with `useState`, speading arrays, `filter`, `reduce`, and `Date.now()` for unique cart entry IDs.

### quick-tempconvert

A two-input temperature converter. Type in either Celsius or Fahrenheit and the other updates automatically. Demonstrates lifting state to a common parent so sibling components can share and sync a single piece of state.
Built with `useState`, controlled inputs, and derived state calculations.

## Tech Stack

React, Vite, JavaScript

## Running any project

Each project lives in its own folder. To run:

```bash
cd project-name
npm install
npm run dev
```
