import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export const Layout: React.FunctionComponent<any> = props => {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}
