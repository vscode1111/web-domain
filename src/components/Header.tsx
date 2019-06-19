import { Link } from "./Link";

const linkStyle = {
  marginRight: 15
}

export default () =>
  <>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </>

