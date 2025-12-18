# App Graph Builder – Reasoning

This project is a frontend implementation of an App Graph Builder using ReactFlow.

## Approach
I started by setting up a React + Vite + TypeScript (strict) project to ensure fast development, scalability, and type safety.

The core focus of this task is the interactive canvas. ReactFlow is used to render nodes and edges, allowing a visual representation of application components and their relationships.

## Implementation Details
- A ReactFlow canvas is rendered as the main workspace.
- Nodes such as **App Service** and **Database** are displayed on the canvas.
- An edge connects the nodes to represent dependency/flow.
- Built-in ReactFlow controls (zoom, pan, fit view) are enabled.
- The layout is intentionally minimal to focus on clarity and interaction.

## Design Decisions
- ReactFlow was chosen to manage node positioning, connections, and canvas interactions cleanly.
- Nodes and edges are defined using typed configurations for clarity and maintainability.
- The structure is kept simple so additional node types and interactions can be added easily.

## Library Usage Note
Zustand and TanStack Query are included as part of the required stack.  
Given the limited scope of this task, the current implementation focuses on the ReactFlow canvas and graph rendering.  
The project structure is intentionally designed to support global state management (Zustand) and async data handling (TanStack Query) in future iterations.

## Future Improvements
- Add draggable nodes from a sidebar.
- Persist graph state using Zustand.
- Sync graph data with an API using TanStack Query.
- Enhance UI using shadcn/ui components.
