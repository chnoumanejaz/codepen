function CodeOutput({ output, display }) {
  return (
    <div
      className={`h-full ${
        display !== 'home' ? ' bg-white' : 'bg-primary w-full h-full rounded-md'
      } overflow-hidden`}>
      <iframe
        title="Output"
        srcDoc={output}
        className="border-none w-full h-full"
      />
    </div>
  );
}

export default CodeOutput;
