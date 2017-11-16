import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import Theme from './theme';

/**
 * Styled Components provides some advanced features that
 * help applications scale, and help you re-use code in
 * your org.
 *
 * Let's start with `ThemeProvider`. `ThemeProvider` lets you specify
 * a theme for you application, and use it in all of your components.
 * You can dynamically update the theme, and all of your styles will
 * update in turn.
 *
 * This means a few things:
 *   - easily implement application-wide UI themes in your application
 *   - have sub-sections of your app use different styles
 *   - share components across apps, but with a different theme
 *
 * Themes, in their most basic useage, are just `Objects`. So you
 * can store hex color strings, image urls, padding sizes, and
 * anything else you can dream of.
 *
 * Let's revisit the wrapper and button demos from before,
 * but with a theme. The only code in the components that's changed
 * is that we're using our theme for things like colors, padding,
 * font-sizes, etc.
 *
 */

const Title = styled.h1`
  font-size: ${ props => props.theme.fontSize }em;
  text-align: center;
  color: ${ props => props.theme.color };
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: ${ props => props.theme.wrapperPadding }em;
  background: ${ props => props.theme.backgroundColor };
`;

const Button = styled.button`
  border-radius: ${ props => props.theme.buttonBorderRadius }px;
  padding: 0.5em 1em;
  margin: 0 1em;
  background: transparent;
  color: ${ props => props.theme.color };
  border: 2px solid ${ props => props.theme.color };

  ${ props => props.primary && css`
    background: ${ props => props.theme.color };
    color: ${ props => props.theme.backgroundColor };
  `}
`;

export const ThemeDemo = () => (
  <ThemeProvider theme={ Theme }>
    <Wrapper>
      <Title>
        Here's a themed demo
      </Title>
      <br />
      <div>
        <Button>
          Default Theme Button
        </Button>
        <Button primary>
          Primary Theme Button
        </Button>
      </div>
    </Wrapper>
  </ThemeProvider>
);

/**
 * Try changing the Theme, adding your own styles, and making
 * components that use the Theme
 */

 /**
  * Let's explore some other ways we can share styles with
  * the `css` helper. `css` lets you write chunks of styles
  * can be shared between different components.
  * It can rely on `theme`, or component props.
  *
  * Let's say application has some error styles that should
  * apply to different components. e.g. we want to color the border
  * and text of whatever element has an error.
  *
  * `css` to the rescue!
  */

  const errorStyles = css`
    ${ props => props.error && css`
      border-color: ${ props => props.theme.highlight };
      color: ${ props => props.theme.highlight };
    `};
  `;

  const InputWithErrors = styled.input`
    outline: none;
    padding: 0.5em 1em;
    border: 1px solid ${ props => props.theme.lowlight };
    border-radius: ${ props => props.theme.buttonBorderRadius };
    background-color: ${ props => props.theme.color };
    color: ${ props => props.theme.backgroundColor };

    // Mixin error styles.
    // Put it last so it can overwrite styles if necessary
    ${ errorStyles };
  `;

export const ButtonWithErrors = styled(Button)`
  ${ errorStyles };
`;

export const TitleWithErrros = styled(Title)`
  ${ errorStyles };
`;

export const CSSSharingDemo = () => (
  <ThemeProvider theme={ Theme }>
    <Wrapper>
      <TitleWithErrros error>
        Mixing styles together for re-use
      </TitleWithErrros>
      <br />
      <InputWithErrors
        error
        type="text"
        value="error text"
      />
      <ButtonWithErrors error>
        Button with Errors
      </ButtonWithErrors>
    </Wrapper>
  </ThemeProvider>
);


/**
 * Applying styles to any component
 *
 * You may noticed above, that we used `styled` to apply
 * the `${ errorStyles }` to our pre-existing components
 * `Button` and `Title`. This is a powerful way that can be
 * be used to apply styles to any component!
 *
 * `styled` itself can be used to wrap any component.
 * In the case of `ButtonWithErrors`, `styled(Button)` is creating
 * a new component that wrappers `Button`. `ButtonWithErrors`
 * can have its own styles, and `styled-componens` generates
 * a classname for those styles, and then passes it, and any other
 * arguments of the component, to `Button`. This means
 * you can easily wrap components within `styled` to adjust them.
 *
 * This is especially handy for sharing code. e.g. make some base
 * components and UI in your application. Then, if you have
 * any one-off use-cases, you can use `styled`.
 */

/**
 * Try going back to our todo list example, and applying some styles
 * to the `ListInput` and `ListItem` components
 */


/**
 * Nested Selectors
 *
 * One last feature we should cover is nested-selectors.
 *
 * Most of the time in styled-components, you don't need to
 * resort using css selectors that modify something multiple layers
 * down in the component hierarchy. But, it does happen.
 *
 * Any styled-component class can be used as a css selector inside
 * your styles! As long as you can import the styled-component
 * you want to apply styles to, you can!
 *
 * Let's make a simple demo of this by making our buttons
 * have a box-shadow when we hover anywhere on the wrapper.
 * Let's also adjust the `Title`
 *
 */

export const HoverableWrapper = styled(Wrapper)`
  ${ Title } {
    font-weight: bold;
    text-decoration: underline;
  }

  ${ Button } {
    transition: box-shadow 0.3s ease;
  }

  &:hover {
    ${ Button } {
      box-shadow: 2px 2px 2px 2px ${ props => props.theme.lowlight };
    }
  }
`;

export const NestedSelectorsDemo = () => (
  <ThemeProvider theme={ Theme }>
    <HoverableWrapper>
      <Title>
        Styled-Component as Selectors
      </Title>
      <br />
      <div>
        <Button>
          Check Out The
        </Button>
        <Button primary>
          Cool Box-Shadow
        </Button>
      </div>
    </HoverableWrapper>
  </ThemeProvider>
);
