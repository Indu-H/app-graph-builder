import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const nodes = [
  {
    id: '1',
    position: { x: 100, y: 100 },
    data: { label: 'App Service' },
    type: 'default',
  },
  {
    id: '2',
    position: { x: 400, y: 100 },
    data: { label: 'Database' },
    type: 'default',
  },
];

const edges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
  },
];

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
