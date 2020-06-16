/*
 * ItemsPage Messages
 *
 * This contains all the text for the ItemsPage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.ItemsPage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Start your next react project in seconds',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
  },
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Items',
  },
  itemsHeader: {
    id: `${scope}.scaffolding.header`,
    defaultMessage: 'Quick scaffolding',
  },
  itemID: {
    id: `${scope}.interaction.itemID`,
    defaultMessage: 'Insert item ID',
  },
  itemName: {
    id: `${scope}.interaction.name`,
    defaultMessage: 'Insert Name',
  },
  scaffoldingHeader: {
    id: `${scope}.scaffolding.header`,
    defaultMessage: 'Quick scaffolding',
  },
  itemsMessage: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: `Automate the creation of components, containers, routes, selectors
  and sagas - and their tests - right from the CLI!`,
  },
  scaffoldingMessage: {
    id: `${scope}.scaffolding.message`,
    defaultMessage: `Automate the creation of components, containers, routes, selectors
  and sagas - and their tests - right from the CLI!`,
  },
  feedbackHeader: {
    id: `${scope}.feedback.header`,
    defaultMessage: 'Instant feedback',
  },
  feedbackMessage: {
    id: `${scope}.feedback.message`,
    defaultMessage: `
      Enjoy the best DX and code your app at the speed of thought! Your
    saved changes to the CSS and JS are reflected instantaneously
    without refreshing the page. Preserve application state even when
    you update something in the underlying code!
    `,
  },
  stateManagementHeader: {
    id: `${scope}.state_management.header`,
    defaultMessage: 'Predictable state management',
  },
  stateManagementMessages: {
    id: `${scope}.state_management.message`,
    defaultMessage: `
      Unidirectional data flow allows for change logging and time travel
    debugging.
    `,
  },
  javascriptHeader: {
    id: `${scope}.javascript.header`,
    defaultMessage: 'Next generation JavaScript',
  },
  javascriptMessage: {
    id: `${scope}.javascript.message`,
    defaultMessage: `Use template strings, object destructuring, arrow functions, JSX
    syntax and more, today.`,
  },
  cssHeader: {
    id: `${scope}.css.header`,
    defaultMessage: 'Items',
  },
  cssMessage: {
    id: `${scope}.css.message`,
    defaultMessage: 'Next generation CSS',
  },
  routingHeader: {
    id: `${scope}.routing.header`,
    defaultMessage: 'Industry-standard routing',
  },
  routingMessage: {
    id: `${scope}.routing.message`,
    defaultMessage: `
      Write composable CSS that's co-located with your components for
    complete modularity. Unique generated class names keep the
    specificity low while eliminating style clashes. Ship only the
    styles that are on the page for the best performance.
    `,
  },
  networkHeader: {
    id: `${scope}.network.header`,
    defaultMessage: 'Offline-first',
  },
  networkMessage: {
    id: `${scope}.network.message`,
    defaultMessage: `
      The next frontier in performant web apps: availability without a
      network connection from the instant your users load the app.
    `,
  },
  intlHeader: {
    id: `${scope}.internationalization.header`,
    defaultMessage:
      'Complete i18n Standard Internationalization & Pluralization',
  },
  intlMessage: {
    id: `${scope}.internationalization.message`,
    defaultMessage:
      'Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.',
  },
});
