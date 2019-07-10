# ![alt text](./icons8-kiwi-80.png) react-kiwi-dropdown

A minimal, easy-to-use and highly adjustable dropdown component made with React and styled-components.

## Props

There's only two required props, **options** and **onChange**.

| Name               | Type                 | Description                          |
| ------------------ | -------------------- | ------------------------------------ |
| options            | array                | An array containing option objects\* |
| selectedOption     | string               | The currently selected value         |
| onChange           | function             | Function to call on change           |
| buttonLabel        | string               | Button text                          |
| buttonIndicator    | boolean              | Show selected indicator on button    |
| buttonArrow        | 'single' or 'double' | Arrow style, single or double        |
| selectedOptionIcon | any                  | Custom icon for selected option      |

## Option object

| Name    | Type   | Description        | Required |
| ------- | ------ | ------------------ | -------- |
| value   | string | Option value       | required |
| content | any    | Content to display | required |
| icon    | any    | Any component      |

## Styling

The dropdown can easily be styled by extending the component with styled-components **styled()** function.
Use predefined ids and classNames to add style to specific components.

| id/className      | Description              | Selected className |
| ----------------- | ------------------------ | ------------------ |
| #button           | Button to toggle options |                    |
| .button-indicator | any                      | &.selected         |
| #option-list      | Option list              |                    |
| .option           | Option                   | &.selected         |

### Example

```javascript
const StyledDropdown = styled(Dropdown)`
  #button {
    background: red;
  }

  .button-indicator {
    background: green;

    &.selected {
      background: pink;
    }
  }

  #option-list {
    background: yellowgreen;
    padding: 5px;
  }

  .option {
    background: lightcoral;

    &.selected {
      background: blue;
    }
  }
`
```

## Examples

https://react-kiwi-dropdown.netlify.com/
