# Sorting Visualizer

An interactive web application that visualizes popular sorting algorithms in real-time. Built with **React** and **Tailwind CSS**, this project makes it easy to understand how different sorting techniques work step-by-step.

## Features

- **Real-time Visualization**: Watch algorithms sort arrays dynamically.
- **Smooth Animations**: Powered by `requestAnimationFrame` for optimal performance.
- **Interactive Controls**: Generate new arrays, adjust animation speed, and switch between algorithms.
- **Color-Coded Steps**: Clearly distinguish between comparing, swapping, and pivot elements.

## Supported Algorithms

Bubble Sort
Selection Sort
Insertion Sort
Quick Sort

## Color Legend

The visualizer uses color coding to help you understand what's happening at each step:
- 🔵 **Blue**: Default / Unsorted element
- 🟡 **Yellow**: Currently being compared
- 🔴 **Red**: Being swapped / moved
- 🟣 **Purple**: Key element (e.g., current minimum or insertion key)
- ⚪ **White Border**: Pivot element (used in Quick Sort)

## Tech Stack

- **Framework**: React (bootstrapped with Vite)
- **Styling**: Tailwind CSS
- **Logic**: Vanilla JavaScript
- **Animation**: `requestAnimationFrame` + `setTimeout` for speed control

## Author
