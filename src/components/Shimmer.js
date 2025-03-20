const ShimmerCard = () => {
    return (
      <div className="shimmer-card">
        <div className="shimmer-image"></div>
        <div className="shimmer-title"></div>
        <div className="shimmer-subtitle"></div>
        <div className="shimmer-meta"></div>
      </div>
    );
  };


const ShimmerUI = () => {
    return (
      <div className="shimmer-container">
        {Array(19) // Adjust number based on expected cards
          .fill("")
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
      </div>
    );
  };
  
  export default ShimmerUI;