# App Graph Builder – Reasoning

This project is a basic implementation of an App Graph Builder interface.

## Approach
I started by setting up a React + Vite + TypeScript project to ensure fast development and type safety.

The UI is divided into three main sections:
1. A header showing the application title.
2. A sidebar representing available components like services and databases.
3. A central canvas area where the graph will be built in the future.

## Design Decisions
- The canvas is represented as a placeholder to clearly indicate where graph interactions will happen.
- The sidebar provides a conceptual idea of draggable components.
- The layout is kept simple and readable to focus on structure and clarity.

## Future Improvements
- Integrating ReactFlow to render interactive nodes and edges.
- Managing graph state using Zustand.
- Fetching and syncing data using TanStack Query.

This implementation focuses on clean structure, clarity, and extensibility.
