import Header from './Header'
import { ReactNode } from 'react';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

export const Layout: React.FunctionComponent<{ children?: ReactNode }> = props =>
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
