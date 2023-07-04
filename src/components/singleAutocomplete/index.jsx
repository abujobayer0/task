import { ReactSearchAutocomplete } from "react-search-autocomplete";

function SingleAutocomplete() {
  // note: the id field is mandatory
  const items = [
    {
      id: 0,
      title: "Titanic",
      description: "A movie about love",
    },
    {
      id: 1,
      title: "Dead Poets Society",
      description: "A movie about poetry and the meaning of life",
    },
    {
      id: 2,
      title: "Terminator 2",
      description: "A robot from the future is sent back in time",
    },
    {
      id: 3,
      title: "Alien 2",
      description: "Ripley is back for a new adventure",
    },
  ];
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };
  const handleOnClear = () => {
    console.log("Cleared");
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          id: {item.id}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          name: {item.name}
        </span>
      </>
    );
  };

  return (
    <div className="SingleAutocomplete  ">
      <div className="w-full m-0 md:m-10 md:w-1/2">
        <h2>Tags:</h2>
        <ReactSearchAutocomplete
          items={items}
          fuseOptions={{ keys: ["title", "description"] }} // Search on both fields
          resultStringKeyName="title" // String to display in the results
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          onClear={handleOnClear}
          showIcon={false}
          styling={{
            height: "34px",
            border: "1px solid purple",
            borderRadius: "0px",
            backgroundColor: "white",
            boxShadow: "none",
            hoverBackgroundColor: "purple",
            color: "purple",
            fontSize: "20px",
            fontFamily: "serif",
            iconColor: "purple",
            lineColor: "purple",
            placeholderColor: "purple",
            clearIconMargin: "3px 8px 0 0",
            zIndex: 2,
            width: "100%",
          }}
        />
      </div>
    </div>
  );
}

export default SingleAutocomplete;
