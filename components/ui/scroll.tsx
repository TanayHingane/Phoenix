import SectionHeader from "./SectionHead";

const Board = () => {
  const items = [
    {
      type: "text",
      content:
        "My Love for travel\nI’m a good designer & a good observer. When I travel, I explore the world, gain new experiences, and document.",
    },

    {
      type: "image",
      src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80",
    },
  ];

  return (
    <div className="p-4 -mt-36 max-w-2xl mx-4 md:mx-auto">
      <SectionHeader title="My Clicks" description="Watch my clicks :)" />
      <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-3 gap-4 mt-14">
        {items.map((item, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            {item.type === "text" ? (
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-lg font-semibold text-blue-600">
                  {item.content.split("\n")[0]}
                </p>
                <p className="text-sm text-gray-600">
                  {item.content.split("\n").slice(1).join("\n")}
                </p>
              </div>
            ) : (
              <img
                src={item.src}
                alt={`Image ${index}`}
                className="w-full rounded-lg shadow"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
