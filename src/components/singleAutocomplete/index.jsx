import useAutocomplete from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";

const Label = styled("label")({
  display: "block",
});

const Input = styled("input")(({ theme }) => ({
  border: "1px solid #e8e8e8",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  color: theme.palette.mode === "light" ? "#000" : "#fff",
}));

const Listbox = styled("ul")(({ theme }) => ({
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: "absolute",
  listStyle: "none",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  overflow: "auto",
  maxHeight: 200,
  border: "1px solid rgba(0,0,0,.25)",
  "& li.Mui-focused": {
    backgroundColor: "#4a8df6",
    color: "white",
    cursor: "pointer",
  },
  "& li:active": {
    backgroundColor: "#2977f5",
    color: "white",
  },
}));

export default function UseAutocomplete() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: datas,
    getOptionLabel: (option) => option.title,
  });

  return (
    <div className="w-full">
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>Tags:</Label>
        <Input
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "34px",
            display: "flex",
          }}
          {...getInputProps()}
        />
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>{option.title}</li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
}

const datas = [
  { title: "Java", year: 1994 },
  { title: "Python", year: 1972 },
  { title: "Ruby", year: 1974 },
  { title: "C#", year: 2008 },
  { title: "JavaScript", year: 1957 },
  { title: "C++", year: 1993 },
  { title: "HTML", year: 1994 },
  { title: "CSS", year: 2003 },
  { title: "Perl", year: 1966 },
  { title: "Swift", year: 1999 },
  { title: "Rust", year: 2001 },
  { title: "Go", year: 1980 },
  { title: "PHP", year: 1994 },
  { title: "Kotlin", year: 2010 },
  { title: "TypeScript", year: 2002 },
  { title: "Scala", year: 1975 },
  { title: "Haskell", year: 1990 },
  { title: "R", year: 1999 },
  { title: "Elixir", year: 1954 },
  { title: "SQL", year: 1977 },
  { title: "React", year: 2002 },
  { title: "Angular", year: 1995 },
  { title: "Vue.js", year: 1991 },
  { title: "Node.js", year: 1946 },
  { title: "Laravel", year: 1997 },
  { title: "Django", year: 1995 },
  { title: "Spring", year: 1994 },
  { title: "Express.js", year: 2001 },
  { title: "Ruby on Rails", year: 1998 },
  { title: "Flask", year: 1968 },
  { title: "Android", year: 1998 },
  { title: "iOS", year: 1960 },
  { title: "TensorFlow", year: 1991 },
  { title: "PyTorch", year: 1985 },
  { title: "OpenCV", year: 1957 },
  { title: "Unity", year: 1981 },
  { title: "Bootstrap", year: 1942 },
  { title: "jQuery", year: 1931 },
  { title: "Selenium", year: 1960 },
  { title: "Docker", year: 1999 },
  { title: "Git", year: 2014 },
  { title: "Mocha", year: 1942 },
  { title: "Jenkins", year: 1936 },
  { title: "Redis", year: 1981 },
  { title: "PostgreSQL", year: 1941 },
  { title: "MongoDB", year: 1959 },
  { title: "Elasticsearch", year: 1958 },
  { title: "Apache Kafka", year: 1983 },
  { title: "GraphQL", year: 1992 },
  { title: "Flask-SQLAlchemy", year: 1995 },
  { title: "Pandas", year: 1931 },
];
