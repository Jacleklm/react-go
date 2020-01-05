import {ThemeContext} from './theme-context';
import React from 'react'

class ThemedButton extends React.Component {
  // const result = useContext(ThemeContext)
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;