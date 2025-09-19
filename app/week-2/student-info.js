import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Name: Steven Brar</p>
      <p>
        GitHub:{" "}
        <Link href="https://github.com/StevenBrar" target="_blank">
          https://github.com/StevenBrar
        </Link>
      </p>
    </div>
  );
}
