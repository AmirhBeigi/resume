import cleanURL from "../utils/cleanURL";

type Props = {
  firstName: string;
  lastName?: string;
  title: string;
  website: string;
  description: string;
};

export default function Biography({
  firstName,
  lastName,
  title,
  website,
  description,
}: Props) {
  return (
    <header>
      <span
        style={{
          display: "block",
          fontSize: "1em",
          marginBottom: ".25rem",
          letterSpacing: "4px",
        }}
      >
        HELLO! {"  "}I'M
      </span>
      <h1
        style={{
          fontSize: "3em",
          fontWeight: "900",
          marginTop: 0,
          marginBottom: ".1em",
          lineHeight: 1,
          color: "#333",
          transform: "translateX(-2px)",
        }}
      >
        {firstName} <br /> {lastName || ""}
      </h1>
      <span
        style={{ display: "block", fontSize: "1.3em", marginBottom: ".1em" }}
      >
        {title}
        {/* <a
          href="https://imehdi.dev"
          style={{ color: "#333", textDecoration: "none" }}
        >
          {cleanURL(website)}
        </a> */}
      </span>
      <p
        style={{
          fontSize: "1em",
          lineHeight: 1.8,
          color: "#777",
          margin: 0,
        }}
      >
        {description}
      </p>
    </header>
  );
}