import React from 'react';
import styled, { css } from 'styled-components';

/**
 * Styled-Components is a library for writing components in React.
 *
 * One of the core-philosophies is that that your styles should
 * be co-located with your components.
 *
 * This has a lot of interesting side-effects we'll discuss in a bit.
 * But first, let's start with this example from the styled-components
 * website.
 */

 // Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export const Demo = () => (
  <Wrapper>
    <Title>
      CSS is easy and fun with styled-components
    </Title>
  </Wrapper>
);

/**
 * Styled-components combines the best of ES6 and CSS best practices
 * to hlep you focus on whats important, building your application.
 *
 * Styled-components handles a lot of things for us:
 *   - generating classnames for our styles
 *   - vendor prefixes
 *   - dynamic styles, without worrying about classnames!
 *   - BEM and other CSS best practices
 *   - Theming your application
 *   - easily encapsulate layout and style logic to components
 *
 * Let's see an example of components that take in properties
 */

/**
 * This button component adapts its styles if its a primary
 * button or not.
 */
const Button = styled.button`
  border-radius: 3px;
  padding: 0.5em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${ props => props.primary && `
    background: palevioletred;
    color: white;
  `}
`;

export const ButtonsDemo = () => (
  <Wrapper>
    <Button>
      Normal Button
    </Button>
    <Button primary>
      Primary Button
    </Button>
  </Wrapper>
);

/**
 * With this ability to pass props to a component, that
 * are then in-turn accessible to our styles, we can
 * do very interesting things.
 *
 * As an example, in CSS, we spend a lot time writing different
 * row layouts, where we want everything centered vertically
 * but useing slightly different distances between elements, or
 * etc. Here's an example of we can combine FlexBox and
 * styled-components
 */

export const Box = styled.div`
  box-sizing: border-box;
  height: ${ props => props.size }px;
  width: ${ props => props.size }px;
  line-height: ${ props => props.size }px;
  background-color: ${ props => props.color };
`;


const boxes = [
  <Box
    key='purple'
    color='purple'
    size={ 60 }
  />,
  <Box
    key='magenta'
    color='magenta'
    size={ 80 }
  />,
  <Box
    key='orange'
    color='orange'
    size={ 30 }
  />,
  <Box
    key='lime'
    color='lime'
    size={ 40 }
  />,
  <Box
    key='cornflowerblue'
    color='cornflowerblue'
    size={ 50 }
  />
];


export const FlexRow = styled.div`
  display: flex;
  // vertically center everything
  align-items: center;
  flex-direction: ${ props => props.reversed && 'row-reverse' };
  flex-wrap: ${ props => props.wrapped && 'wrap' };

  justify-content: ${ props => {
    switch (props.justify) {
      case 'start': return 'flex-start';
      case 'end': return 'flex-end';
      case 'center': return 'center';
      case 'between': return 'space-between';
      case 'around': return 'space-around';
      default: return 'space-evenly';
    }
  }};
`;

/**
 * Shows off how easy it is to build different layouts
 * with styled-components. Try changing different
 * properties from the above and see what you get!
 * You can also modify `boxes` to have more or less items
 */
export const FlexDemo = () => (
  <div>
    <Wrapper>
      <FlexRow>
        { boxes }
      </FlexRow>
    </Wrapper>
    <br />
    <br />
    <Wrapper>
      <FlexRow reversed justify={ 'between' }>
        { boxes }
      </FlexRow>
    </Wrapper>
  </div>
);


/**
 * Now that you've seen the basics, try making some components
 */

 export const YourFirstStyledComponents = () => (
   <Wrapper>
     Try styling this
   </Wrapper>
 )