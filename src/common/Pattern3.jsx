export const DiscoverPattern = () => {
  const renderRow = (index) => {
    const pattern = "DISCOVER ";
    const repetitions = 7;
    let translateNBy = -(37.5 - 3 * index); 
    return (
      <div key={index} style={{ transform: `translateX(${translateNBy}rem)` }}>
        {pattern.repeat(repetitions)}
      </div>
    );
  };

  const renderPattern = () => {
    const rows = [];
    const totalRows = 10;
    for (let i = 0; i < totalRows; i++) {
      rows.push(renderRow(i));
    }
    return rows;
  };

  return <div className="overflow-hidden min-w-max">{renderPattern()}</div>;
};

export const ExplorePattern = () => {
  const renderRow = (index) => {
    const pattern = "Explore ";
    const repetitions = 7;
    let translateNBy = (27 - 3 * index); // Calculate translation dynamically
    return (
      <div key={index} style={{ transform: `translateX(${translateNBy}rem)` }}>
        {pattern.repeat(repetitions)}
      </div>
    );
  };

  const renderPattern = () => {
    const rows = [];
    const totalRows = 10;
    for (let i = 0; i < totalRows; i++) {
      rows.push(renderRow(i));
    }
    return rows;
  };

  return <div className="overflow-hidden min-w-max">{renderPattern()}</div>;
};
